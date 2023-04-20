import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/sidebar'
import { Dashboard } from '@/components/dashboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex min-h-screen p-10'>
      <Sidebar />
      <Dashboard />
    </div>
  )
}
