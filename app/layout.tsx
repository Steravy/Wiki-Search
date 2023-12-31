import './globals.css';
import Navbar from './components/Navbar';


export const metadata = {

  title: 'Wiki Search',
  description: 'Search for Wikipedia articles.',

}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800 " >
        <Navbar />

        <section className="px-6" >
          {children}
        </section>
      </body>
    </html>
  )
}
