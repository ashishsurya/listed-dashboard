import {
  Bell,
  LucideIcon,
  Banknote,
  Tags,
  ThumbsUp,
  Users,
} from 'lucide-react';
import Image from 'next/image';

export const Dashboard = () => {
  return (
    <div className='flex-[8] p-8 flex flex-col space-y-2'>
      <DashboardHeader />
      <DataCards />
    </div>
  );
};

export const DashboardHeader = () => {
  return (
    <div className='flex items-center justify-between'>
      <h2 className='text-4xl font-bold'>Dashboard</h2>
      <div className='flex items-center space-x-4'>
        <input
          className='bg-white focus:outline-none px-4 py-2 rounded-xl'
          type='text'
          placeholder='Search'
        />
        <Bell />
        <Image
          src={
            'https://pbs.twimg.com/profile_images/1506852720648486914/8GDg7Fxh_400x400.jpg'
          }
          alt='profile-image'
          width={52}
          height={52}
          className='rounded-full'
        />
      </div>
    </div>
  );
};

export const DataCards = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
      <DataCard
        bg='#DDEFE0'
        title='Total Revenues'
        value='$2,129,430'
        Icon={Banknote}
      />
      <DataCard
        bg='#F4ECDD'
        title='Total Transactions'
        value='1,520'
        Icon={Tags}
      />
      <DataCard
        bg='#EFDADA'
        title='Total likes'
        value='9.721'
        Icon={ThumbsUp}
      />
      <DataCard bg='#DEE0EF' title='Total Users' value='892' Icon={Users} />
    </div>
  );
};

export const DataCard = ({
  title,
  value,
  bg,
  Icon,
}: {
  title: string;
  value: string;
  bg: string;
  Icon: LucideIcon;
}) => {
  return (
    <div
      className={`flex flex-col p-4 rounded-[20px]`}
      style={{ backgroundColor: bg }}
    >
      <Icon className='self-end' />
      <p className='text-sm'>{title}</p>
      <p className='text-2xl font-bold'>{value}</p>
    </div>
  );
};
