'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Breadcrumb from '@/components/global/Breadcrumbs/Breadcrumb';
import { fetchApi } from '@/pages/api/request';
import Swal from 'sweetalert2';
import { shallowEqual, useSelector } from 'react-redux';
import { State } from '@/store/reducer';
import { GiCalendarHalfYear } from "react-icons/gi";
import { BiSolidAddToQueue } from 'react-icons/bi';
import withAuth from '@/components/utils/withAuth';
import DataMusrenbang from '@/components/pages/master/master-usulan/musrenbang/list';
import { BiSearch } from 'react-icons/bi';
import Loading from '@/components/global/Loading/loading';
import DataIsuStrategisOPD from '@/components/pages/rencana-opd/isu-strategis/list';

const IsuStrategisOPD = () => {
  const router = useRouter();
  const [dataIsuStrategisOPD, setDataIsuStrategisOPD] = useState<any>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetchIsuStrategisOPD();
  }, []);

  const fetchIsuStrategisOPD = () => {
    let temp: any = [
      // {
      //   id: 1,
      //   urusan: '6 - UNSUR PENGAWASAN URUSAN PEMERINTAHAN',
      //   bidang_urusan: '6.01 - INSPEKTORAT DAERAH',
      //   tujuan_opd: 'Meningkatnya pengendalian dan pengawasan pengelolaan keuangan',
      //   komponen: [
      //     {
      //       indikator: 'Persentase PMKS yang dapat terpenuhi kebutuhan dasar minimal',
      //       rumus_perhitungan: 'PMKS yang dapat terpenuhi kebutuhan dasar minimal dibagi Jumlah PMKS dikalikan 100%',
      //       sumber_data: 'Dinsos PP dan PA',
      //       tahun: {
      //         tahun: 2020,
      //         target: '-',
      //         satuan: '-'
      //       },
      //       tahun_2021: {
      //         target: '-',
      //         satuan: '-'
      //       },
      //       tahun: {
      //         target: '-',
      //         satuan: '-'
      //       },
      //       tahun: {
      //         target: '-',
      //         satuan: '-'
      //       }
      //     }
      //   ]
      // },
    ]
    setDataIsuStrategisOPD(temp);
  }

  const gradientStyle = {
    width: '100%',
    background: 'linear-gradient(to right, #00bcd4, #2196f3)',
  };

  return (
    <div className='isu-strategis-opd-container'>
      <Breadcrumb pageName="Isu Strategis & Permasalahan" />

      <div className="bg-white dark:bg-meta-4 dark:text-white shadow-card flex flex-col gap-2 py-6 text-center font-bold text-title-sm rounded rounded-lg border-none">
        <div>Data Isu Strategis & Permasalahan</div>
      </div>
      <div className='body relative'>
        <div className='flex justify-between items-center mt-10'>
          <div className='flex'>
            <button
              className='bg-xl-base px-4 py-1 text-white rounded rounded-md hover:shadow-lg'
            >
              Tambah
            </button>
          </div>
          <div className='flex gap-3 bg-white items-center border border-light-gray rounded-3xl p-2 mb-3'>
            <BiSearch size={22} className='text-deep-gray' />
            <input
              type="text"
              id="search"
              name="search"
              value={search}
              placeholder='Search . . .'
              onChange={(e) => setSearch(e.target.value)}
              className='focus:outline-none w-full outline-none text-Axiata-Book' />
          </div>
        </div>
        <div style={gradientStyle}>
          <div className='px-4 flex text-white py-4 space-x-6 font-bold items-center'>
            <GiCalendarHalfYear size={20} />
            <div className='text-title-xsm'>Isu Strategis & Permasalahan</div>
          </div>
        </div>
        <DataIsuStrategisOPD data={dataIsuStrategisOPD} />
      </div>
    </div>
  )
}

export default withAuth(IsuStrategisOPD);