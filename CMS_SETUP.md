# Payload CMS Setup Guide

## 🎉 Current Status

✅ **Payload CMS Dependencies Installed**
✅ **Configuration File Created** (`payload.config.ts`)
✅ **API Routes Set Up** (`/api/[[...slug]]`)
✅ **Admin Panel Route Created** (`/admin`)
✅ **Environment Variables Generated**
✅ **Utility Functions Created**

## 📋 What's Been Set Up

### Collections Created:
1. **Users** - Admin authentication
2. **Posts** - Blog posts and case studies
3. **Projects** - Portfolio items
4. **Media** - File uploads and images

### Features Included:
- Rich text editor with Slate
- Image upload with automatic resizing
- MongoDB database integration
- TypeScript support
- GraphQL schema generation

## 🚀 Next Steps

### 1. Install MongoDB (if not already installed)

**Option A: Local MongoDB**
```bash
# macOS with Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community

# Or use Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

**Option B: MongoDB Atlas (Cloud)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Get your connection string
4. Update `DATABASE_URI` in `.env.local`

### 2. Start the Development Server
```bash
pnpm dev
```

### 3. Access the Admin Panel
1. Open http://localhost:3001/admin
2. Create your first admin user
3. Start adding content!

### 4. API Endpoints
- **Posts**: `GET /api/posts`
- **Projects**: `GET /api/projects`
- **Media**: `GET /api/media`
- **Admin**: `POST /api/users/login`

## 📁 File Structure

```
imp-digital-site/
├── payload.config.ts              # Main CMS configuration
├── src/
│   ├── app/
│   │   ├── (payload)/
│   │   │   └── admin/[[...segments]]/page.tsx  # Admin panel
│   │   └── api/[[...slug]]/route.ts             # API routes
│   └── lib/
│       └── payload.ts             # Utility functions
├── .env.local                     # Environment variables
└── media/                         # Uploaded files (auto-created)
```

## 🔧 Configuration Details

### Collections Overview:

**Posts Collection:**
- Title, Author, Content (Rich Text)
- Categories: Case Study, Blog Post, News
- Tags, Featured Image, Excerpt
- Publish status and date

**Projects Collection:**
- Title, Client, Description
- Categories: Web Dev, Mobile App, Branding, UI/UX
- Image gallery, Technologies used
- Project URL, Status

**Media Collection:**
- Automatic image resizing (thumbnail, card, tablet)
- Alt text support
- Organized file storage

## 🛠 Customization

### Adding New Collections:
Edit `payload.config.ts` and add to the `collections` array:

```typescript
{
  slug: 'your-collection',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    // Add more fields...
  ],
}
```

### Modifying Existing Collections:
Update the fields array in the respective collection configuration.

## 🔍 Using the CMS Data

### In React Components:
```typescript
import { getPosts, getProjects } from '@/lib/payload'

// In a server component
const posts = await getPosts(5, 'published')
const projects = await getProjects(10, 'published')
```

### API Routes:
```typescript
// GET /api/posts
const response = await fetch('/api/posts')
const data = await response.json()
```

## 🚨 Troubleshooting

### Common Issues:

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check DATABASE_URI in .env.local

2. **Admin Panel Not Loading**
   - Verify all dependencies are installed
   - Check console for errors

3. **TypeScript Errors**
   - Run `pnpm dev` to generate types
   - Check payload-types.ts is created

### Getting Help:
- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Next.js Integration Guide](https://payloadcms.com/docs/getting-started/nextjs)

## 🎯 Ready to Use!

Your CMS is now ready! You can:
1. Create content in the admin panel
2. Fetch data in your React components
3. Build dynamic pages with CMS content
4. Upload and manage media files

Happy content managing! 🚀 