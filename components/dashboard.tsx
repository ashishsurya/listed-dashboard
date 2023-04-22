import {
  Banknote,
  Bell,
  LucideIcon,
  Tags,
  ThumbsUp,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import { Line, Pie } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const Dashboard = () => {
  return (
    <div className='flex-[8] p-8 gap-8 flex flex-col space-y-2 overflow-y-scroll'>
      <DashboardHeader />
      <DataCards />
      <ActivitiesChart />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <TopProducts />
        <TodaysSchedule />
      </div>
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

export const ActivitiesChart = () => {
  const data = {
    labels: ['', 'Week 1', 'Week 2', 'Week 3', 'Week 4', ''],
    datasets: [
      {
        label: 'User',
        data: [100, 405, 250, 450, 190, 250],
        fill: false,
        borderColor: '#9BDD7C',
        tension: 0.4,
      },
      {
        label: 'Guest',
        data: [100, 390, 200, 300, 220, 440],
        fill: false,
        borderColor: '#E9A0A0',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className='flex flex-col bg-white rounded-[20px]'>
      <h3 className='text-xl font-bold px-8 mt-2'>Activities</h3>
      <div className='flex items-center space-x-3 px-8 mt-2'>
        <p className='text-slate-500 flex-1'>May-June 2021</p>
        <div className='flex items-center space-x-2 '>
          <div className='w-2 h-2 rounded-full bg-[#E9A0A0]'></div>
          <div>Guest</div>
        </div>
        <div className='flex items-center space-x-2'>
          <div className='w-2 h-2 rounded-full bg-[#9BDD7C]'></div>
          <div>User</div>
        </div>
      </div>
      <Line
        height={25}
        width={100}
        data={data}
        options={{
          scales: {
            y: {
              min: 0,
              max: 500,
              ticks: {
                stepSize: 100,
              },
              grid: {
                display: true,
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
          elements: {
            point: {
              radius: 0,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          maintainAspectRatio: true,
        }}
        className='bg-white h-full'
      />
    </div>
  );
};

export const TopProducts = () => {
  const data = {
    labels: ['Basic Tees', 'Custom Short Pants', 'Super hoodies'],
    datasets: [
      {
        backgroundColor: ['#98D89E', '#F6DC7D', '#EE8484'],
        data: [55, 31, 14],
      },
    ],
  };
  return (
    <div className='p-4 rounded-[20px] bg-white'>
      <div className='flex items-center justify-between'>
        <h3>Top Products</h3>
        <p className='text-slate-500'>May-June 2021</p>
      </div>
      <div className='flex justify-between mt-4 px-8'>
        <div className='w-[150px] h-[150px]'>
          <Pie
            data={data}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div className='flex flex-col items-start justify-start'>
          <PieChartLegend chipBg='#E9A0A0' title='Basic Tees' value='55' />
          <PieChartLegend
            chipBg='#F6DC7D'
            title='Custom Short Pants'
            value='31'
          />
          <PieChartLegend chipBg='#EE8484' title='Super Hoodies' value='14' />
        </div>
      </div>
    </div>
  );
};

export const PieChartLegend = ({
  chipBg,
  value,
  title,
}: {
  chipBg: string;
  value: string;
  title: string;
}) => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center space-x-2 '>
        <div
          className='w-2 h-2 rounded-full'
          style={{ backgroundColor: chipBg }}
        ></div>
        <div>{title}</div>
      </div>
      <p className='text-slate-500 text-sm'>{value}%</p>
    </div>
  );
};

export const TodaysSchedule = () => {
  return (
    <div className='p-4 bg-white rounded-[20px]'>
      <div className='flex justify-between items-center'>
        <h2>Today&apos; Schedule</h2>
        <p>See All</p>
      </div>
      <div className='flex flex-col gap-3 mt-2 pl-4'>
        <ScheduleComponent
          color={'#9BDD7C'}
          address='Sunset Road, Kuta , Bali'
          timeSpan='14:00-15:00'
          title='Meeting with suppliers from Kuta Bali'
        />
        <ScheduleComponent
          color={'#6972C3'}
          address='Central Jakarta '
          timeSpan='18:00-20:00'
          title='Check operation at Giga Factory 1'
        />
      </div>
    </div>
  );
};

export const ScheduleComponent = ({
  color,
  title,
  address,
  timeSpan,
}: {
  color: string;
  title: string;
  address: string;
  timeSpan: string;
}) => {
  return (
    <div
      className='pl-3 border-l-4 flex flex-col text-sm text-slate-500'
      style={{ borderColor: color }}
    >
      <p className='text-base text-slate-800 font-semibold'>{title}</p>
      <p>{timeSpan}</p>
      <p>at {address}</p>
    </div>
  );
};
