import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export const metadata = {
    metadataBase: new URL('https://newsbulletin.example.com'),
    title: {
        default: 'NewsBulletin - Latest Indian News & Updates',
        template: '%s | NewsBulletin'
    },
    description: 'Stay updated with the latest news from India and around the world. Get breaking news, politics, sports, business, entertainment, and technology updates.',
    keywords: ['news', 'India news', 'breaking news', 'politics', 'sports', 'business', 'entertainment', 'technology'],
    authors: [{ name: 'NewsBulletin Team' }],
    creator: 'NewsBulletin',
    publisher: 'NewsBulletin',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://newsbulletin.example.com',
        siteName: 'NewsBulletin',
        title: 'NewsBulletin - Latest Indian News & Updates',
        description: 'Stay updated with the latest news from India and around the world.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'NewsBulletin',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NewsBulletin - Latest Indian News & Updates',
        description: 'Stay updated with the latest news from India and around the world.',
        creator: '@newsbulletin',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'google-site-verification-code',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans antialiased`}>
                <ThemeProvider>
                    <div className="flex flex-col min-h-screen">
                        <Navbar />
                        <main className="flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
