'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Breadcrumb from '@/components/global/Breadcrumbs/Breadcrumb';
import { FaSync } from 'react-icons/fa';
import { BiSolidAddToQueue } from 'react-icons/bi';
import { FcIdea } from 'react-icons/fc';
import withAuth from '@/components/utils/withAuth';
import { BiSearch } from 'react-icons/bi';
import DataPokokPikiran from '@/components/pages/master/master-usulan/pokpirs/list';
import { BiEdit } from 'react-icons/bi';

const PokokPikiran = () => {
  const [pokokPikiran, setPokokPikiran] = useState<any>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetchDataPokpirs();
  }, []);

  const fetchDataPokpirs = () => {
    let temp: any = [
      {
        id: 1,
        tahun: 2023,
        usulan: 'Perbaikan Kali Glender',
        alamat: 'Kali Glender Jl MT Haryono',
        permasalahan: '200 meter',
        opd: 'Dinas Pekerjaan Umum dan Penataan Ruang',
        pengambilUsulan: '-',
        status: '-',
      },
      {
        id: 2,
        tahun: 2023,
        usulan: 'Perbaikan Kali Glender',
        alamat: 'Kali Glender Jl MT Haryono',
        permasalahan: '200 meter',
        opd: 'Dinas Pekerjaan Umum dan Penataan Ruang',
        pengambilUsulan: '-',
        status: '-',
      }
    ]
    setPokokPikiran(temp)
  }

  const gradientStyle = {
    width: '100%',
    background: 'linear-gradient(to right, #00bcd4, #2196f3)',
  };

  return (
    <div className='pokok-pikiran-container'>
      <Breadcrumb pageName="Pokok Pikiran" />

      <div className="bg-white dark:bg-meta-4 dark:text-white shadow-card flex flex-col gap-2 py-6 text-center font-bold text-title-sm rounded rounded-lg border-none">
        <div>Usulan Pokok Pikiran DPRD</div>
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
                <div>Sync Pokok Pikiran Tahun 2023</div>
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
            <FcIdea size={24} />
            <div className='text-title-xsm'>Pokok Pikiran</div>
          </div>
        </div>
        <DataPokokPikiran data={pokokPikiran} />
      </div>
    </div>
  )
}

export default withAuth(PokokPikiran);