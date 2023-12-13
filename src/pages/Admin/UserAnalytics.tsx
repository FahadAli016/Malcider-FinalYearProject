import CardOne from '../../components/CardOne.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import { HiOutlineUsers} from 'react-icons/hi2';


type Props = {};

function UserAnalytics({}: Props) {
    const iconComponent = <HiOutlineUsers className="text-white !important font-bold text-2xl" />;
    
    return (
      <>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <CardOne count='30' title='Total Registered Users' icon={iconComponent} />
      <CardOne count='1'title='Total Malwares Scanned' icon={iconComponent} />
      <CardOne count='1'title='Total Malwares Scanned' icon={iconComponent} />
     
    </div>

    <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
    <ChartOne title='User Analytics'/>
        
    </div>
    </>
);
}

export default UserAnalytics;
