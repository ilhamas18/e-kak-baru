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
import { useDispatch } from "react-redux";

interface FormValues {
  strategi: string;
  indikator: any;
}

interface OtherProps {
  title?: string;
  ref?: any;
  data?: any;
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
    ref
  } = props;
  console.log(values.indikator);

  return (
    <div className="bg-white">
      {values.indikator.length && values.indikator.map((el: any, i: number) => (
        <>
          <div className="relative mb-6 mt-6" data-te-input-wrapper-init>
            <TextInput
              type="text"
              id={`indikator[${i}].indikator`}
              name={`indikator[${i}].indikator`}
              label="Indikator"
              max={18}
              touched={el.indikator.indikator}
              errors={errors.indikator}
              value={el.indikator.indikator}
              change={(selectedOption: any) => {
                handleChange({
                  target: { name: `indikator[${i}].indikator`, value: selectedOption },
                });
              }}
            />
          </div>
        </>
      ))}
    </div>
  )
}

function CreateForm({ handleSubmit, data }: MyFormProps) {
  const FormWithFormik = withFormik({
    mapPropsToValues: () => ({
      strategi: data.strategi !== "" ? data.strategi : "",
      indikator: data.indikators.length != 0 ? data.indikators : [{
        indikator: "",
        target: "",
        satuan: ""
      }],
    }),
    validationSchema: Yup.object().shape({
      strategi: Yup.string()
        .required("Bagian dibutuhkan"),
      indikator: Yup.array().of(
        Yup.object().shape({
          indikator: Yup.string().required("Indikator tidak boleh kosong"),
          target: Yup.string().required("Target tidak boleh kosong"),
          satuan: Yup.string().required("Satuan tidak boleh kosong"),
        })
      )
    }),
    handleSubmit
  })(FormField)

  return <FormWithFormik />
}

interface PropTypes {
  type: string;
  data: any;
}

const EditPohonForm: any = ({ type, data }: PropTypes) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (values: FormValues) => {

  }

  return (
    <React.Fragment>
      <div>
        <div className='text-black bg-white w-full font-medium text-medium uppercase'>EDIT {type}</div>
      </div>
      <CreateForm handleSubmit={handleSubmit} data={data} />
    </React.Fragment>
  )
}

export default EditPohonForm;