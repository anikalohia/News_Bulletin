import Link from 'next/link'
import Container from './Container'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        'Categories': [
            { name: 'Politics', href: '/#politics' },
            { name: 'Sports', href: '/#sports' },
            { name: 'Business', href: '/#business' },
            { name: 'Entertainment', href: '/#entertainment' },
            { name: 'Technology', href: '/#tech' },
            { name: 'Trending', href: '/#trending' },
        ],
        'Company': [
            { name: 'About Us', href: '#' },
            { name: 'Contact', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Advertise', href: '#' },
        ],
        'Legal': [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Cookie Policy', href: '#' },
            { name: 'Disclaimer', href: '#' },
        ],
    }

    return (
        <footer className="bg-neutral-100 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 mt-auto">
            <Container>
                {/* Main footer content */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center shadow-md">
                                <span className="text-white font-bold text-xl">N</span>
                            </div>
                            <span className="text-xl font-bold text-neutral-900 dark:text-white">
                                NewsPortal
                            </span>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                            Your trusted source for the latest news from India and around the world. Stay informed, stay ahead.
                        </p>

                        {/* Social links */}
                        <div className="flex gap-3">
                            {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-primary-600 dark:hover:bg-primary-600 flex items-center justify-center transition-colors group"
                                    aria-label={social}
                                >
                                    <svg className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links sections */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="font-bold text-neutral-900 dark:text-white mb-4">
                                {title}
                            </h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="py-6 border-t border-neutral-200 dark:border-neutral-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                            © {currentYear} NewsPortal. All rights reserved.
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                            Made with ❤️ in India
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
