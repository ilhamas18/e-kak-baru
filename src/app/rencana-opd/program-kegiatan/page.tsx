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
import DataProgramKegiatan from '@/components/pages/rencana-opd/program-kegiatan/list';

const ProgramKegiatan = () => {
  const router = useRouter();
  const [dataProgramKegiatan, setDataProgramKegiatan] = useState<any>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetchTujuanOPD();
  }, []);

  const fetchTujuanOPD = () => {
    let temp: any = [
      {
        kode_bidang_urusan: '5.01',
        nama_bidang_urusan: 'PERENCANAAN',
        kode_opd: '5.01.5.05.0.00.02.0000',
        opd: 'Badan Perencanaan, Penelitian dan Pengembangan Daerah',
        programs: [
          {
            kode_program: '5.01.01',
            nama_program: 'PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA',
            tahun: [
              {
                tahun: '2023_PERUBAHAN',
                indikator: 'Nilai SAKIP khusus developer!! | th: 2020 | tahun indikator: 2020 | id: 10331 | kode: 5.01.01 | kode_opd: 5.01.5.05.0.00.02.0000',
                target: '0',
                satuan: 'Skor',
                pagu_indikatif: 'Rp.0',
                keterangan: 'update 1'
              },
            ],
            kegiatans: [
              {
                kode_kegiatan: '5.01.01.2.01',
                nama_kegiatan: 'Perencanaan, Penganggaran, dan Evaluasi Kinerja Perangkat Daerah',
                tahun: [
                  {
                    tahun: '2023_PERUBAHAN',
                    indikator: 'Nilai SAKIP khusus developer!! | th: 2020 | tahun indikator: 2020 | id: 10331 | kode: 5.01.01 | kode_opd: 5.01.5.05.0.00.02.0000',
                    target: '0',
                    satuan: 'Skor',
                    pagu_indikatif: 'Rp.0',
                    keterangan: 'update 1'
                  },
                ],
                sub_kegiatan: [
                  {
                    kode_sub_kegiatan: '5.01.01.2.01.01',
                    nama_sub_kegiatan: 'Penyusunan Dokumen Perencanaan Perangkat Daerah',
                    tahun: [
                      {
                        tahun: '2023_PERUBAHAN',
                        indikator: 'jumlah dokumen perencanaan, pengendalian dan evaluasi perangkat daerah khusus developer!! | th: 2020 | tahun indikator: 2020 | id: 4476 | kode: 5.01.01.2.01.01 |',
                        target: '7',
                        satuan: 'Dokumen',
                        pagu_indikatif: 'Rp.0',
                        keterangan: '-'
                      },
                    ]
                  },
                  {
                    kode_sub_kegiatan: '5.01.01.2.01.06',
                    nama_sub_kegiatan: 'Koordinasi dan Penyusunan Laporan Capaian Kinerja dan Ikhtisar Realisasi Kinerja SKPD',
                    tahun: [
                      {
                        tahun: '2023_PERUBAHAN',
                        indikator: 'jumlah dokumen perencanaan, pengendalian dan evaluasi perangkat daerah khusus developer!! | th: 2020 | tahun indikator: 2020 | id: 4476 | kode: 5.01.01.2.01.01 |',
                        target: '7',
                        satuan: 'Dokumen',
                        pagu_indikatif: 'Rp.0',
                        keterangan: '-'
                      },
                    ]
                  }
                ]
              },
              {
                kode_kegiatan: '5.01.01.2.01',
                nama_kegiatan: 'Administrasi Umum Perangkat Daerah',
                tahun: [
                  {
                    tahun: '2023_PERUBAHAN',
                    indikator: '-',
                    target: '0',
                    satuan: 'Skor',
                    pagu_indikatif: 'Rp.0',
                    keterangan: 'update 1'
                  },
                ],
                sub_kegiatan: [
                  {
                    kode_sub_kegiatan: '5.01.01.2.01.01',
                    nama_sub_kegiatan: 'Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD',
                    tahun: [
                      {
                        tahun: '2023_PERUBAHAN',
                        indikator: '-',
                        target: '-',
                        satuan: '-',
                        pagu_indikatif: 'Rp.0',
                        keterangan: '-'
                      },
                    ]
                  },
                ]
              }
            ],
          },
        ],
      }
    ]
    setDataProgramKegiatan(temp);
  }

  const gradientStyle = {
    width: '100%',
    background: 'linear-gradient(to right, #00bcd4, #2196f3)',
  };

  return (
    <div className='program-opd-container'>
      <Breadcrumb pageName="Program, Kegiatan, & Sub Kegiatan" />

      <div className="bg-white dark:bg-meta-4 dark:text-white shadow-card flex flex-col gap-2 py-6 text-center font-bold text-title-sm rounded rounded-lg border-none">
        <div>Program, Kegiatan, & Sub Kegiatan</div>
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
            <div className='text-title-xsm'>Program, Kegiatan, & Sub Kegiatan</div>
          </div>
        </div>
        <DataProgramKegiatan data={dataProgramKegiatan} />
      </div>
    </div>
  )
}

export default withAuth(ProgramKegiatan);