import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Container from '@/components/Container'
import Badge from '@/components/Badge'
import NewsCard from '@/components/NewsCard'
import { getAllArticles, getArticleBySlug, getRelatedArticles, formatDate } from '@/lib/api'

// Generate static params for all articles
export async function generateStaticParams() {
    const articles = getAllArticles()
    return articles.map((article) => ({
        slug: article.slug,
    }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const article = getArticleBySlug(params.slug)

    if (!article) {
        return {
            title: 'Article Not Found',
        }
    }

    return {
        title: article.title,
        description: article.summary,
        keywords: [article.category, 'news', 'India', article.author],
        authors: [{ name: article.author }],
        openGraph: {
            title: article.title,
            description: article.summary,
            type: 'article',
            publishedTime: article.date,
            authors: [article.author],
            images: [
                {
                    url: article.image,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.summary,
            images: [article.image],
        },
    }
}

export default function ArticlePage({ params }) {
    const article = getArticleBySlug(params.slug)

    if (!article) {
        notFound()
    }

    const relatedArticles = getRelatedArticles(params.slug, 3)

    // JSON-LD structured data for SEO
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: article.title,
        description: article.summary,
        image: article.image,
        datePublished: article.date,
        author: {
            '@type': 'Person',
            name: article.author,
        },
        publisher: {
            '@type': 'Organization',
            name: 'NewsPortal',
            logo: {
                '@type': 'ImageObject',
                url: 'https://newsportal.example.com/logo.png',
            },
        },
        articleSection: article.category,
    }

    return (
        <>
            {/* JSON-LD Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <article className="min-h-screen bg-white dark:bg-neutral-950">
                {/* Article Header */}
                <div className="bg-neutral-50 dark:bg-neutral-900 py-8 border-b border-neutral-200 dark:border-neutral-800">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            {/* Breadcrumb */}
                            <nav className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                                <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                    Home
                                </Link>
                                <span>/</span>
                                <span className="text-neutral-900 dark:text-neutral-100">{article.category}</span>
                            </nav>

                            <Badge category={article.category} />

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mt-4 mb-6 leading-tight">
                                {article.title}
                            </h1>

                            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">
                                {article.summary}
                            </p>

                            {/* Article Meta */}
                            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span className="font-medium">{article.author}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                                </div>

                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{article.readingTime} min read</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* Article Image */}
                <Container className="py-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-soft-lg mb-8">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 896px"
                                className="object-cover"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3gAA//9k="
                            />
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            {article.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Share buttons */}
                        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">
                                Share this article
                            </h3>
                            <div className="flex gap-3">
                                {['Twitter', 'Facebook', 'LinkedIn', 'WhatsApp'].map((platform) => (
                                    <button
                                        key={platform}
                                        className="px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white transition-colors text-sm font-medium"
                                    >
                                        {platform}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <section className="py-12 bg-neutral-50 dark:bg-neutral-900/30 border-t border-neutral-200 dark:border-neutral-800">
                        <Container>
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-8">
                                Related Articles
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedArticles.map((relatedArticle, index) => (
                                    <NewsCard key={relatedArticle.id} article={relatedArticle} index={index} />
                                ))}
                            </div>
                        </Container>
                    </section>
                )}
            </article>
        </>
    )
}
