import CardOne from '../../components/CardOne.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import TableThree from '../../components/TableThree.tsx';
import { BsBug, BsFiletypeExe } from 'react-icons/bs';

type TableData = {
  packageType: string;
  date: string;
  status: string;
};
const tableData: TableData[] = [
  {
    packageType: '98768568798657687',
    
    date: 'Jan 13, 2023',
    status: 'Fahad',
  },
  {
    packageType: '98768568798657687',
    
    date: 'Jan 13, 2023',
    status: 'Fahad',
  },
];
const Dashboard = () => {
  const iconComponent = <BsFiletypeExe className="text-white !important font-bold text-2xl" />;
  const iconComponent2 = <BsBug className="text-white !important font-bold text-2xl" />;
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
      <CardOne count='40'title='Total Malwares Scanned' icon={iconComponent} />
    <CardOne count='Agent Tesla'title='Trending Malware' icon={iconComponent2} />
    <CardOne count='20'title='Files Scanned in Last 24 Hours' icon={iconComponent} />
   
        
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      <ChartOne title='Latest Malware Trends'/>
        <div className="col-span-12 xl:col-span-12">
        <TableThree data={tableData} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
