import { ReactElement } from 'react';

interface Props {
  count: string;
  title: string;
  icon: ReactElement;
}
const CardOne: React.FC<Props> = ({ count, title, icon }: Props) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-4 dark:bg-meta-4">
        {icon}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          <h4
           
            className="text-title-md font-bold text-black dark:text-white overflow-hidden "
          >
            {count}
          </h4>
          <span className="text-sm font-medium">{title}</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
          0.43%
          <svg
            className="fill-meta-3"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
              fill=""
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CardOne;
