const ReportTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-white  text-left bg-meta-4  dark:bg-meta-4 print:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-bold text-white dark:text-white xl:pl-11">
                Sections
              </th>
              <th className="min-w-[150px] py-4 px-4 font-bold text-white dark:text-white">
                Virtual Size
              </th>
              <th className="min-w-[120px] py-4 px-4 font-bold text-white dark:text-white">
                Virtual Address
              </th>
              <th className="py-4 px-4 font-bold text-white dark:text-white">
                Raw Data Size
              </th>
              <th className="py-4 px-4 font-bold text-white dark:text-white">
                Pointer to Raw Data
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                  .text
                </h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white"></h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark"></td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p>s</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p>s</p>
              </td>
            </tr>

            <tr>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                  .rdata
                </h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white"></h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark"></td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p>s</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p>s</p>
              </td>
            </tr>

            <tr>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                  .data
                </h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white"></h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark"></td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p>s</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p>s</p>
              </td>
            </tr>

            <tr>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                  .rsrc
                </h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white"></h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark"></td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark"></td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportTable;
