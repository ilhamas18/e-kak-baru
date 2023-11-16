'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Breadcrumb from '@/components/global/Breadcrumbs/Breadcrumb';
import Swal from 'sweetalert2';
import { shallowEqual, useSelector } from 'react-redux';
import { State } from '@/store/reducer';
import { PiTreeStructure } from "react-icons/pi";
import withAuth from '@/components/utils/withAuth';
import Loading from '@/components/global/Loading/loading';
import { fetchPokinOPD } from './api';
import dynamic from 'next/dynamic';

const DataPokinOPD = dynamic(() => import('@/components/pages/rencana-opd/pokin-opd/list'), {
  ssr: false,
  loading: () => <Loading />
})

const PokinOPD = () => {
  const [dataPokinOPD, setDataPokinOPD] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { storeKodeOPD, storeYear } = useSelector((state: State) => ({
    storeKodeOPD: state.filter.storeKodeOPD,
    storeYear: state.filter.storeYear
  }), shallowEqual);

  useEffect(() => {
    getPokinOPD();
  }, [storeKodeOPD, storeYear]);

  const getPokinOPD = async () => {
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
        setLoading(false);
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
            <div>Pohon Kinerja OPD</div>
            <div>{storeKodeOPD.label}</div>
            <div>Tahun {storeYear.label}</div>
          </div>
          <div className='body relative mt-10'>
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