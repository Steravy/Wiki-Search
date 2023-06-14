import './globals.css';
import Navbar from './components/Navbar';


export const metadata = {
  title: 'Just a Project',
  description: 'Praticing Next.js',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800" >
        <Navbar />
        
        {children}
      </body>
    </html>
  )
}
