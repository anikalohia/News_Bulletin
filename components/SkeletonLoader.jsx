export default function SkeletonLoader() {
    return (
        <div className="animate-pulse">
            <div className="bg-neutral-200 dark:bg-neutral-800 rounded-lg overflow-hidden">
                {/* Image skeleton */}
                <div className="h-48 bg-neutral-300 dark:bg-neutral-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-shimmer-gradient animate-shimmer"></div>
                </div>

                {/* Content skeleton */}
                <div className="p-4 space-y-3">
                    {/* Badge skeleton */}
                    <div className="h-5 w-20 bg-neutral-300 dark:bg-neutral-700 rounded-full"></div>

                    {/* Title skeleton */}
                    <div className="space-y-2">
                        <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded w-full"></div>
                        <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded w-5/6"></div>
                    </div>

                    {/* Summary skeleton */}
                    <div className="space-y-2">
                        <div className="h-3 bg-neutral-300 dark:bg-neutral-700 rounded w-full"></div>
                        <div className="h-3 bg-neutral-300 dark:bg-neutral-700 rounded w-4/5"></div>
                    </div>

                    {/* Meta skeleton */}
                    <div className="flex items-center gap-4 pt-2">
                        <div className="h-3 w-24 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                        <div className="h-3 w-16 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
