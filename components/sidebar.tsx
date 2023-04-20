import {
  LucideIcon,
  PieChart,
  Tag,
  CalendarDays,
  User,
  Settings,
} from 'lucide-react';
import Link from 'next/link';

export const Sidebar = () => {
  return (
    <div className='flex-[2] rounded-[30px] py-[60px]    flex flex-col items-center bg-black text-white'>
      <h2 className='text-4xl font-bold'>Board.</h2>
      <SidebarLinks />
      <SidebarFooter />
    </div>
  );
};

export const SidebarFooter = () => {
  return (
    <div>
      <p>Help</p>
      <p>Contact Us</p>
    </div>
  );
};

export const SidebarLinks = () => {
  return (
    <div className='flex flex-col space-y-3 mt-5 flex-1'>
      <SidebarLink icon={<PieChart size={20} />} text='Dashboard' active />
      <SidebarLink icon={<Tag size={20} />} text='Transactions' />
      <SidebarLink icon={<CalendarDays size={20} />} text='Schedules' />
      <SidebarLink icon={<User size={20} />} text='Users' />
      <SidebarLink icon={<Settings size={20} />} text='Settings' />
    </div>
  );
};

export const SidebarLink = ({
  icon,
  text,
  active = false,
}: {
  icon: JSX.Element;
  text: string;
  active?: boolean;
}) => {
  return (
    <Link
      href={''}
      className={`flex items-center space-x-2   ${
        active ? 'text-white' : 'text-slate-400'
      }`}
    >
      {icon}
      <p>{text}</p>
    </Link>
  );
};
