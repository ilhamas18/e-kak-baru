'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Breadcrumb from '@/components/global/Breadcrumbs/Breadcrumb';
import { fetchApi } from '@/pages/api/request';
import Swal from 'sweetalert2';
import { shallowEqual, useSelector } from 'react-redux';
import { State } from '@/store/reducer';
import { PiTreeStructure } from "react-icons/pi";
import { BiSolidAddToQueue } from 'react-icons/bi';
import withAuth from '@/components/utils/withAuth';
import DataMusrenbang from '@/components/pages/master/master-usulan/musrenbang/list';
import { BiSearch } from 'react-icons/bi';
import Loading from '@/components/global/Loading/loading';
import DataPokinOPD from '@/components/pages/rencana-opd/pokin-opd/list';
import { fetchPokinOPD } from './request';

const PokinOPD = () => {
  const router = useRouter();
  const [dataPokinOPD, setDataPokinOPD] = useState<any>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { storeKodeOPD, storeYear } = useSelector((state: State) => ({
    storeKodeOPD: state.filter.storeKodeOPD,
    storeYear: state.filter.storeYear
  }), shallowEqual);

  useEffect(() => {
    fetchTujuanOPD();
  }, [storeKodeOPD, storeYear]);

  const fetchTujuanOPD = async () => {
    try {
      setLoading(true);
      const payload = {
        kode_opd: storeKodeOPD.value,
        tahun: storeYear.value
      }
      const response = await fetchPokinOPD(payload);

      if (response.status == 200) {
        setDataPokinOPD(response.data.results);
        setLoading(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Koneksi bermasalah!",
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Koneksi bermasalah!",
      });
    }
  }

  const gradientStyle = {
    width: '100%',
    background: 'linear-gradient(to right, #00bcd4, #2196f3)',
  };

  return (
    <div className='pokin-opd-container'>
      <Breadcrumb pageName="Pohon Kinerja OPD" />

      {loading ? (
        <Loading loading={loading} setLoading={setLoading} />
      ) : dataPokinOPD.length !== 0 && (
        <>
          <div className="bg-white dark:bg-meta-4 dark:text-white shadow-card flex flex-col gap-2 py-6 text-center font-bold text-title-sm rounded rounded-lg border-none">
            <div>Pohon Kinerja OPD {storeKodeOPD.label}</div>
            <div>Tahun {storeYear.label}</div>
          </div>
          <div className='body relative'>
            <div className='flex justify-between items-center mt-10'>
              <div></div>
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
                <PiTreeStructure size={20} />
                <div className='text-title-xsm'>Pohon Kinerja OPD </div>
              </div>
            </div>
            <DataPokinOPD data={dataPokinOPD} />
          </div>
        </>
      )}
    </div>
  )
}

export default withAuth(PokinOPD);