'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Breadcrumb from '@/components/global/Breadcrumbs/Breadcrumb';
import { fetchApi } from '@/pages/api/request';
import Swal from 'sweetalert2';
import { shallowEqual, useSelector } from 'react-redux';
import { State } from '@/store/reducer';
import { SiMicrostrategy } from "react-icons/si";
import { BiSolidAddToQueue } from 'react-icons/bi';
import withAuth from '@/components/utils/withAuth';
import DataMusrenbang from '@/components/pages/master/master-usulan/musrenbang/list';
import { BiSearch } from 'react-icons/bi';
import Loading from '@/components/global/Loading/loading';
import { MdNoteAdd } from "react-icons/md";

const DataSubTematikKota = dynamic(() => import('@/components/pages/rencana-kota/sub-tematik/list'), {
  ssr: false,
  loading: () => <Loading />
});

const SubTematikKota = () => {
  const router = useRouter();
  const [dataSubTematik, setDataSubTematik] = useState<any>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getSubTematik();
  }, []);

  const getSubTematik = async () => {
    setLoading(true);
    const response = await fetchApi({
      url: '/tematik/getAllSubTematik',
      method: 'get',
      type: 'auth'
    })

    if (!response.success) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Koneksi bermasalah!",
      });
    } else {
      const { data } = response.data;
      setDataSubTematik(data);
      setLoading(false);
    }
  }

  const handleAddSubTematik = () => router.push('/rencana-kota/sub-tematik/tambah');

  const gradientStyle = {
    width: '100%',
    background: 'linear-gradient(to right, #00bcd4, #2196f3)',
  };

  return (
    <div className='sub-tematik-kota-container'>
      <Breadcrumb pageName="Sub Tematik Kota" />

      {loading ? (
        <Loading loading={loading} setLoading={setLoading} />
      ) : (
        <>
          <div className="bg-white dark:bg-meta-4 dark:text-white shadow-card flex flex-col gap-2 py-6 text-center font-bold text-title-sm rounded rounded-lg border-none">
            <div>Data Sub Tematik Kota</div>
          </div>
          <div className='body relative'>
            <div className='flex justify-between items-center mt-10'>
              <div className='flex'>
                <button
                  className='bg-xl-base px-4 py-1 text-white flex items-center justify-center gap-2 text-white rounded rounded-md hover:shadow-lg'
                  onClick={handleAddSubTematik}
                >
                  <MdNoteAdd size={18} />
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
                <SiMicrostrategy size={20} />
                <div className='text-title-xsm'>Sub Tematik Kota</div>
              </div>
            </div>
            <DataSubTematikKota data={dataSubTematik} />
          </div>
        </>
      )}
    </div>
  )
}

export default withAuth(SubTematikKota);