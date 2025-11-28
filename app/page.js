'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import CategorySection from '@/components/CategorySection'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { getAllArticles, getArticlesByCategory, getFeaturedArticles } from '@/lib/api'

export default function HomePage() {
    const [selectedCategory, setSelectedCategory] = useState('All')

    const allArticles = getAllArticles()
    const featuredArticle = getFeaturedArticles()[0] || allArticles[0]

    const categories = ['All', 'Politics', 'Sports', 'Business', 'Entertainment', 'Tech', 'Trending']

    const getFilteredArticles = () => {
        if (selectedCategory === 'All') {
            return allArticles.slice(1) 
        }
        return getArticlesByCategory(selectedCategory)
    }

    const filteredArticles = getFilteredArticles()

    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950">
            
            <HeroSection article={featuredArticle} />

            
            <section className="py-8 bg-neutral-50 dark:bg-neutral-900/50 border-y border-neutral-200 dark:border-neutral-800">
                <Container>
                    <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 whitespace-nowrap">
                            Filter by:
                        </span>
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? 'primary' : 'secondary'}
                                size="sm"
                                onClick={() => setSelectedCategory(category)}
                                className="whitespace-nowrap"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </Container>
            </section>

      
            <CategorySection
                title={selectedCategory === 'All' ? 'Latest News' : selectedCategory}
                articles={filteredArticles}
            />

            
            {selectedCategory === 'All' && (
                <>
                    <div id="politics">
                        <CategorySection
                            title="Politics"
                            articles={getArticlesByCategory('Politics').slice(0, 4)}
                        />
                    </div>

                    <div id="sports" className="bg-neutral-50 dark:bg-neutral-900/30">
                        <CategorySection
                            title="Sports"
                            articles={getArticlesByCategory('Sports').slice(0, 4)}
                        />
                    </div>

                    <div id="business">
                        <CategorySection
                            title="Business"
                            articles={getArticlesByCategory('Business').slice(0, 4)}
                        />
                    </div>

                    <div id="entertainment" className="bg-neutral-50 dark:bg-neutral-900/30">
                        <CategorySection
                            title="Entertainment"
                            articles={getArticlesByCategory('Entertainment').slice(0, 4)}
                        />
                    </div>

                    <div id="tech">
                        <CategorySection
                            title="Technology"
                            articles={getArticlesByCategory('Tech').slice(0, 4)}
                        />
                    </div>

                    <div id="trending" className="bg-neutral-50 dark:bg-neutral-900/30">
                        <CategorySection
                            title="Trending"
                            articles={getArticlesByCategory('Trending').slice(0, 4)}
                        />
                    </div>
                </>
            )}
        </div>
    )
}
