<template>
  <v-card>
    <v-card-item>
      <v-card-title>{{ judulKategori }}</v-card-title>
    </v-card-item>
    <v-list>
      <item-kegiatan
        v-for="(kegiatan, indexKegiatan) in daftarKegiatan"
        :key="indexKegiatan"
        :kategoriKegiatan="kategoriKegiatan"
        :namaKegiatan="kegiatan.namaKegiatan"
        :logTerbaru="getLogTerbaru({ kategoriKegiatan, indexKegiatan })"
        :indexKegiatan="indexKegiatan"
      />
    </v-list>
  </v-card>
</template>

<script setup>
import ItemKegiatan from "./ItemKegiatan.vue";
import { useStore } from "vuex";
import moment from "moment";

const store = useStore();

defineProps({
  judulKategori: String,
  kategoriKegiatan: String,
  daftarKegiatan: Array,
});

const getLogTerbaru = ({ kategoriKegiatan, indexKegiatan }) => {
  const { judul, tanggal } = store.getters.getLogKemajuanTerbaru({
    kategoriKegiatan,
    indexKegiatan,
  });

  const formatTanggal = moment(tanggal).format("L");

  return `[TERBARU] ${formatTanggal} ${judul}`;
};
</script>
