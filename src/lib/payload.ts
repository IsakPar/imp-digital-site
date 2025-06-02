import configPromise from '../../payload.config'
import { getPayload } from 'payload'

export const payload = await getPayload({ config: configPromise })

// Utility functions for fetching data
export async function getPosts(limit = 10, status = 'published') {
  try {
    const posts = await payload.find({
      collection: 'posts',
      limit,
      where: {
        status: {
          equals: status,
        },
      },
      sort: '-publishedDate',
    })
    return posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return { docs: [], totalDocs: 0, limit, totalPages: 0, page: 1, pagingCounter: 1, hasPrevPage: false, hasNextPage: false }
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const posts = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: slug,
        },
        status: {
          equals: 'published',
        },
      },
      limit: 1,
    })
    return posts.docs[0] || null
  } catch (error) {
    console.error('Error fetching post by slug:', error)
    return null
  }
}

export async function getProjects(limit = 10, status = 'published') {
  try {
    const projects = await payload.find({
      collection: 'projects',
      limit,
      where: {
        status: {
          equals: status,
        },
      },
      sort: '-createdAt',
    })
    return projects
  } catch (error) {
    console.error('Error fetching projects:', error)
    return { docs: [], totalDocs: 0, limit, totalPages: 0, page: 1, pagingCounter: 1, hasPrevPage: false, hasNextPage: false }
  }
}

export async function getProjectBySlug(slug: string) {
  try {
    const projects = await payload.find({
      collection: 'projects',
      where: {
        slug: {
          equals: slug,
        },
        status: {
          equals: 'published',
        },
      },
      limit: 1,
    })
    return projects.docs[0] || null
  } catch (error) {
    console.error('Error fetching project by slug:', error)
    return null
  }
} 