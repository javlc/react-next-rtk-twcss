import { Metadata } from 'next'
import '../styles/globals.css'
import ReduxProvider from './redux-provider'
export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to my home page',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}