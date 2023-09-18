<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Edit kegiatan</span>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="editKegiatanHandler()">
        <v-text-field label="Nama Kegiatan" v-model="namaKegiatan" />
        <v-text-field label="Deskripsi Kegiatan" v-model="deskripsiKegiatan" />
        <div class="d-flex justify-end">
          <v-btn v-if="closeForm != null" variant="text" @click="closeForm()">
            Batal
          </v-btn>
          <v-btn type="submit" variant="text"> Edit </v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  closeForm: {
    type: Function,
    default: null,
  },
  kategoriKegiatan: String,
  indexKegiatan: Number | String,
});

const namaKegiatan = ref("");
const deskripsiKegiatan = ref("");

const editKegiatanHandler = () => {
  if (namaKegiatan.value.trim() != "") {
    store.commit("perbaruiItemKegiatan", {
      kategoriKegiatan: props.kategoriKegiatan,
      indexKegiatan: props.indexKegiatan,
      dataBaruItemKegiatan: {
        namaKegiatan: namaKegiatan.value.trim(),
        deskripsiKegiatan: deskripsiKegiatan.value.trim(),
      },
    });
    props.closeForm != null && props.closeForm();
  }
};
</script>
