import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IMP Digital - Premium Web Development & IT Infrastructure",
  description: "Full-stack development, cybersecurity audits, and AI automation. Scandinavian precision meets enterprise power. Transform your digital presence.",
  keywords: ["web development", "cybersecurity", "AI automation", "infrastructure", "full-stack"],
  authors: [{ name: "IMP Digital Services" }],
  creator: "IMP Digital Services",
  publisher: "IMP Digital Services",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://impdigital.com/",
    title: "IMP Digital - Premium Web Development & IT Infrastructure",
    description: "Full-stack development, cybersecurity audits, and AI automation.",
    siteName: "IMP Digital Services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IMP Digital Services - Premium Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMP Digital",
    description: "Full-stack development, cybersecurity audits, and AI automation.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://impdigital.com/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" }
    ],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#D9E5C1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Load Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Resource hints for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Favicon links */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "IMP Digital Services",
              "url": "https://impdigital.com",
              "logo": "https://impdigital.com/IMP-Digital-logo.svg",
              "sameAs": [
                "https://twitter.com/impdigital",
                "https://linkedin.com/company/impdigital",
                "https://github.com/impdigital"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "sales",
                "availableLanguage": ["English"]
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-ivory text-charcoal">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-matcha text-charcoal px-4 py-2 rounded-lg z-[10000] transition-all duration-fast"
        >
          Skip to content
        </a>
        
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
