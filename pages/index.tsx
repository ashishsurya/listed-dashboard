import Image from 'next/image';
import { Sidebar } from '@/components/sidebar';
import { Dashboard } from '@/components/dashboard';

import { Montserrat } from 'next/font/google';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
const monteserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  const { status, data: session } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return null;
  }

  if (status === 'authenticated') {
    return (
      <div className={`flex h-screen p-10 ${monteserrat.className}`}>
        <Sidebar />
        <Dashboard />
      </div>
    );
  }

  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }
}
