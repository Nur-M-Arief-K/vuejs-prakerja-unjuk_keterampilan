<template>
  <v-container fluid>
    <v-dialog v-model="isTambahKegiatanFormShown" persistent width="1024">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props"> + Tambahkan kegiatan </v-btn>
      </template>
      <formulir-tambah-kegiatan
        :closeForm="
          () => (isTambahKegiatanFormShown = !isTambahKegiatanFormShown)
        "
      />
    </v-dialog>
    <br>
    <br>
    <v-row align="stretch">
      <v-col cols="12" md="6">
        <papan-kategori-kegiatan
          judulKategori="Keinginan"
          kategoriKegiatan="Keinginan"
          :daftarKegiatan="daftarKeinginan"
        />
      </v-col>
      <v-col cols="12" md="6">
        <papan-kategori-kegiatan
          judulKategori="Berjalan"
          kategoriKegiatan="Berjalan"
          :daftarKegiatan="daftarBerjalan"
        />
      </v-col>
      <v-col cols="12" md="6">
        <papan-kategori-kegiatan
          judulKategori="Selesai"
          kategoriKegiatan="Selesai"
          :daftarKegiatan="daftarSelesai"
        />
      </v-col>
      <v-col cols="12" md="6">
        <papan-kategori-kegiatan
          judulKategori="Ditunda"
          kategoriKegiatan="Ditunda"
          :daftarKegiatan="daftarDitunda"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import PapanKategoriKegiatan from "@/components/PapanKategoriKegiatan.vue";
import FormulirTambahKegiatan from "@/components/FormulirTambahKegiatan.vue";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const isTambahKegiatanFormShown = ref(false);

const daftarKeinginan = computed(() =>
  store.getters.getDaftarKegiatan("Keinginan")
);
const daftarBerjalan = computed(() =>
  store.getters.getDaftarKegiatan("Berjalan")
);
const daftarSelesai = computed(() =>
  store.getters.getDaftarKegiatan("Selesai")
);
const daftarDitunda = computed(() =>
  store.getters.getDaftarKegiatan("Ditunda")
);
</script>
