import Breadcrumb from '../components/Breadcrumb';

import TableThree from '../components/TableThree';



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
const Tables = () => {
  return (
    <>
    <Breadcrumb pageName="History" />

    <div className="flex flex-col gap-10">
      <TableThree data={tableData} />
    </div>
  </>
  );
};

export default Tables;
