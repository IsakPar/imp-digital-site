import payload from 'payload'
import dotenv from 'dotenv'

dotenv.config()

async function createFirstUser() {
  try {
    // Initialize Payload with proper configuration
    await payload.init({
      secret: process.env.PAYLOAD_SECRET!,
      mongoURL: process.env.DATABASE_URI!,
      local: true, // This is important for CLI usage
    })

    console.log('🚀 Payload initialized successfully')

    // Check if any users exist
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length > 0) {
      console.log('👥 Users already exist in the database')
      console.log(`Found ${existingUsers.totalDocs} user(s)`)
      process.exit(0)
    }

    // Create the first admin user
    const user = await payload.create({
      collection: 'users',
      data: {
        email: 'admin@impdigital.com', // Change this to your desired email
        password: 'admin123', // Change this to a secure password
      },
    })

    console.log('✅ First admin user created successfully!')
    console.log(`📧 Email: ${user.email}`)
    console.log(`🔑 Password: admin123 (please change this after first login)`)
    console.log(`🌐 Admin URL: http://localhost:3000/admin`)

  } catch (error) {
    console.error('❌ Error creating first user:', error)
    process.exit(1)
  } finally {
    process.exit(0)
  }
}

createFirstUser() 