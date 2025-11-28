import Container from './Container'
import SectionHeader from './SectionHeader'
import NewsCard from './NewsCard'

export default function CategorySection({ title, articles, viewAllLink }) {
    if (!articles || articles.length === 0) {
        return null
    }

    return (
        <section className="py-12">
            <Container>
                <SectionHeader title={title} viewAllLink={viewAllLink} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {articles.map((article, index) => (
                        <NewsCard key={article.id} article={article} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    )
}
