import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import '../../src/pages/ScanFile.css';

const ScanFile = () => {
  


  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <>
      <Breadcrumb pageName="Scan File" />

      <div className={`grid grid-cols-1 sm:grid-cols-1 m-25  xl:col-span-1 `}>
        <div 
        >
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-extrabold text-black dark:text-white">
                Upload File
              </h3>
            </div>
            <div className="p-7">
              <form action="#">
                <div
                  id="FileUpload"
                  className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-meta-4 dark:bg-boxdark py-4 px-4 dark:bg-boxdarksm:py-7.5"
                >
                  <input
                    type="file"
                    accept="exe/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none "
                  />
                  <div className="flex flex-col items-center justify-center space-y-3 dark:bg-boxdark">
                    {selectedFile ? (
                      <>
                        <h2 className='text-3xl text-black dark:text-white font-bold'> {selectedFile.name} </h2 >
                        <p className='text-xl text-black dark:text-white font-bold'>is selected</p>
                      
                      </>
                    ) : (
                      <>
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                              fill="#3C50E0"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                              fill="#3C50E0"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                              fill="#3C50E0"
                            />
                          </svg>
                        </span>
                        <p>
                          <span className="text-primary">Click to upload</span>{' '}
                          or drag and drop
                        </p>
                        <p className="mt-1.5">Upload .exe File</p>
                        <p>(max, 800 X 800px)</p>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex justify-center items-center gap-4.5">
                  <button
                    className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                    type="submit"
                  >
                    Cancel
                  </button>

                  <button
                    className="flex justify-center rounded bg-meta-4 py-2 px-6 font-medium text-white hover:bg-opacity-70 "
                    type="submit"
                  
                  >
                    Scan
                  </button>

                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScanFile;
