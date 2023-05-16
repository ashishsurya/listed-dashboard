import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
const monteserrat = Montserrat({ subsets: ['latin'] });

export default function LoginPage() {
  return (
    <div className={`flex h-screen ${monteserrat.className}`}>
      <Head>
        <title>Login &middot; Board.</title>
      </Head>
      <div className='flex-[1] bg-black text-white grid place-items-center'>
        <h2 className='text-4xl font-bold'>Board.</h2>
      </div>
      <div className='flex-[2] grid place-items-center'>
        <LoginForm />
      </div>
    </div>
  );
}

export const LoginForm = () => {
  return (
    <div className='flex flex-col items-start'>
      <h3 className='font-bold text-4xl'>Sign In</h3>
      <p className=''>Sign in to your account</p>
      <div className='flex gap-4  mt-4'>
        <SocialLoginButton provider='Google' svgPath='/google-icon-1.svg' />
        <SocialLoginButton provider='Apple' svgPath='/apple-1.svg' />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast('According to guidlines only google sign in is implemented', {
            icon: '💎',
            className: 'font-mono',
          });
        }}
        className='px-8 py-4 bg-white mt-2 rounded-[20px] flex items-stretch flex-col w-full'
      >
        <div className='flex flex-col items-stretch gap-2'>
          <label htmlFor=''>Email Address</label>
          <input
            type='email'
            className='bg-[#F5F5F5] focus:outline-none px-4 py-2 rounded-[10px]'
            placeholder='johndoe@gmail.com'
          />
        </div>
        <div className='flex flex-col items-stretch gap-2'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            placeholder='*********'
            className='bg-[#F5F5F5] focus:outline-none px-4 py-2 rounded-[10px]'
          />
        </div>
        <p className='text-blue-500 mt-2 text-sm'>Forgot Password?</p>
        <button className='bg-black text-white mt-2 py-2 rounded-[10px]'>
          Sign In
        </button>
      </form>
      <p className='text-sm mt-2 self-center'>
        Don&apos;t have an account?{' '}
        <span className='text-blue-500'>Register Here</span>
      </p>
    </div>
  );
};

export const SocialLoginButton = ({
  provider,
  svgPath,
}: {
  provider: 'Google' | 'Apple';
  svgPath: string;
}) => {
  return (
    <button
      onClick={() => {
        if (provider === 'Google') {
          signIn('google', { redirect: true, callbackUrl: '/' });
        } else {
          toast('According to guidlines only google sign in is implemented', {
            icon: '💎',
            className: 'font-mono',
          });
        }
      }}
      className='flex bg-white px-4 py-2 items-center font-light gap-2 rounded-[10px]'
    >
      <Image src={svgPath} alt={provider} width={24} height={24} />
      <p>Sign in with {provider}</p>
    </button>
  );
};
