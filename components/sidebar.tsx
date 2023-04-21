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
      <SidebarLink Icon={PieChart} text='Dashboard' active />
      <SidebarLink Icon={Tag} text='Transactions' />
      <SidebarLink Icon={CalendarDays} text='Schedules' />
      <SidebarLink Icon={User} text='Users' />
      <SidebarLink Icon={Settings} text='Settings' />
    </div>
  );
};

export const SidebarLink = ({
  Icon,
  text,
  active = false,
}: {
  Icon: LucideIcon;
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
      <Icon size={20}/>
      <p>{text}</p>
    </Link>
  );
};
