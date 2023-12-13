'use client';
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TextInput from '@/components/common/text-input/input';
import { Button } from '@/components/common/button/button';
import Swal from 'sweetalert2'
import { withFormik, FormikProps, FormikBag } from 'formik';
import * as Yup from 'yup';
import { fetchApi } from "@/pages/api/request";
import { IoIosAddCircle } from "react-icons/io";
import XAddIndikatorSubTematik from "./x-modal/XAddIndikator";

interface FormValues {
  idTematik: number;
  subTematik: string;
  indikator: any;
  keterangan: string;
}

interface OtherProps {
  title?: string;
  ref?: any;
  loading?: boolean;
}

interface MyFormProps extends OtherProps {
  handleSubmit: (
    values: FormValues,
    formikBag: FormikBag<object, FormValues>
  ) => void;
}

const FormField = (props: OtherProps & FormikProps<FormValues>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isValid,
    dirty,
    ref,
    loading
  } = props;
  const router = useRouter();
  const [dataTematik, setTematik] = useState<any>([]);
  const [openAddIndikator, setOpenAddIndikator] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    getTematik();
  }, []);

  const getTematik = async () => {
    const response = await fetchApi({
      url: '/tematik/getAllTematik',
      method: 'get',
      type: 'auth'
    })

    if (!response.success) setIsError(true);
    else {
      const { data } = response.data;
      let temp: any = [];
      data.forEach((el: any) => {
        temp.push({
          label: el.tematik,
          value: el.id
        })
      })
      setTematik(temp);
      setIsError(false);
    }
  }

  const handleDeleteIndikator = (e: any, indikator: string) => {
    e.preventDefault();
    const newArray = values.indikator.filter(
      (item: any) => item.indikator !== indikator
    );
    handleChange({
      target: { name: "indikator", value: newArray },
    });
  }

  const handleBack = () => router.push('/rencana-kota/sub-tematik');

  return (
    <div className="form-container relative bg-white">
      <div className="form-wrapper-general">
        <div className="px-8 flex flex-col gap-2 space-y-4 py-6">
          <div className="relative flex w-full items-center">
            <div className="text-title-xsm2 w-[12%] lg:block hidden">Tematik</div>
            <div className="w-[3%] lg:block hidden">:</div>
            <div className="lg:w-[85%] w-full">
              <TextInput
                type="dropdown"
                id="tematik"
                name="tematik"
                label="Nama Tematik"
                placeholder="Ketik dan Pilih Tematik"
                options={dataTematik}
                handleBlur={handleBlur}
                setValueSelected={handleChange}
                change={(selectedOption: any) => {
                  handleChange({
                    target: { name: 'idTematik', value: selectedOption.value }
                  })
                }}
              />
            </div>
          </div>
        </div>
        {values.idTematik != 0 && (
          <>
            <div className="px-8 flex flex-col gap-2 space-y-4 py-2">
              <div className="relative flex w-full items-center">
                <div className="text-title-xsm2 w-[12%] lg:block hidden">Sub Tematik</div>
                <div className="w-[3%] lg:block hidden">:</div>
                <div className="lg:w-[85%] w-full">
                  <TextInput
                    type="text"
                    id="subTematik"
                    name="subTematik"
                    label="Sub Tematik"
                    touched={touched.subTematik}
                    change={handleChange}
                    value={values.subTematik}
                    errors={errors.subTematik}
                    handleBlur={handleBlur}
                  />
                </div>
              </div>
            </div>
            <div className="px-8 flex flex-col gap-2 space-y-4 py-3">
              <div className="relative flex w-full items-center">
                <div className="text-title-xsm2 w-[12%] lg:block hidden">Keterangan</div>
                <div className="w-[3%] lg:block hidden">:</div>
                <div className="lg:w-[85%] w-full">
                  <TextInput
                    type="text-area"
                    id="keterangan"
                    name="keterangan"
                    label="Keterangan"
                    touched={touched.keterangan}
                    change={handleChange}
                    value={values.keterangan}
                    errors={errors.keterangan}
                    handleBlur={handleBlur}
                  />
                </div>
              </div>
            </div>
            <div className="button mt-3 flex items-center justify-center mb-6">
              <button
                className="flex gap-3 items-center justify-center"
                onClick={() => setOpenAddIndikator(true)}
              >
                <div><IoIosAddCircle size={24} /></div>
                <div className="text-title-xsm2">Tambah Indikator</div>
              </button>
            </div>
            <div className="flex flex-col gap-2 border-t-6 border-light-gray">
              {values.indikator.length != 0 && values.indikator.map((el: any, i: number) => (
                <div key={i} className="shadow-xl py-6 border border-[#cbd5e1] w-full px-8 flex flex-col gap-4 mt-6">
                  <div className="relative flex w-full items-center">
                    <div className="text-title-xsm2 w-[12%] lg:block hidden">Satuan</div>
                    <div className="w-[3%] lg:block hidden">:</div>
                    <div className="flex flex-col gap-1 w-full lg:w-[85%]">
                      <TextInput
                        type="text"
                        id="tahun"
                        name="tahun"
                        label="Tahun"
                        change={(e: any) => {
                          const temp = [...values.indikator];
                          temp[i].tahun = e.target.value;
                          handleChange({
                            target: { name: 'indikator', value: temp }
                          })
                        }}
                        errors={el.tahun === ''}
                        value={el.tahun}
                        handleBlur={handleBlur}
                      />
                      {el.indikator === '' && <div className="text-danger text-title-ss">Satuan tidak boleh kosong !</div>}
                    </div>
                  </div>
                  <div className="relative flex w-full items-center">
                    <div className="text-title-xsm2 w-[12%] lg:block hidden">Indikator</div>
                    <div className="w-[3%] lg:block hidden">:</div>
                    <div className="flex flex-col gap-1 w-full lg:w-[85%]">
                      <TextInput
                        type="text"
                        id="indikator"
                        name="indikator"
                        label="Indikator"
                        change={(e: any) => {
                          const temp = [...values.indikator];
                          temp[i].indikator = e.target.value;
                          handleChange({
                            target: { name: 'indikator', value: temp }
                          })
                        }}
                        errors={el.indikator === ''}
                        value={el.indikator}
                        handleBlur={handleBlur}
                      />
                      {el.indikator === '' && <div className="text-danger text-title-ss">Indikator tidak boleh kosong !</div>}
                    </div>
                  </div>
                  <div className="relative flex w-full items-center">
                    <div className="text-title-xsm2 w-[12%] lg:block hidden">Target</div>
                    <div className="w-[3%] lg:block hidden">:</div>
                    <div className="flex flex-col gap-1 w-full lg:w-[85%]">
                      <TextInput
                        type="text"
                        id="target"
                        name="target"
                        label="Target"
                        change={(e: any) => {
                          const temp = [...values.indikator];
                          temp[i].target = e.target.value;
                          handleChange({
                            target: { name: 'indikator', value: temp }
                          })
                        }}
                        errors={el.target === ''}
                        value={el.target}
                        handleBlur={handleBlur}
                      />
                      {el.indikator === '' && <div className="text-danger text-title-ss">Target tidak boleh kosong !</div>}
                    </div>
                  </div>
                  <div className="relative flex w-full items-center">
                    <div className="text-title-xsm2 w-[12%] lg:block hidden">Satuan</div>
                    <div className="w-[3%] lg:block hidden">:</div>
                    <div className="flex flex-col gap-1 w-full lg:w-[85%]">
                      <TextInput
                        type="text"
                        id="satuan"
                        name="satuan"
                        label="Indikator"
                        change={(e: any) => {
                          const temp = [...values.indikator];
                          temp[i].satuan = e.target.value;
                          handleChange({
                            target: { name: 'indikator', value: temp }
                          })
                        }}
                        errors={el.satuan === ''}
                        value={el.satuan}
                        handleBlur={handleBlur}
                      />
                      {el.indikator === '' && <div className="text-danger text-title-ss">Satuan tidak boleh kosong !</div>}
                    </div>
                  </div>
                  <button
                    className="mt-4 text-white text-title-xsm2 text-center text-medium font-medium bg-danger py-1"
                    onClick={(e) => handleDeleteIndikator(e, el.indikator)}
                  >HAPUS
                  </button>
                </div>
              ))}
            </div>
            <div className="flex w-full justify-between mt-10 mb-4 pb-4 px-8">
              <div>
                <Button
                  type="secondary"
                  variant="xl"
                  className="button-container px-10"
                  rounded
                  onClick={handleBack}
                >
                  <div className="flex justify-center items-center text-xl-base font-Nunito">
                    <span className="button-text">Batal</span>
                  </div>
                </Button>
              </div>
              <div>
                <Button
                  type="button"
                  variant="xl"
                  className="button-container px-10"
                  rounded
                  loading={loading}
                  disabled={values.indikator.length == 0 ? true : false}
                  onClick={handleSubmit}
                >
                  <div className="flex justify-center items-center text-white font-Nunito">
                    <span className="button-text">Tambah</span>
                  </div>
                </Button>
              </div>
            </div>
          </>
        )}
      </div>

      <XAddIndikatorSubTematik
        openAddIndikator={openAddIndikator}
        setOpenAddIndikator={setOpenAddIndikator}
        handleChange={handleChange}
        values={values}
      />
    </div>
  )
}

function CreateForm({ handleSubmit, ...otherProps }: MyFormProps) {
  const FormWithFormik = withFormik({
    mapPropsToValues: () => ({
      idTematik: 0,
      subTematik: "",
      indikator: [],
      keterangan: ""
    }),
    validationSchema: Yup.object().shape({
      subTematik: Yup.string()
        .required("Tematik tidak boleh kosong !"),
      indikator: Yup.array().of(
        Yup.object().shape({
          indikator: Yup.string().required('Indikator is required'),
          target: Yup.string().required('Target perhitungan is required'),
          satuan: Yup.string().required('Satuan data is required'),
          tahun: Yup.string().required('Tahun is required')
        })
      ),
      keterangan: Yup.string()
        .required("keterangan tidak boleh kosong !"),
    }),
    handleSubmit
  })(FormField)

  return <FormWithFormik {...otherProps} />
}

const AddSubTematikForm: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (values: FormValues) => {
    setLoading(true);
    const payload = {
      sub_tematik: values.subTematik,
      keterangan: values.keterangan,
      id_tematik: values.idTematik,
      indikator: values.indikator
    }
    const response = await fetchApi({
      url: '/tematik/addSubTematik',
      method: 'post',
      type: 'auth',
      body: payload
    })

    if (!response.success) {
      if (response.data.code == 400) {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Periksa kembali data Sub Tematik!",
        });
      } else if (response.data.code == 500) {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Koneksi bermasalah!",
        });
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Berhasil menambahkan Sub Tematik",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/rencana-kota/sub-tematik");
    }
  }

  return (
    <CreateForm handleSubmit={handleSubmit} loading={loading} />
  )
}

export default AddSubTematikForm