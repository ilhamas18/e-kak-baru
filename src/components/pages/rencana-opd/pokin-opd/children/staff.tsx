import * as React from 'react';
import { useState, useEffect } from 'react';
import TacticalProps from './tactical';
import { TbBrandTorchain } from 'react-icons/tb';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

interface PropTypes {
  data: any;
  staff: any;
  key: number
}

const StaffProps = ({ data, staff, key }: PropTypes) => {
  const buttonText = 'Detail'
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const handleShowDetail = (val: boolean) => {
    setShowDetail(!val);
  }

  return (
    <li>
      <div className='tree-child bg-[#cbd5e1] w-[30em] flex flex-col gap-4 border border-white' key={key}>
        <div className='border border-white w-full'>
          <div className='text-white font-medium text-medium'>STAFF</div>
        </div>
        <table className='flex flex-col border border-black text-black bg-white mt-4'>
          <tbody>
            <tr className='flex items-center border border-light-gray p-2'>
              <td className='w-[30%] text-left'>STAFF</td>
              <td className='w-[5%]'>:</td>
              <td className='w-[65%] text-left'>{staff.strategi}</td>
            </tr>
            {showDetail && (
              <>
                {staff.indikators?.map((el2: any, i2: number) => (
                  <>
                    <tr className='flex items-center border border-light-gray p-2' key={i2}>
                      <td className='w-[30%] text-left text-title-ss2'>INDIKATOR {i2 + 1}</td>
                      <td className='w-[5%]'>:</td>
                      <td className='w-[65%] text-left'>{el2.indikator.indikator}</td>
                    </tr>
                    <tr className='flex items-center border border-light-gray p-2'>
                      <td className='w-[30%] text-left text-title-ss2'>TARGET / SATUAN</td>
                      <td className='w-[5%]'>:</td>
                      <td className='w-[65%] text-left'>{el2.indikator.target} {el2.indikator.satuan}</td>
                    </tr>
                  </>
                ))}
                <tr className='flex items-center border border-light-gray p-2'>
                  <td className='w-[30%] text-left text-title-ss2'>KETERANGAN</td>
                  <td className='w-[5%]'>:</td>
                  <td className='w-[65%] text-left'>{staff.keterangan}</td>
                </tr>
                <tr className='flex items-center border border-light-gray p-2'>
                  <td className='w-[30%] text-left text-title-ss2'>PERANGKAT DAERAH</td>
                  <td className='w-[5%]'>:</td>
                  <td className='w-[65%] text-left'>{staff.perangkat_daerah.nama_opd}</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
        <div className='flex flex-col space-y-3 w-full'>
          <button className='px-4 py-1 rounded rounded-md border border-white text-white hover:bg-xl-base duration-500 mt-4 w-full' onClick={() => handleShowDetail(showDetail)}>
            {!showDetail ? 'Detail' : 'Tutup'}
          </button>
          <div className='bg-white w-full flex flex-row justify-between items-center px-2 py-1'>
            <div>
              <button className='px-2 py-1 rounded rounded-md border border-[#059669] text-[#059669] duration-500 flex items-center justify-center hover:shadow-2xl gap-2'>
                <TbBrandTorchain size={16} />
                <span>Crosscutting</span>
              </button>
            </div>
            <div>
              <button className='px-2 py-1 rounded rounded-md border border-[#f59e0b] text-[#f59e0b] duration-500 flex items-center justify-center hover:shadow-2xl gap-2'>
                <FaEdit size={16} />
                <span>Edit</span>
              </button>
            </div>
            <div>
              <button className='px-2 py-1 rounded rounded-md border border-[#dc2626] text-[#dc2626] duration-500 flex items-center justify-center hover:shadow-2xl gap-2'>
                <AiFillDelete size={16} />
                <span>Hapus</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default StaffProps

