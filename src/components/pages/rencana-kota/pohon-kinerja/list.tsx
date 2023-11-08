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
import { FaRegClone } from 'react-icons/fa'

interface PropTypes {
  data: any;
}

const DataPohonKinerjaKota = ({ data }: PropTypes) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (e: any, id: number) => {
    e.preventDefault()
    console.log(id)
  }

  return (
    <div className='dark:bg-meta-4 dark:text-white'>
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."></div>

      <div className="tree bg-white min-w-screen w-[100em] overflow-x-auto">
        <ul>
          <li>
            <div className='bg-white flex flex-col gap-4 border border-black'>
              <div className='border border-black'>
                <div className='text-black font-medium text-medium'>TEMATIK KOTA</div>
                <button className='mt-4 w-full bg-black text-white flex gap-2 items-center justify-center rounded-md'>
                  <div><FaRegClone size={16} /></div>
                  <div>CLONE</div>
                </button>
              </div>
              <div className='border border-light-gray'>

              </div>
            </div>
            <ul>
              <li>
                <div className='bg-white flex flex-col gap-4 border border-black'>
                  <div className='border border-black'>
                    <div className='text-black font-medium text-medium'>SUB-TEMATIK KOTA</div>
                    <button className='mt-4 w-full bg-black text-white flex gap-2 items-center justify-center rounded-md'>
                      <div><FaRegClone size={16} /></div>
                      <div>CLONE</div>
                    </button>
                  </div>
                  <div className='border border-light-gray'>
                  </div>
                </div>
              </li>
              <li>
                <div className='bg-white flex flex-col gap-4 border border-black'>
                  <div className='border border-black'>
                    <div className='text-black font-medium text-medium'>SUB-TEMATIK KOTA</div>
                    <button className='mt-4 w-full bg-black text-white flex gap-2 items-center justify-center rounded-md'>
                      <div><FaRegClone size={16} /></div>
                      <div>CLONE</div>
                    </button>
                  </div>
                  <div className='border border-light-gray'>
                  </div>
                </div>
                <ul>
                  <li>
                    <div className='bg-white flex flex-col gap-4 border border-black'>
                      <div className='border border-black'>
                        <div className='text-black font-medium text-medium'>STRATEGIC</div>
                        <button className='mt-4 w-full bg-black text-white flex gap-2 items-center justify-center rounded-md'>
                          <div><FaRegClone size={16} /></div>
                          <div>CLONE</div>
                        </button>
                      </div>
                      <div className='border border-light-gray'>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='bg-white flex flex-col gap-4 border border-black'>
                      <div className='border border-black'>
                        <div className='text-black font-medium text-medium'>STRATEGIC</div>
                        <button className='mt-4 w-full bg-black text-white flex gap-2 items-center justify-center rounded-md'>
                          <div><FaRegClone size={16} /></div>
                          <div>CLONE</div>
                        </button>
                      </div>
                      <div className='border border-light-gray'>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <div>C 1</div>
                        <ul>
                          <li>
                            <div>D 1</div>

                          </li>
                        </ul>

                      </li>
                      <li>
                        <div>C 2</div>
                        <ul>
                          <li>
                            <div>D 2</div>

                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DataPohonKinerjaKota;