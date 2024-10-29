'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import lilianeMallahPic from '@/assets/liliane.jpeg' // Replace with actual image path
import PageTitle from '../components/PageTitle'

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  // Refs for animation targets
  const imgRef = useRef(null)
  const textRef = useRef(null)
  const bioRef = useRef(null)

  // GSAP animation hooks
  useEffect(() => {
    // Image entrance animation
    gsap.from(imgRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power3.out',
    })

    // Text block entrance animation
    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.3,
      ease: 'power3.out',
    })

    // Scroll-triggered animation for bio section
    gsap.from(bioRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      scrollTrigger: {
        trigger: bioRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  }, [])

  return (
    <>
      <PageTitle title="About" />
      <div className="relative rounded-lg bg-white/30 p-8 shadow-lg backdrop-blur-md  mt-10 md:flex md:items-start md:justify-center">
        <div ref={imgRef} className="mb-5 md:w-56">
          <Image
            src={lilianeMallahPic}
            width={500}
            height={600}
            alt="Photo of Liliane El Mallah"
            className="block w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: Content */}
        <div ref={textRef} className=" md:flex-1 md:pl-6">
          <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">I’m Liliane El Mallah</h2>
          <div className="mb-6">
            <p className="mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              I am an Interior Designer and Executive Director at Areekha Design, based in Doha, Qatar. I specialize in modern luxury and
              organic designs, creating harmonious, vibrant spaces. My work focuses on blending aesthetics with functionality to enhance
              lifestyles through creative design.
            </p>
          </div>

          <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">Tech & Design I Love</h2>
          <div className="mb-6">
            <p className="mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              I am passionate about Biophilic Design, sustainable architecture, and using natural elements to enrich living environments.
            </p>
          </div>

          {/* New Section: Expanded Bio */}
          <div ref={bioRef} className="mb-8">
            <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">About Us</h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Liliane El Mallah is the visionary founder and CEO of Areekha Design, a leading interior design firm based in Doha, Qatar.
              With an impeccable eye for detail and a passion for blending luxury with organic aesthetics, Liliane has redefined modern
              interiors in both residential and commercial spaces. Her approach is rooted in a deep understanding of her clients’ needs,
              where she focuses on creating environments that enhance both beauty and functionality.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Liliane’s journey in interior design is fueled by her lifelong passion for creating harmonious living spaces. She specializes
              in modern luxury and biophilic design—a style that brings natural elements into interior spaces to promote a sense of
              well-being. Whether it’s transforming a penthouse into a sophisticated haven or creating a serene home office, Liliane’s work
              is characterized by a seamless blend of elegance and comfort.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              As the driving force behind Areekha Design, Liliane has established the firm as a leader in the Qatar market, known for its
              innovative approach and bespoke services. Under her leadership, the team at Areekha Design works closely with clients to bring
              their visions to life, whether through complete renovations or subtle enhancements. Each project is a testament to her
              meticulous attention to detail and her ability to integrate functionality with aesthetic appeal.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              At the core of Liliane’s design philosophy is a commitment to sustainability and creating eco-friendly environments. She
              believes that great design should not only look beautiful but should also improve the quality of life for its inhabitants. Her
              designs incorporate natural materials, soft tones, and organic elements, all while maintaining a sense of luxury and
              sophistication.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Liliane El Mallah has earned a reputation as a trusted interior designer among her clients, who appreciate her collaborative
              approach. She works intimately with clients to understand their lifestyle, preferences, and goals, ensuring that every space
              she creates is a reflection of their unique personality and needs. Her work has transformed high-end residences, executive
              offices, and commercial spaces into environments that inspire and elevate daily living.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex space-x-4">
            <Link
              href="/contact"
              rel="nofollow"
              className="inline-block bg-gray-200 px-5 py-3 text-black transition-colors duration-300 ease-in-out hover:bg-black hover:text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
