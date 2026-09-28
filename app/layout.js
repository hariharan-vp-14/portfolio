import './globals.css'

export const metadata = {
  title: 'Hariharan V P | Full Stack Developer',
  description: 'Senior Frontend Engineer and Full Stack Developer portfolio showcasing modern web applications, research, and production-ready projects.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Hariharan V P | Full Stack Developer',
    description: 'A premium portfolio for a modern full stack developer.',
    type: 'website'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-[#050816] text-white">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
