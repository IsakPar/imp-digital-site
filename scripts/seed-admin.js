const { MongoClient } = require('mongodb')
const bcrypt = require('bcryptjs')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env.local') })

async function createFirstUser() {
  console.log('🔍 Environment variables:')
  console.log('DATABASE_URI:', process.env.DATABASE_URI ? 'Set' : 'Not set')
  console.log('PAYLOAD_SECRET:', process.env.PAYLOAD_SECRET ? 'Set' : 'Not set')
  
  if (!process.env.DATABASE_URI) {
    console.error('❌ DATABASE_URI environment variable is not set!')
    console.log('Please check your .env.local file')
    process.exit(1)
  }
  
  const client = new MongoClient(process.env.DATABASE_URI)
  
  try {
    await client.connect()
    console.log('🔗 Connected to MongoDB')
    
    const db = client.db()
    const usersCollection = db.collection('users')
    
    // Check if any users exist
    const existingUsers = await usersCollection.countDocuments()
    
    if (existingUsers > 0) {
      console.log('👥 Users already exist in the database')
      console.log(`Found ${existingUsers} user(s)`)
      return
    }
    
    // Hash the password
    const hashedPassword = await bcrypt.hash('admin123', 10)
    
    // Create the first admin user
    const user = {
      email: 'isak@imp-cap.se',
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    
    const result = await usersCollection.insertOne(user)
    
    console.log('✅ First admin user created successfully!')
    console.log(`📧 Email: isak@imp-cap.se`)
    console.log(`🔑 Password: admin123 (please change this after first login)`)
    console.log(`🆔 User ID: ${result.insertedId}`)
    console.log(`🌐 Admin URL: http://localhost:3000/admin`)
    
  } catch (error) {
    console.error('❌ Error creating first user:', error)
  } finally {
    await client.close()
  }
}

createFirstUser() 