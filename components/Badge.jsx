export default function Badge({ children, category }) {
    const categoryColors = {
        Politics: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
        Sports: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
        Business: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
        Entertainment: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
        Tech: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
        Trending: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
    }

    const colorClass = categoryColors[category] || 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300'

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${colorClass}`}>
            {children || category}
        </span>
    )
}
