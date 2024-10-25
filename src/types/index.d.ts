import type { Timestamp } from 'firebase/firestore'

export interface IProject {
 
  project_image : StaticImageData
}

export interface IMetadata {
  title: string
  publishedAt: string
  summary: string
}

export interface IPost {
  metadata: IMetadata
  slug: string
  content: string
}

export interface IGuestbookMessage {
  _id: string
  name: string
  message: string
  createdAt?: Timestamp
}

interface BlogComment {
  id: string;
  name: string;
  title: string;
  content: string;
  timestamp: string;  // ISO 8601 format
}

export interface IMetadata {
  title: string
  publishedAt: string
  summary: string
}