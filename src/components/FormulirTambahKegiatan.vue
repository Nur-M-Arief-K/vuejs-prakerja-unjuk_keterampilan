<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Tambah kegiatan</span>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="tambahItemKegiatanHandler()">
        <v-text-field label="Nama Kegiatan" v-model="namaKegiatan" />
        <v-text-field label="Deskripsi Kegiatan" v-model="deskripsiKegiatan" />
        <div class="d-flex justify-end">
          <v-btn v-if="closeForm != null" variant="text" @click="closeForm()">
            Batal
          </v-btn>
          <v-btn type="submit" variant="text"> Tambah </v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  closeForm: {
    type: Function,
    default: null,
  },
});

const namaKegiatan = ref("");
const deskripsiKegiatan = ref("");

const tambahItemKegiatanHandler = () => {
  if (namaKegiatan.value.trim() != "") {
    const logKemajuanPertama = buatLogKemajuanPertama();
    store.commit("tambahItemKegiatan", {
      kategoriKegiatan: "Keinginan",
      itemKegiatan: {
        namaKegiatan: namaKegiatan.value.trim(),
        deskripsiKegiatan: deskripsiKegiatan.value.trim(),
        logKemajuan: [logKemajuanPertama],
      },
    });
    props.closeForm != null && props.closeForm();
  }
};

const buatLogKemajuanPertama = () => ({
  tanggal: new Date(),
  judul: "Kegiatan dibuat",
  deskripsi: "",
});
</script>
