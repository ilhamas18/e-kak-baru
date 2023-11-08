import * as React from 'react';
import { useState, useEffect } from 'react';
import DataTable from '@/components/common/table/dataTable';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { BsFillTrashFill } from 'react-icons/bs';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { FaRegClone } from 'react-icons/fa';
import StrategicProps from './child/strategic';

interface PropTypes {
  data: any;
}

const DataPokinOPD = ({ data }: PropTypes) => {
  const buttonText = 'Detail'
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [pokinId, setPokinId] = useState<number>(0);

  const handleShowDetail = (val: boolean, id: number) => {
    console.log(val, 'current value')
    setShowDetail(true);
    console.log(val, 'after ed value')
    setPokinId(id);
  }


  return (
    <div className='dark:bg-meta-4 dark:text-white w-[1000em] flex flex-col overflow-x-scroll scroll scroll-smooth'>
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."></div>

      <div className='bg-white relative'>
        <div data-te-infinite-scroll-init
          data-te-infinite-direction="x"
          className="tree overflow-auto"
        >
          <ul>
            <li>
              <div className='bg-white flex w-[30em] flex-col gap-4 border border-black'>
                <div className='border border-black'>
                  <div className='text-black font-medium text-medium'>POHON KINERJA OPD</div> <button className='mt-4 w-full bg-black text-white flex gap-2 items-center justify-center rounded-md'>
                    <div><FaRegClone size={16} /></div>
                    <div>CLONE</div>
                  </button>
                </div>
                {/* <table className='flex flex-col'>
                  <tr className='flex'>
                    <td className='w-[30%] border border-black'>NAMA OPD</td>
                    <td className='w-[70%] border border-black'>{data.data.nama_opd}</td>
                  </tr>
                  <tr className='flex'>
                    <td className='w-[30%] border border-black'>TAHUN</td>
                    <td className='w-[70%] border border-black'>{data.data.tahun}</td>
                  </tr>
                </table> */}
                <table>
                  <tbody className='text-title-ss'>
                    <tr className='flex'>
                      <td className='w-[30%] border border-light-gray'>NAMA OPD</td>
                      <td className='w-[70%] border border-light-gray'>{data.data.nama_opd}</td>
                    </tr>
                    <tr className='flex'>
                      <td className='w-[30%] border border-light-gray'>TAHUN</td>
                      <td className='w-[70%] border border-light-gray'>{data.data.tahun}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul>
                {data?.strategic?.map((el: any, index: number) => (

                  <StrategicProps data={el} />
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DataPokinOPD;