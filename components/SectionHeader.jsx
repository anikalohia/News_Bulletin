import Link from 'next/link'

export default function SectionHeader({ title, viewAllLink, category }) {
    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                    {title}
                </h2>
                <div className="h-1 w-12 bg-primary-600 rounded-full"></div>
            </div>

            {viewAllLink && (
                <Link
                    href={viewAllLink}
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm md:text-base transition-colors flex items-center gap-1 group"
                >
                    View All
                    <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            )}
        </div>
    )
}
