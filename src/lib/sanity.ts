// Sanity client is disabled - dependencies not installed
// import { createClient } from '@sanity/client'

export interface SanityPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  publishedAt: string
  body?: any
  mainImage?: {
    asset: {
      url: string
    }
    alt: string
  }
  author?: {
    name: string
    image?: {
      asset: {
        url: string
      }
    }
  }
}

export const fetchPosts = async (): Promise<SanityPost[]> => {
  // Disabled - Sanity client not configured
  return []
}

export const fetchPostBySlug = async (slug: string): Promise<SanityPost | null> => {
  // Disabled - Sanity client not configured
  return null
}
