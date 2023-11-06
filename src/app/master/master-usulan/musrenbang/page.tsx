'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Breadcrumb from '@/components/global/Breadcrumbs/Breadcrumb';
import { fetchApi } from '@/pages/api/request';
import Swal from 'sweetalert2';
import { shallowEqual, useSelector } from 'react-redux';
import { State } from '@/store/reducer';
import { BsPeopleFill } from "react-icons/bs";
import { FaSync } from 'react-icons/fa';
import { BiSolidAddToQueue } from 'react-icons/bi';
import { VscGitPullRequestGoToChanges } from 'react-icons/vsc';
import withAuth from '@/components/utils/withAuth';
import DataMusrenbang from '@/components/pages/master/master-usulan/musrenbang/list';
import { BiSearch } from 'react-icons/bi';
import Loading from '@/components/global/Loading/loading';

const Musrenbang = () => {
  const [dataMusrenbang, setDataMusrenbang] = useState<any>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetchDataMusrenbang();
  }, []);

  const fetchDataMusrenbang = () => {
    let temp: any = [
      {
        id: 1,
        tahun: 2023,
        usulan: 'Pembangunan / Perbaikan Pagar Makam',
        alamat: 'Jalan Puspowarno RT.10/04 Kelurahan Sogaten Kecamatan Manguharjo Kota Madiun',
        permasalahan: '-',
        opd: 'Dinas Perumahan Rakyat dan Kawasan Permukiman',
        pengambilUsulan: '-',
        status: '-'
      },
      {
        id: 2,
        tahun: 2023,
        usulan: 'Pembangunan / Perbaikan Pagar Makam',
        alamat: 'Jalan Puspowarno RT.10/04 Kelurahan Sogaten Kecamatan Manguharjo Kota Madiun',
        permasalahan: '-',
        opd: 'Dinas Perumahan Rakyat dan Kawasan Permukiman',
        pengambilUsulan: '-',
        status: '-'
      },
      {
        id: 3,
        tahun: 2023,
        usulan: 'Pembangunan / Perbaikan Pagar Makam',
        alamat: 'Jalan Puspowarno RT.10/04 Kelurahan Sogaten Kecamatan Manguharjo Kota Madiun',
        permasalahan: '-',
        opd: 'Dinas Perumahan Rakyat dan Kawasan Permukiman',
        pengambilUsulan: '-',
        status: '-'
      }
    ]
    setDataMusrenbang(temp);
  }

  const gradientStyle = {
    width: '100%',
    background: 'linear-gradient(to right, #00bcd4, #2196f3)',
  };

  return (
    <div className='musrenbang-container'>
      <Breadcrumb pageName="Musrenbang" />

      <div className="bg-white dark:bg-meta-4 dark:text-white shadow-card flex flex-col gap-2 py-6 text-center font-bold text-title-sm rounded rounded-lg border-none">
        <div>Usulan Musrenbang</div>
      </div>
      <div className='body relative'>
        <div className='flex justify-between items-center mt-10'>
          <div className='flex gap-2'>
            <div>
              <button className='bg-xl-base flex gap-3 px-4 py-2 items-center justify-center rounded-md text-center text-white mb-2 hover:bg-dark-xl'>
                <div><BiSolidAddToQueue size={16} /></div>
                <div>Tambah Usulan</div>
              </button>
            </div>
            <div>
              <button className='bg-warning flex gap-3 px-4 py-2 items-center justify-center rounded-md text-center text-white mb-2 hover:bg-dark-xl'>
                <div><FaSync size={16} /></div>
                <div>Sync Musrenbang</div>
              </button>
            </div>
            <div>
              <button className='bg-warning flex gap-3 px-4 py-2 items-center justify-center rounded-md text-center text-white mb-2 hover:bg-dark-xl'>
                <div><FaSync size={16} /></div>
                <div>Sync Kamus</div>
              </button>
            </div>
          </div>
          <div className='flex gap-3 bg-white items-center border border-light-gray rounded-3xl p-2 mb-3'>
            <BiSearch size={22} className='text-deep-gray' />
            <input
              type="text"
              id="province"
              name="province"
              value={search}
              placeholder='Search . . .'
              onChange={(e) => setSearch(e.target.value)}
              className='focus:outline-none w-full outline-none text-Axiata-Book' />
          </div>
        </div>
        <div style={gradientStyle}>
          <div className='px-4 flex text-white py-4 space-x-6 font-bold items-center'>
            <VscGitPullRequestGoToChanges size={20} />
            <div className='text-title-xsm'>Musrenbang</div>
          </div>
        </div>
        <DataMusrenbang data={dataMusrenbang} />
      </div>
    </div>
  )
}

export default withAuth(Musrenbang);