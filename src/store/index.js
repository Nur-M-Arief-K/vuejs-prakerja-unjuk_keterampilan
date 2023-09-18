import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    daftarKeinginan: [],
    daftarBerjalan: [],
    daftarSelesai: [],
    daftarDitunda: [],
    daftarArsip: [],
  },
  getters: {
    getDaftarKegiatan: (state) => (kategoriKegiatan) => state[`daftar${kategoriKegiatan}`],
    getItemKegiatan: (state) => ({ kategoriKegiatan, indexKegiatan }) => {
      if(Array.isArray(state[`daftar${kategoriKegiatan}`])) {
        return state[`daftar${kategoriKegiatan}`][indexKegiatan]
      } else {
        return undefined
      }
    },
    getLogKemajuanTerbaru: (_, getters) => ({ kategoriKegiatan, indexKegiatan }) => getters.getItemKegiatan({ kategoriKegiatan, indexKegiatan }).logKemajuan.slice(-1)[0]
  },
  mutations: {
    tambahItemKegiatan(state, { kategoriKegiatan, itemKegiatan }) {
      state[`daftar${kategoriKegiatan}`].push(itemKegiatan);
    },
    hapusItemKegiatan(state, { kategoriKegiatan, indexKegiatan }) {
      state[`daftar${kategoriKegiatan}`].splice(indexKegiatan, 1);
    },
    pindahItemKegiatan(state, { pindahDariKategoriKegiatan, indexKegiatan, pindahKeKategoriKegiatan }) {
      const itemKegiatanYangDipindahkan = state[`daftar${pindahDariKategoriKegiatan}`].splice(indexKegiatan, 1)[0];
      state[`daftar${pindahKeKategoriKegiatan}`].push(itemKegiatanYangDipindahkan);
    },
    perbaruiItemKegiatan(state, { kategoriKegiatan, indexKegiatan, dataBaruItemKegiatan }) {
      const copyItemKegiatanLama = state[`daftar${kategoriKegiatan}`][indexKegiatan];
      state[`daftar${kategoriKegiatan}`][indexKegiatan] = { ...copyItemKegiatanLama, ...dataBaruItemKegiatan };
    },
    tambahLogItemKegiatan(state, { kategoriKegiatan, indexKegiatan, logItemKegiatanBaru }) {
      state[`daftar${kategoriKegiatan}`][indexKegiatan].logKemajuan.push(logItemKegiatanBaru);
    },
    hapusLogItemKegiatan(state, { kategoriKegiatan, indexKegiatan, indexLog }) {
      state[`daftar${kategoriKegiatan}`][indexKegiatan].logKemajuan.splice(indexLog, 1);
    },
    perbaruiLogItemKegiatan(state, { kategoriKegiatan, indexKegiatan, indexLog, logItemKegiatanBaru }) {
      const copyLogItemLama = state[`daftar${kategoriKegiatan}`][indexKegiatan].logKemajuan[indexLog];
      const updateLogItem = { ...copyLogItemLama, ...logItemKegiatanBaru };
      state[`daftar${kategoriKegiatan}`][indexKegiatan].logKemajuan[indexLog] = updateLogItem;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
