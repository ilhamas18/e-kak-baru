'use client';
import React from "react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import TextInput from '@/components/common/text-input/input';
import { Button } from '@/components/common/button/button';
import Swal from 'sweetalert2'
import Image from "next/image";
import { useAuth } from "@/components/providers/Auth";
import Loading from "@/components/global/Loading/loading";
import { withFormik, FormikProps, FormikBag } from 'formik';
import * as Yup from 'yup';
import { setCookie, getCookie, getCookies } from "cookies-next";
import { fetchApi } from "@/pages/api/request";
import { shallowEqual, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { State } from "@/store/reducer";
import { AiFillDelete } from 'react-icons/ai';
import { BiSolidBookAdd } from 'react-icons/bi';

interface PropTypes {
  type: string;
  setOpenAdd: any;
}

const AddPohonForm = ({ type, setOpenAdd }: PropTypes) => {
  const router = useRouter();
  const [indikatorArr, setIndikatorArr] = useState<any>([]);
  const [indikator, setIndikator] = useState<string>('');
  const [openAddIndikator, setOpenAddIndikator] = useState<boolean>(false);

  const { storeYear } = useSelector((state: State) => ({
    storeYear: state.filter.storeYear
  }), shallowEqual)

  useEffect(() => {
    // setIndikatorArr(data.indikators);
  }, [])

  const handleInputChange = (index: any, newValue: any, type: string) => {
    const updatedIndicators = [...indikatorArr];

    if (type === 'indikator') {
      updatedIndicators[index].indikator = {
        ...updatedIndicators[index].indikator,
        indikator: newValue,
      };
      setIndikatorArr(updatedIndicators);
    } else if (type === 'target') {
      updatedIndicators[index].indikator = {
        ...updatedIndicators[index].indikator,
        indikator: newValue,
      };
    }

  };

  const handleClose = () => {
    // setIndikatorArr(data.indikators);
    setOpenAdd(false);
  }

  return (
    // <li>
    <div id={'addForm'} className='tree-child bg-[#94a3b8] w-[30em] flex flex-col gap-4 border border-white'>
      <div className='text-black bg-white w-full font-medium text-medium uppercase pt-2'> Form Tambah {type}</div>
      <div className="bg-white mt-4">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="w-full">
            <TextInput
              type="text"
              id={type}
              name={type}
              label={type}
              max={18}
            // value={data.strategi}
            />
          </div>
          <div className="w-full">
            <TextInput
              type="text"
              id='tahun'
              name='tahun'
              label="Tahun"
              max={18}
              value={storeYear.value}
              disabled
            />
          </div>
          {/* {indikatorArr.length != 0 && data.indikators.map((el: any, i: number) => (
            <> */}
          <div className="w-full">
            <TextInput
              type="text"
              id="indikator"
              name="indikator"
              label="Indikator"
            // touched={el.indikator.indikator}
            // errors={errors.indikator}
            // value={indikatorArr[i].indikator.indikator}
            // change={(e: any) => handleInputChange(i, e.target.value, 'indikator')}
            />
          </div>
          <div className="w-full">
            <TextInput
              type="text"
              id='target'
              name='target'
              label="Target"
            // value={indikatorArr[i].target}
            // change={(e: any) => handleInputChange(i, e.target.value, 'target')}
            />
          </div>
          <div className="w-full">
            <TextInput
              type="text"
              id="satuan"
              name="satuan"
              label="Satuan"
              max={18}
            // value={el.indikator.satuan}
            />
          </div>
          <div>
            <button className='px-2 py-1 rounded rounded-md border border-[#dc2626] text-[#dc2626] duration-500 flex items-center justify-center hover:shadow-2xl gap-2'>
              <AiFillDelete size={16} />
              <span>Hapus Indikator</span>
            </button>
          </div>
          {/* </>
          ))} */}
          <div>
            <button
              className={`${openAddIndikator ? 'hidden' : 'block'} px-2 py-1 rounded rounded-md bg-xl-base text-white duration-500 flex items-center justify-center hover:shadow-2xl gap-2`}
              onClick={() => setOpenAddIndikator(true)}
            >
              <BiSolidBookAdd size={16} />
              <span>Tambah Indikator</span>
            </button>
          </div>
          {openAddIndikator && (
            <>
              <div className="w-full">
                <TextInput
                  type="text"
                  id="indikator"
                  name="indikator"
                  label="Indikator"
                // value={el.indikator.satuan}
                />
              </div>
              <div className="w-full">
                <TextInput
                  type="text"
                  id="target"
                  name="target"
                  label="Target"
                // value={el.indikator.satuan}
                />
              </div>
              <div className="w-full">
                <TextInput
                  type="text"
                  id="satuan"
                  name="satuan"
                  label="Satuan"
                // value={el.indikator.satuan}
                />
              </div>
              <div>
                <button
                  className={`${openAddIndikator ? 'block' : 'hidden'} px-2 py-1 rounded rounded-md text-[#dc2626] font-medium duration-500 flex items-center justify-center hover:shadow-2xl gap-2`}
                  onClick={() => setOpenAddIndikator(false)}
                >
                  <span>Tutup</span>
                </button>
              </div>
            </>
          )}
          <div className="w-full">
            <TextInput
              type="text"
              id="keterangan"
              name="keterangan"
              label="Keterangan"
            // value={el.indikator.satuan}
            />
          </div>
        </div>
      </div>
      <div className="mt-3 w-full flex items-center justify-center gap-2">
        <Button
          type="secondary"
          variant="error"
          className="button-container w-full"
          // loading={loading}
          rounded
          onClick={handleClose}
        >
          <div className="flex justify-center items-center text-white font-Nunito">
            <span className="button-text">Batal</span>
          </div>
        </Button>
        <Button
          type="button"
          variant="xl"
          className="button-container w-full"
          rounded
        >
          <div className="flex justify-center items-center text-white font-Nunito">
            <span className="button-text">Simpan</span>
          </div>
        </Button>
      </div>
    </div>
    // </li>
  )
}

export default AddPohonForm;