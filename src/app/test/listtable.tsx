"use client";
import React from 'react';

interface ListTableProps {
  data: Array<{  title: string;
    firtname: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    country: string;
    sate: string;
    city: string;
    zipcode: string; }>;
  onRowClick: (item: {  title: string;
    firtname: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    country: string;
    sate: string;
    city: string;
    zipcode: string;}) => void;
}

const ListTable: React.FC<ListTableProps> = ({ data, onRowClick }) => {
  //ham xac dinh khi duoc active 
  return (
    <table>
      <tbody>
        {data.map((item, index) => (
            <div key={index} onClick={() => onRowClick(item)} className='cursor-pointer'>
                <div className="w-[670px] h-[65px] p-4 bg-white rounded border-b border-zinc-100 justify-start items-center inline-flex hover:bg-[#F7F9FB]">
                    <div className='flex'>
                        <div className="w-8 h-8 rounded-full bg-slate-300">
                        <svg
                            className='items-center ml-[5px] mt-1' 
                            width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="user 2">
                            <path id="Vector" d="M10.7175 10.0833C9.77822 10.0833 8.87738 9.71019 8.21319 9.046C7.549 8.38181 7.17586 7.48098 7.17586 6.54167C7.17586 5.60236 7.549 4.70152 8.21319 4.03733C8.87738 3.37314 9.77822 3 10.7175 3C11.6568 3 12.5577 3.37314 13.2219 4.03733C13.8861 4.70152 14.2592 5.60236 14.2592 6.54167C14.2592 7.48098 13.8861 8.38181 13.2219 9.046C12.5577 9.71019 11.6568 10.0833 10.7175 10.0833ZM3.21753 17.1667V16.75C3.21753 15.2029 3.83211 13.7192 4.92607 12.6252C6.02004 11.5312 7.50377 10.9167 9.05086 10.9167H12.3842C13.9313 10.9167 15.415 11.5312 16.509 12.6252C17.6029 13.7192 18.2175 15.2029 18.2175 16.75V17.1667C18.2175 17.3877 18.1297 17.5996 17.9735 17.7559C17.8172 17.9122 17.6052 18 17.3842 18H4.05086C3.82985 18 3.61789 17.9122 3.46161 17.7559C3.30533 17.5996 3.21753 17.3877 3.21753 17.1667Z" fill="white"/>
                            </g>
                        </svg>

                        </div>
                        <div className='ml-2'>
                            <p className='text-black text-[14px] font-medium leading-normal items-center'>{item.title} <span className='w-full h-full px-1 py-[2px] rounded-full bg-[#e7e4e4]'>500 poins</span></p>
                            <div className='flex mt-1 items-center'>
                              <svg
                                className='mr-1' 
                                width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1631_5233)">
                                <path d="M11.8812 10.856C11.538 11.8012 10.6908 12.4204 9.75797 12.4848V12.4964C3.92397 12.4964 0.00317383 8.59644 0.00317383 2.71684H0.0199738C0.0955738 1.79404 0.707574 0.958838 1.63957 0.618838C2.90517 0.157238 3.38797 1.14604 3.84877 2.41484C4.30957 3.68364 4.57357 4.75204 3.30797 5.21404C3.16277 5.26684 3.01557 5.30084 2.86757 5.32444C3.38477 7.45644 5.05997 9.11884 7.18677 9.62924C7.21077 9.48004 7.24517 9.33084 7.29797 9.18404C7.75837 7.91524 8.82437 8.18004 10.09 8.64204C11.3556 9.10404 12.3416 9.58724 11.8812 10.856Z" fill="#555555"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1631_5233">
                                <rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
                                </clipPath>
                                </defs>
                              </svg>
                              <p className='text-[#555] text-[12px] font-normal leading-normal'>{item.phone}</p>

                              <svg className='ml-[12px] mr-1' width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.46125 2.375H2.53875C1.9655 2.37698 1.41629 2.60558 1.01093 3.01093C0.605577 3.41629 0.376977 3.9655 0.375 4.53875V9.21125C0.376977 9.7845 0.605577 10.3337 1.01093 10.7391C1.41629 11.1444 1.9655 11.373 2.53875 11.375H9.46125C10.0345 11.373 10.5837 11.1444 10.9891 10.7391C11.3944 10.3337 11.623 9.7845 11.625 9.21125V4.53875C11.623 3.9655 11.3944 3.41629 10.9891 3.01093C10.5837 2.60558 10.0345 2.37698 9.46125 2.375ZM3.33 9.08L2.25 10.175C2.09488 10.1189 1.95401 10.0293 1.83736 9.91264C1.72071 9.796 1.63114 9.65512 1.575 9.5L2.67 8.405C2.75802 8.31698 2.8774 8.26753 3.00187 8.26753C3.12635 8.26753 3.24573 8.31698 3.33375 8.405C3.42177 8.49302 3.47122 8.6124 3.47122 8.73688C3.47122 8.86135 3.42177 8.98073 3.33375 9.06875L3.33 9.08ZM9.75 10.175L8.655 9.08C8.56698 8.99198 8.51753 8.8726 8.51753 8.74813C8.51753 8.62365 8.56698 8.50427 8.655 8.41625C8.74302 8.32823 8.8624 8.27878 8.98688 8.27878C9.11135 8.27878 9.23073 8.32823 9.31875 8.41625L10.425 9.5C10.3689 9.65512 10.2793 9.796 10.1626 9.91264C10.046 10.0293 9.90512 10.1189 9.75 10.175ZM10.5 4.81625L7.8525 7.35125C7.33248 7.86878 6.62866 8.15932 5.895 8.15932C5.16133 8.15932 4.45752 7.86878 3.9375 7.35125L1.5 4.8725V4.625C1.50102 4.45067 1.54254 4.27895 1.62128 4.12342C1.70003 3.96788 1.81384 3.83277 1.95375 3.72875L4.74 6.5525C5.04924 6.8605 5.46792 7.03343 5.90438 7.03343C6.34083 7.03343 6.75951 6.8605 7.06875 6.5525L10.0275 3.71375C10.1729 3.81727 10.2916 3.9539 10.3737 4.11235C10.4559 4.27079 10.4992 4.44652 10.5 4.625V4.81625Z" fill="#555555"/>
                              </svg>
                              <p className='text-[#555] text-[12px] font-normal leading-normal'>{item.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </tbody>
    </table>
  );
};

export default ListTable;
