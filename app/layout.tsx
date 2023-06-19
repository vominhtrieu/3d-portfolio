import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trieu Vo - Software Engineer',
  description: `As a software engineer, I am passionate about using my skills and knowledge to solve challenging problems. With a strong focus on web development, I am experienced in building robust and scalable web applications. Whether it's creating new features, fixing bugs, or optimizing performance, I take pride in delivering high- quality software that meets the needs of users.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
