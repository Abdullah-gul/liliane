'use client'
import { memo, useEffect, useRef } from 'react'
import langColors from '@/constans/langColors'
import LangBar from './LangBar'
import LangTextAnimation from './LangTextAnimation'
import { FiStar } from 'react-icons/fi'
import { IProject } from '@/types'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const RepositoryCard: React.FC<{ repo: IProject; key: number }> = ({ repo, key }) => {
  const data = [repo]
  const cardRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)

    const element = cardRef.current
    if (element) {
      // Create the animation
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 }, // Starting state
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%', // Start animation when the top of the element is 80% from the top of the viewport
            end: 'top 30%', // End animation when the top of the element is 30% from the top of the viewport
            toggleActions: 'play none none reverse', // Play on enter, reverse on leave
            markers: false, // Optional: Show markers for debugging
          },
        },
      )
    }

    // Clean up the scroll trigger instance on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div>
      <div ref={cardRef} className="relative rounded-lg bg-white/30 p-8 shadow-lg backdrop-blur-md">
        {data.map((e) => (
          <Image key={e.project_image} src={e.project_image} alt="" />
        ))}
      </div>
    </div>
  )
}

export default memo(RepositoryCard)
