import Breadcrumb from '../../components/Breadcrumb';
import UsersTable from '../../components/UsersTable';

type Props = {}
type TableData = {
  packageType: string;
  price: string;
  date: string;
  status: string;
};
const tableData: TableData[] = [
  {
    packageType: 'Free Package',
    price: '$0.00',
    date: 'Jan 13, 2023',
    status: 'Paid',
  },
  {
    packageType: 'Standard Package',
    price: '$59.00',
    date: 'Jan 13, 2023',
    status: 'Paid',
  },
  {
    packageType: 'Business Package',
    price: '$99.00',
    date: 'Jan 13, 2023',
    status: 'Unpaid',
  },
];
function RegisteredUsers({}: Props) {
  return (
    <>
      <Breadcrumb pageName="Registered Users" />

      <div className="flex flex-col gap-10">
        <UsersTable data={tableData}/>
      </div>
    </>
  )
}

export default RegisteredUsers