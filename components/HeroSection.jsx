'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from './Container'
import Button from './Button'
import Badge from './Badge'
import { formatDate } from '@/lib/api'

export default function HeroSection({ article }) {
    if (!article) return null

    return (
        <section className="relative bg-neutral-900 dark:bg-black overflow-hidden">
            <Container className="py-12 md:py-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-2 lg:order-1 text-white"
                    >
                        <Badge category={article.category} />

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 leading-tight">
                            {article.title}
                        </h1>

                        <p className="text-lg text-neutral-300 mb-6 line-clamp-3">
                            {article.summary}
                        </p>

                        <div className="flex items-center gap-6 mb-6 text-sm text-neutral-400">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span>{article.author}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{article.readingTime} min read</span>
                            </div>
                        </div>

                        <Link href={`/news/${article.slug}`}>
                            <Button size="lg" className="group">
                                Read Full Story
                                <svg
                                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="order-1 lg:order-2 relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3gAA//9k="
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
                    </motion.div>
                </motion.div>
            </Container>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl"></div>
        </section>
    )
}
