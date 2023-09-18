<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Tambah log</span>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="tambahLogHandler()">
        <v-text-field label="Judul" v-model="judulLog" />
        <v-text-field label="Deskripsi" v-model="deskripsiLog" />
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

const judulLog = ref("");
const deskripsiLog = ref("");
const props = defineProps({
  kategoriKegiatan: String | Number,
  indexKegiatan: String | Number,
  closeForm: {
    type: Function,
    default: null,
  },
});

const tambahLogHandler = () => {
  if (judulLog.value.trim() != "") {
    store.commit("tambahLogItemKegiatan", {
      kategoriKegiatan: props.kategoriKegiatan,
      indexKegiatan: props.indexKegiatan,
      logItemKegiatanBaru: {
        tanggal: new Date(),
        judul: judulLog.value.trim(),
        deskripsi: deskripsiLog.value.trim(),
      },
    });
    props.closeForm != null && props.closeForm();
  }
};
</script>