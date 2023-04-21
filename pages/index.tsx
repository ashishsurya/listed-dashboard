import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { Sidebar } from '@/components/sidebar'
import { Dashboard } from '@/components/dashboard'

const monteserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex min-h-screen p-10 ${monteserrat.className}`}>
      <Sidebar />
      <Dashboard />
    </div>
  )
}
