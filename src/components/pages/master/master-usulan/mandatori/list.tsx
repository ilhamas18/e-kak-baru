import * as React from 'react';
import { useState, useEffect } from 'react';
import DataTable from '@/components/common/table/dataTable';

interface PropTypes {
  data: any;
}

const DataMandatori = ({ data }: PropTypes) => {
  const columns = [
    {
      id: 'id',
      label: 'No',
      width: 20,
      flex: 1,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      align: 'center'
    },
    {
      id: 'tahun',
      label: 'Tahun',
      width: 180,
      // flex: 1,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      align: 'center'
    },
    {
      id: 'usulan',
      label: 'Usulan',
      width: 220,
      // flex: 1,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      align: 'center'
    },
    {
      id: 'peraturan',
      label: 'Peraturan Terkait',
      width: 220,
      // flex: 1,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      align: 'center'
    },
    {
      id: 'uraian',
      label: 'Uraian',
      width: 220,
      // flex: 1,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      align: 'center'
    },
    {
      id: 'pengusul',
      label: 'Pengusul',
      width: 220,
      // flex: 1,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      align: 'center'
    },
    {
      id: 'opd',
      label: 'OPD',
      width: 220,
      // flex: 1,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      align: 'center'
    },
  ];

  const handleEdit = () => { }

  function buttonApproved() {
    return (
      <div className='bg-xl-base'>Disetujui</div>
    )
  }

  function buttonWaiting() {
    return (
      <div className='bg-warning'>Setujui</div>
    )
  }

  const button = data.map((el: any) => {
    if (el.status === 'Approved') {
      return (
        <div className='bg-xl-base'>Disetujui</div>
      )
    } else if (el.status === 'Waiting') {
      return (
        <div className='bg-warning'>Setujui</div>
      )
    }
  });

  const opt = {
    row: [
      {
        icon: button
      },
    ],
    name: 'Status'
  }

  return (
    <div className='bg-white dark:bg-meta-4 dark:text-white'>
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."></div>

      <DataTable
        columns={columns}
        data={data}
        onClick={handleEdit}
        opt={opt}
      />
    </div>
  )
}

export default DataMandatori;