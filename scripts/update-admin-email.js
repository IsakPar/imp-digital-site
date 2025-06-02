const { MongoClient } = require('mongodb')
const bcrypt = require('bcryptjs')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env.local') })

async function updateAdminEmail() {
  console.log('🔍 Environment variables:')
  console.log('DATABASE_URI:', process.env.DATABASE_URI ? 'Set' : 'Not set')
  
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
    
    // Remove all existing users
    const deleteResult = await usersCollection.deleteMany({})
    console.log(`🗑️ Removed ${deleteResult.deletedCount} existing user(s)`)
    
    // Hash the password
    const hashedPassword = await bcrypt.hash('admin123', 10)
    
    // Create the new admin user with updated email
    const user = {
      email: 'isak@imp-cap.se',
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    
    const result = await usersCollection.insertOne(user)
    
    console.log('✅ Admin user updated successfully!')
    console.log(`📧 New Email: isak@imp-cap.se`)
    console.log(`🔑 Password: admin123 (please change this after first login)`)
    console.log(`🆔 User ID: ${result.insertedId}`)
    console.log(`🌐 Admin URL: http://localhost:3000/admin`)
    
  } catch (error) {
    console.error('❌ Error updating admin user:', error)
  } finally {
    await client.close()
  }
}

updateAdminEmail() 