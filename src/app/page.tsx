import Link from '@/components/Link'

export default function Home() {
  return (
    <main className="flex flex-col items-center py-20">
      <img className='rounded-full object-cover h-48 w-48'
        src='https://res.cloudinary.com/practicaldev/image/fetch/s--4nVcu5jx--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://cdn.dribbble.com/users/722835/screenshots/4082720/bot_icon.gif'></img>
      <div className='flex flex-col max-w-3xl items-center justify-between font-mono text-lg lg:flex text-black mt-16'>
        <p className='text-center'>Hey there, my name is Gerardo Valenzuela, and I recently received my BS from USC in Computer Science!
        I am experienced with C++, C, Assembly, Java, Python, React, Node.js/Javascript, etc. I am currently also looking for work.
        If you have any questions or you&apos;d just like to chat, please don&apos;t hesitate to contact me via <Link url='https://www.linkedin.com/in/gerardo-de-jesus-valenzuela-aispuro-336496116/'>linkedin</Link>
        .</p>
      </div>
    </main>
  )
}
