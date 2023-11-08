import * as React from 'react';
import { useState, useEffect } from 'react';


const StrategicProps = ({ data }: any) => {
  const buttonText = 'Detail'
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const handleShowDetail = (val: boolean) => {
    console.log(val, 'current value')
    setShowDetail(!val);
    console.log(val, 'after ed value')
  }

  return (
    <li>
      <div className='bg-[#dc2626] w-[30em] flex flex-col gap-4 border border-white'>
        <div className='border border-white'>
          <div className='text-white font-medium text-medium'>STRATEGIC</div>
        </div>
        <table className='flex flex-col border border-black text-black bg-white mt-4'>
          <tbody>
            <tr className='flex items-center border border-light-gray p-2'>
              <td className='w-[30%] text-left'>STRATEGI</td>
              <td className='w-[5%]'>:</td>
              <td className='w-[65%] text-left'>{data.strategi}</td>
            </tr>
            {showDetail && (
              <>
                {data.indikators?.map((el2: any, i2: number) => (
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
                  <td className='w-[30%] text-left text-title-ss2'>PERANGKAT DAERAH</td>
                  <td className='w-[5%]'>:</td>
                  <td className='w-[65%] text-left'>{data.perangkat_daerah.nama_opd}</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
        <button className='px-4 py-1 rounded rounded-md border border-white text-white hover:bg-xl-base duration-500' onClick={() => handleShowDetail(showDetail)}>{buttonText}</button>
        {/* {!showDetail ? (
        <button className='px-4 py-1 rounded rounded-md border border-white text-white hover:bg-xl-base duration-500' onClick={() => handleShowDetail(true, el.id)}>Detail</button>
      ) : (
        <button className='px-4 py-1 rounded rounded-md border border-white text-white hover:bg-xl-base duration-500' onClick={() => handleShowDetail(false, el.id)}>Sembunyikan</button>
      )} */}
      </div>
    </li>
  )
}

export default StrategicProps