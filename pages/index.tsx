import Image from 'next/image'
import { Sidebar } from '@/components/sidebar'
import { Dashboard } from '@/components/dashboard'

import { Montserrat } from 'next/font/google'
const monteserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex h-screen p-10 ${monteserrat.className}`}>
      <Sidebar />
      <Dashboard />
    </div>
  )
}
