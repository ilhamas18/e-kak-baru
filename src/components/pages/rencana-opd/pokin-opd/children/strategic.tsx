import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import TacticalProps from './tactical';
import { TbBrandTorchain } from 'react-icons/tb';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import EditPohonForm from '../edit';
import { BiSolidAddToQueue } from 'react-icons/bi';
import AddPohonForm from '../add';

interface PropTypes {
  data: any;
  strategic: any;
  key: number;
  showAll: boolean;
}

const StrategicProps = ({ data, strategic, key }: PropTypes) => {
  const ref = useRef<HTMLDivElement>(null);
  const [filteredTactical, setFilteredTactical] = useState<any>([]);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [showTactical, setShowTactical] = useState<boolean>(false);
  const [addTactical, setAddTactical] = useState<boolean>(false);

  useEffect(() => {
    const filteredTacticalItems = data.tactical.filter((el: any) => el.parent == strategic.id);
    setFilteredTactical(filteredTacticalItems);
  }, []);

  const handleEditStrategic = (id: number) => {
    setOpenEdit(true);
    // const filtered = data.strategic.find((el: any) => el.id == id);
    // console.log(filtered, '<<<');

  }
  const handleOpenAddForm = (e: any) => {
    setAddTactical(true);
    setTimeout(() => {
      document.getElementById("addForm")!.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }, 600);
  }

  return (
    <li>
      <div className='tree-child bg-[#dc2626] w-[30em] flex flex-col gap-4 border border-white' key={key}>
        <div className={`${!openEdit ? 'show' : 'hidden'}`}>
          <div className='border border-white w-full'>
            <div className='text-white font-medium text-medium'>STRATEGIC</div>
          </div>
          <table className='flex flex-col border border-black text-black bg-white mt-4'>
            <tbody>
              <tr className='flex items-center border border-light-gray p-2'>
                <td className='w-[30%] text-left'>STRATEGI</td>
                <td className='w-[5%]'>:</td>
                <td className='w-[65%] text-left'>{strategic.strategi}</td>
              </tr>
              {showDetail && (
                <>
                  {strategic.indikators?.map((el2: any, i2: number) => (
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
                    <td className='w-[65%] text-left'>{strategic.keterangan}</td>
                  </tr>
                  <tr className='flex items-center border border-light-gray p-2'>
                    <td className='w-[30%] text-left text-title-ss2'>PERANGKAT DAERAH</td>
                    <td className='w-[5%]'>:</td>
                    <td className='w-[65%] text-left'>{strategic.perangkat_daerah.nama_opd}</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
          <div className='flex flex-col space-y-3 w-full'>
            <button className='px-4 py-1 rounded rounded-md border border-white text-white hover:bg-xl-base duration-500 mt-4 w-full' onClick={() => setShowDetail(!showDetail)}>
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
                <button
                  className='px-2 py-1 rounded rounded-md border border-[#f59e0b] text-[#f59e0b] duration-500 flex items-center justify-center hover:shadow-2xl gap-2'
                  onClick={() => setOpenEdit(!openEdit)}
                >
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
            {!showTactical ? (
              <button className='px-4 py-1 rounded rounded-md border border-white text-white w-full hover:bg-xl-base duration-500' onClick={() => setShowTactical(true)}>
                Show
              </button>
            ) : (
              <div className='flex gap-2'>
                <button className='px-4 py-1 rounded rounded-md border border-white text-white w-full hover:bg-xl-base duration-500' onClick={() => setShowTactical(false)}>
                  Hidden
                </button>
                <button
                  className='px-4 py-1 rounded rounded-md bg-xl-base text-white w-full hover:shadow-lg duration-500 flex gap-2 items-center justify-center'
                  onClick={() => handleOpenAddForm(ref)}
                >
                  <BiSolidAddToQueue size={18} />
                  Tactical
                </button>
              </div>
            )}
          </div>
        </div>
        <div className={`${openEdit ? 'show duration-500' : 'hidden'} duration-500`}>
          <EditPohonForm type="strategic" data={strategic} setOpenEdit={setOpenEdit} />
        </div>
      </div>
      {showTactical && (
        <ul>
          {filteredTactical.map((el: any, index: number) => (
            <TacticalProps data={data} tactical={el} key={index} />
          ))}
          {addTactical && (
            <li>
              <div id={'addForm'}>
                <AddPohonForm
                  type='Tactical'
                  setOpenAdd={setAddTactical}
                />
              </div>
            </li>
          )}
        </ul>
      )}
    </li>
  )
}

export default StrategicProps

