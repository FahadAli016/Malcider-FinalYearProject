import Breadcrumb from '../../components/Breadcrumb';

import TableThree from '../../components/TableThree';



type TableData = {
  packageType: string;
  date: string;
  status: string;
};
const tableData: TableData[] = [
  {
    packageType: 'Free Package',
    
    date: 'Jan 13, 2023',
    status: 'Paid',
  },
  {
    packageType: 'Standard Package',
    date: 'Jan 13, 2023',
    status: 'Paid',
  },
];
type Props = {}
function ScannedFiles
({}: Props) {
  return (
    <>
    <Breadcrumb pageName="Scanned Files" />

    <div className="flex flex-col gap-10">
      <TableThree data={tableData} />
    </div>
  </>
  )
}

export default ScannedFiles
