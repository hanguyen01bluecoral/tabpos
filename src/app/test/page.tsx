"use client";
import React, { useState } from 'react';
import ListTable from './listtable';
import DetailView from './view';

interface Item {
  title: string;
  firtname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  sate: string;
  city: string;
  zipcode: string;
}

const sampleData: Item[] = [
    { title: 'Nguyen le (500 Poins)', 
        firtname: 'Nguyen', 
        lastname: 'Le', 
        email: 'nguyen@gmail.com',
        phone: '0123456789', 
        address: '121 Hồ Xuân Hương', 
        country: 'Viet Nam',
        sate: '',
        city: 'Hồ Chí Minh',
        zipcode: '#454545' 
    },
    { title: 'Loc Nguyen (700 Poins)', 
        firtname: 'Le Van', 
        lastname: 'Loc', 
        email: 'Loc@gmail.com',
        phone: '0311157168', 
        address: '96 Nguyễn Kiệm', 
        country: 'Viet Nam',
        sate: '',
        city: 'Đồng Tháp',
        zipcode: '0123' 
    },
    { title: 'Hoang Khanh An (500 Poins)', 
        firtname: 'Khanh An', 
        lastname: 'Hoang', 
        email: 'An@gmail.com',
        phone: '0123456789', 
        address: '55 Phạm Ngũ Lão', 
        country: 'Viet Nam',
        sate: '',
        city: 'Cần Thơ',
        zipcode: '01233333' 
    },
    { title: 'Hoang Nam (500 Poins)', 
        firtname: 'Hoang', 
        lastname: 'Nam', 
        email: 'nguyen@gmail.com',
        phone: '0123456789', 
        address: '100 Lê Văn Sỹ', 
        country: 'Viet Nam',
        sate: '',
        city: 'Long An',
        zipcode: '0123999' 
    },
    { title: 'Dinh Tien Hoang (500 Poins)', 
        firtname: 'Dinh', 
        lastname: 'Tien Hoang', 
        email: 'nguyen@gmail.com',
        phone: '0123456789', 
        address: '252 Lý Chính Thắng', 
        country: 'Viet Nam',
        sate: '',
        city: 'Đà Nẵng',
        zipcode: '01236888' 
    },
];

const DemoAddCustomes: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleRowClick = (item: Item) => {
    setSelectedItem(item);
  };

  const handleSave = (editedItem: Item) => {
    // Handle save logic here
    console.log('luu');
    console.log('Saving:', editedItem);
  };

  return (
    <div className="mt-7 w-[800px] flex justify-between ">
      <div className="">
      <ListTable data={sampleData} onRowClick={handleRowClick} />
      </div>
      <div className=''>
      <DetailView selectedItem={selectedItem} onSave={handleSave} />
      </div>
    </div>
  );
};

export default DemoAddCustomes;
