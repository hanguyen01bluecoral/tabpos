"use client";
import React, { useState } from 'react';
import ListTableOrder from './listtableOder';
import DetailView1 from './view';

interface Item {
    title: string;
    date: string;
    sate: string; 
    coin: string;
    name:string;
}

const sampleData: Item[] = [
    { 
      title: '#32098532798',
      date: '21/11/2017, 15:30',
      sate:  'Not',
      coin: '359.000.000đ',
      name: 'Tuan Nguyen'
    },
    {  title: '#32098532799',
    date: '21/11/2019, 15:30',
    sate:  'Completed',
    coin: '350.000.000đ',
    name: 'Uyen Tran'
    },
    {  title: '#32098532710',
    date: '21/11/2017, 15:30',
    sate:  'Completed',
    coin: '350.000.000đ',
    name: 'Uyen Tran'
    },
    {  title: '#32098532771',
    date: '21/11/2018, 15:30',
    sate:  'Completed',
    coin: '350.000.000đ',
    name: 'Nguyen Le'
    },
    {  title: '#3209853279',
    date: '21/11/2020, 15:30',
    sate:  'Completed',
    coin: '350.000.000đ',
    name: 'Hoang Anh'
    },
    {  title: '#3209853789',
    date: '11/11/2022, 05:30',
    sate:  'Completed',
    coin: '450.000.000đ',
    name: 'Ngoc Hoang'
    },
    {  title: '#320985456789',
    date: '11/11/2022, 05:30',
    sate:  'Completed',
    coin: '450.000.000đ',
    name: 'Ngoc Nhan'
    },
    {  title: '#3209822222',
    date: '11/11/2022, 05:30',
    sate:  'Not Paid',
    coin: '450.000.000đ',
    name: 'Truong Giang'
    },
    {  title: '#3209866666',
    date: '11/11/2022, 05:30',
    sate:  'Appro',
    coin: '450.000.000đ',
    name: 'Ngoc Nam'
    },
    {  title: '#3201111111',
    date: '11/12/2024, 05:30',
    sate:  'Not Paid',
    coin: '450.000.000đ',
    name: 'Nguyen Hong'
    },
];

const DemoOrderNotPaid: React.FC = () => {
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
    <div className="mt-7 w-full flex  ">
      <div className="w-[370px]">
        <ListTableOrder data={sampleData} onRowClick={handleRowClick} />
      </div>
      <div className='-mt-[106px] w-[calc(100%-400px)]'>
        <DetailView1 selectedItem={selectedItem} onSave={handleSave} />
      </div>
    </div>
  );
};

export default DemoOrderNotPaid;
