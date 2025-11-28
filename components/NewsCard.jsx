'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Badge from './Badge'
import { formatDate } from '@/lib/api'

export default function NewsCard({ article, index = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group"
        >
            <Link href={`/news/${article.slug}`}>
                <article className="bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 h-full flex flex-col border border-neutral-200 dark:border-neutral-800">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3gAA//9k="
                        />
                        <div className="absolute top-3 left-3">
                            <Badge category={article.category} />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-grow flex flex-col">
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {article.title}
                        </h3>

                        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-3 flex-grow">
                            {article.summary}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-500 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span>{article.author}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{article.readingTime} min read</span>
                            </div>
                        </div>
                    </div>
                </article>
            </Link>
        </motion.div>
    )
}
