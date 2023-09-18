<template>
  <v-list-group>
    <template v-slot:activator="{ props }">
      <v-list-item v-bind="props" :title="namaKegiatan"></v-list-item>
    </template>

    <v-list-item>
      <v-btn
        v-if="kategoriKegiatan != 'Arsip'"
        size="x-small"
        text="Arsipkan"
        @click="
          pindahItemKegiatanHandler(kategoriKegiatan, indexKegiatan, 'Arsip')
        "
      />
      <v-btn
        size="x-small"
        text="Detail"
        @click="
          navigasiKeDetailItemKegiatanHandler(kategoriKegiatan, indexKegiatan)
        "
      />
      <v-btn size="x-small">
        Pindahkan ke
        <v-menu activator="parent" location="end">
          <v-list>
            <v-list-item
              :value="0"
              v-if="kategoriKegiatan != 'Keinginan'"
              @click="
                pindahItemKegiatanHandler(
                  kategoriKegiatan,
                  indexKegiatan,
                  'Keinginan'
                )
              "
            >
              <v-list-item-title>Keinginan</v-list-item-title>
            </v-list-item>
            <v-list-item
              :value="1"
              v-if="kategoriKegiatan != 'Berjalan'"
              @click="
                pindahItemKegiatanHandler(
                  kategoriKegiatan,
                  indexKegiatan,
                  'Berjalan'
                )
              "
            >
              <v-list-item-title>Berjalan</v-list-item-title>
            </v-list-item>
            <v-list-item
              :value="2"
              v-if="kategoriKegiatan != 'Selesai'"
              @click="
                pindahItemKegiatanHandler(
                  kategoriKegiatan,
                  indexKegiatan,
                  'Selesai'
                )
              "
            >
              <v-list-item-title>Selesai</v-list-item-title>
            </v-list-item>
            <v-list-item
              :value="3"
              v-if="kategoriKegiatan != 'Ditunda'"
              @click="
                pindahItemKegiatanHandler(
                  kategoriKegiatan,
                  indexKegiatan,
                  'Ditunda'
                )
              "
            >
              <v-list-item-title>Ditunda</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </v-list-item>
    <v-list-item :title="logTerbaru" :value="logTerbaru"></v-list-item>
  </v-list-group>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

defineProps({
  kategoriKegiatan: String,
  namaKegiatan: String,
  logTerbaru: String,
  indexKegiatan: Number,
});

const pindahItemKegiatanHandler = (
  pindahDariKategoriKegiatan,
  indexKegiatan,
  pindahKeKategoriKegiatan
) => {
  store.commit("pindahItemKegiatan", {
    pindahDariKategoriKegiatan,
    indexKegiatan,
    pindahKeKategoriKegiatan,
  });
};

const navigasiKeDetailItemKegiatanHandler = (
  kategoriKegiatan,
  indexKegiatan
) => {
  router.push({ path: `/${kategoriKegiatan}/${indexKegiatan}` });
};
</script>
