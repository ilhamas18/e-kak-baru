import axios from 'axios';

export const fetchPokinOPD = async (payload: any) => {
  const resp = await axios({
    method: 'post',
    url: 'https://kak.madiunkota.go.id/api/pohon_kinerja/pohon_kinerja_opd.json',
    data: {
      kode_opd: payload.kode_opd,
      tahun: payload.tahun
    },
    headers: {}
  })

  return resp;
}