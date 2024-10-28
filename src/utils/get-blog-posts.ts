import type { BlogComment } from '@/types'
import userData from '../data/blogData.json'

export function getBlogPosts(): BlogComment[] {
  return userData
}
