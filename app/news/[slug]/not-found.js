import Link from 'next/link'
import Container from '@/components/Container'
import Button from '@/components/Button'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 flex items-center justify-center">
            <Container>
                <div className="text-center max-w-2xl mx-auto py-20">
                    <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                        404
                    </h1>
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                        Article Not Found
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                        Sorry, we couldn't find the article you're looking for. It may have been removed or the URL might be incorrect.
                    </p>
                    <Link href="/">
                        <Button size="lg">
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    )
}
