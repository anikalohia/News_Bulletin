import newsData from '@/data/news.json'

// Get all articles
export function getAllArticles() {
    return newsData.articles.sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Get articles by category
export function getArticlesByCategory(category) {
    return newsData.articles
        .filter(article => article.category === category)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Get single article by slug
export function getArticleBySlug(slug) {
    return newsData.articles.find(article => article.slug === slug)
}

// Get featured articles
export function getFeaturedArticles() {
    return newsData.articles.filter(article => article.featured)
}

// Get latest articles (limit)
export function getLatestArticles(limit = 6) {
    return getAllArticles().slice(0, limit)
}

// Get all categories
export function getAllCategories() {
    const categories = [...new Set(newsData.articles.map(article => article.category))]
    return categories.sort()
}

// Get related articles (same category, excluding current)
export function getRelatedArticles(slug, limit = 3) {
    const currentArticle = getArticleBySlug(slug)
    if (!currentArticle) return []

    return newsData.articles
        .filter(article =>
            article.category === currentArticle.category &&
            article.slug !== slug
        )
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit)
}

// Format date
export function formatDate(dateString) {
    const date = new Date(dateString)
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }
    return date.toLocaleDateString('en-IN', options)
}

// Get article count by category
export function getArticleCountByCategory() {
    const counts = {}
    newsData.articles.forEach(article => {
        counts[article.category] = (counts[article.category] || 0) + 1
    })
    return counts
}
