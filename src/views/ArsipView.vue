<template>
  <v-row justify="center">
    <v-col cols="12" md="6">
      <papan-kategori-kegiatan
        judulKategori="Arsip"
        kategoriKegiatan="Arsip"
        :daftarKegiatan="daftarArsip"
      />
    </v-col>
  </v-row>
</template>

<script setup>
import PapanKategoriKegiatan from "@/components/PapanKategoriKegiatan.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const daftarArsip = computed(() =>
  store.getters.getDaftarKegiatan("Arsip")
);
</script>
