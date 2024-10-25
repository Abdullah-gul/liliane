'use client'

import type { IPost } from '@/types'
import type { BlogComment } from '@/types'
import React from 'react'
import { useState } from 'react'
import formatDate from '@/utils/format-date'
import Modal from './Modal'
const BlogPostItem: React.FC<{ post: BlogComment }> = ({ post }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenModal = (): void => {
    setModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setModalOpen(false);
  };
  
  return (
   <div   style={{cursor:"pointer"}}>
   
      <h3 className="text-lg md:text-xl">{post.title}</h3>
      <h4 className="text-sm opacity-60 dark:text-neutral-400 line-clamp-2"  onClick={handleOpenModal}>
        {post.content}
</h4>
      <p className="text-sm opacity-60 dark:text-neutral-400">{formatDate(post.timestamp)}</p>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content={
          <>
            <h3 className="text-lg md:text-xl">{post.title}</h3>
            <p className="text-sm opacity-60 dark:text-neutral-400">
              {post.content}
            </p>
          </>
        }
      />
      </div>
  )
}

export default BlogPostItem
