'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Breadcrumb from '@/components/global/Breadcrumbs/Breadcrumb';
import { fetchTujuanOPD } from './request';
import Swal from 'sweetalert2';
import { shallowEqual, useSelector } from 'react-redux';
import { State } from '@/store/reducer';
import { GiCalendarHalfYear } from "react-icons/gi";
import { BiSolidAddToQueue } from 'react-icons/bi';
import withAuth from '@/components/utils/withAuth';
import DataMusrenbang from '@/components/pages/master/master-usulan/musrenbang/list';
import { BiSearch } from 'react-icons/bi';
import Loading from '@/components/global/Loading/loading';
import DataTujuanOPD from '@/components/pages/rencana-opd/tujuan-opd/list';
import { AiFillFolderAdd } from 'react-icons/ai';

const TujuanOPD = () => {
  const router = useRouter();
  const [dataTujuanOPD, setDataTujuanOPD] = useState<any>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  console.log(dataTujuanOPD, '>>>');

  const { storeKodeOPD } = useSelector((state: State) => ({
    storeKodeOPD: state.filter.storeKodeOPD
  }), shallowEqual);

  useEffect(() => {
    getTujuanOPD();
  }, [storeKodeOPD]);

  const getTujuanOPD = async () => {
    try {
      setLoading(true);
      const payload = {
        kode_opd: storeKodeOPD.value
      }

      const response: any = await fetchTujuanOPD(payload);

      if (response.status == 200) {
        setDataTujuanOPD(response.data.data.tujuan_opd);
        setLoading(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Koneksi bermasalah!",
        });
        setLoading(false);
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Koneksi bermasalah!",
      });
      setLoading(false);
    }
  }

  const handleAddData = () => router.push('/rencana-opd/tujuan-opd/tambah');

  const gradientStyle = {
    width: '100%',
    background: 'linear-gradient(to right, #00bcd4, #2196f3)',
  };

  return (
    <div className='tujuan-opd-container'>
      <Breadcrumb pageName="Tujuan OPD" />

      {loading ? (
        <Loading loading={loading} setLoading={setLoading} />
      ) : dataTujuanOPD.length != 0 && (
        <>
          <div className="bg-white dark:bg-meta-4 dark:text-white shadow-card flex flex-col gap-2 py-6 text-center font-bold text-title-sm rounded rounded-lg border-none">
            <div>Data Tujuan OPD</div>
          </div>
          <div className='body relative'>
            <div className='flex justify-between items-center mt-10'>
              <div className='flex'>
                <button
                  className='bg-xl-base px-4 py-[4px] text-white rounded rounded-md hover:shadow-lg flex gap-2 items-center justify-center'
                  onClick={handleAddData}
                >
                  <AiFillFolderAdd size={18} />
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
                <div className='text-title-xsm'>Tujuan OPD</div>
              </div>
            </div>
            <DataTujuanOPD data={dataTujuanOPD} />
          </div>
        </>
      )}
    </div>
  )
}

export default withAuth(TujuanOPD);