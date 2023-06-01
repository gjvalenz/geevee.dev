import './globals.css'
import { Inter } from 'next/font/google'
import Link from '@/components/Link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gerardo\'s Portfolio',
  description: 'A portfolio site showcasing my work and socials',
}

const Header = () => (
  <div className='flex flex-row pt-8'>
    <div className='flex justify-center basis-1/4'>
      <Link url='/' sizing='text-2xl'>home</Link>
    </div>
    <div className='flex justify-center basis-1/4'>
      <Link url='/projects' sizing='text-2xl'>projects</Link>
    </div>
    <div className='flex justify-center basis-1/4'>
      <Link url='https://www.github.com/gjvalenz' sizing='text-2xl'>github</Link>
    </div>
    <div className='flex justify-center basis-1/4'>
      <Link url='https://www.linkedin.com/in/gerardo-de-jesus-valenzuela-aispuro-336496116/' sizing='text-2xl'>linkedin</Link>
    </div>
  </div>
);

const Footer = () => (
  <div className='flex flex-col pb-10 justify-center'>
    <h3 className='text-center'>Hi, my name is <Link url='https://www.linkedin.com/in/gerardo-de-jesus-valenzuela-aispuro-336496116/'>Gerardo</Link>. I received my BS in CS from USC in May &apos;23. I dabble in full-stack dev, robotics, ai, etc.</h3>
  </div>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <link rel='icon' href='/static/favicon.ico' sizes='any'/>
      <body className='flex flex-col bg-slate-50 min-h-screen justify-between text-black'>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
