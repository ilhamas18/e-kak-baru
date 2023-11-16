import axios from "axios";

export const fetchTujuanOPD = async (payload: any) => {
  const resp = await axios({
    method: 'post',
    url: 'https://kak.madiunkota.go.id/api/opd/tujuan_opd.json',
    data: {
      kode_opd: payload.kode_opd
    },
    headers: {}
  })

  return resp;
}