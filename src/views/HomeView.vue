<template>
  <v-container fluid>
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
        >
          + Tambahkan kegiatan
        </v-btn>
      </template>
      <formulir-tambah-kegiatan :submit="() => dialog = false" :batalkan="() => dialog = false" />
    </v-dialog>
    
    <v-row align="stretch">
      <v-col cols="12" md="6">
        <papan-kategori-kegiatan title="Keinginan" kategoriKegiatan="keinginan" />
      </v-col>
      <v-col cols="12" md="6">
        <papan-kategori-kegiatan title="Berjalan" kategoriKegiatan="berjalan" />
      </v-col>
      <v-col cols="12" md="6">
        <papan-kategori-kegiatan title="Selesai" kategoriKegiatan="selesai" />
      </v-col>
      <v-col cols="12" md="6">
        <papan-kategori-kegiatan title="Ditunda" kategoriKegiatan="ditunda" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// @ is an alias to /src
import PapanKategoriKegiatan from '@/components/PapanKategoriKegiatan.vue';
import FormulirTambahKegiatan from '@/components/FormulirTambahKegiatan.vue';
import { ref } from 'vue'

const dialog= ref(false)

</script>
