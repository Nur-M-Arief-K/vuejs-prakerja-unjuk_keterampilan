<template>
  <v-container v-if="typeof itemKegiatan != 'undefined'">
    <v-card
      :title="itemKegiatan.namaKegiatan"
      :text="itemKegiatan.deskripsiKegiatan"
    >
      <v-card-actions>
        <v-spacer />
        <v-dialog v-model="isEditKegiatanShown" persistent width="1024">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props"> Edit </v-btn>
          </template>
          <formulir-edit-kegiatan
            :kategoriKegiatan="kategoriKegiatan"
            :indexKegiatan="indexKegiatan"
            :closeForm="() => (isEditKegiatanShown = !isEditKegiatanShown)"
          />
        </v-dialog>
        <v-btn @click="hapusItemKegiatanHandler()">Hapus kegiatan</v-btn>
      </v-card-actions>
    </v-card>
    <br>
    <br>
    <v-spacer />
    <v-dialog v-model="isTambahLogShown" persistent width="1024">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props"> + log </v-btn>
      </template>
      <formulir-tambah-log
        :closeForm="() => (isTambahLogShown = !isTambahLogShown)"
        :kategoriKegiatan="kategoriKegiatan"
        :indexKegiatan="indexKegiatan"
      />
    </v-dialog>
    <br>
    <br>
    <v-expansion-panels v-if="itemKegiatan.logKemajuan.length > 0">
      <v-expansion-panel
        v-for="(log, indexLog) in itemKegiatan.logKemajuan"
        :key="indexLog"
      >
        <v-expansion-panel-title>
          <p>{{`[${formatTanggal(log.tanggal)}] ${log.judul}`}}</p>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <p>{{ log.deskripsi }}</p>
          <div>
            <v-spacer />
            <v-dialog v-model="isEditLogFormShown" persistent width="1024">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="float-right">Edit</v-btn>
              </template>
              <formulir-edit-log
                :closeForm="() => (isEditLogFormShown = !isEditLogFormShown)"
                :kategoriKegiatan="kategoriKegiatan"
                :indexKegiatan="indexKegiatan"
                :indexLog="indexLog"
              />
            </v-dialog>
            <v-btn
              class="float-right"
              @click="hapusLogItemKegiatanHandler({ indexLog })"
              >Delete</v-btn
            >
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup>
import { watch, computed, ref, onMounted, onUpdated } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import FormulirEditKegiatan from "@/components/FormulirEditKegiatan.vue";
import FormulirTambahLog from "@/components/FormulirTambahLog.vue";
import FormulirEditLog from "@/components/FormulirEditLog.vue";
import moment from "moment";

const route = useRoute();
const router = useRouter();
const store = useStore();

const isEditKegiatanShown = ref(false);
const isTambahLogShown = ref(false);
const isEditLogFormShown = ref(false);

let kategoriKegiatan = computed(() => route.params.kategoriKegiatan);
let indexKegiatan = computed(() => route.params.indexKegiatan);

const itemKegiatan = computed(() =>
  store.getters.getItemKegiatan({
    kategoriKegiatan: route.params.kategoriKegiatan,
    indexKegiatan: route.params.indexKegiatan,
  })
);

onMounted(() => {
  !itemKegiatan && router.push({ path: "/"})
})

onUpdated(() => {
  !itemKegiatan.value && router.push({ path: "/"})
})

const hapusItemKegiatanHandler = () => {
  store.commit("hapusItemKegiatan", {
    kategoriKegiatan: kategoriKegiatan.value,
    indexKegiatan: indexKegiatan.value,
  });
  router.push({ path: "/"} )
};

const hapusLogItemKegiatanHandler = ({ indexLog }) => {
  store.commit("hapusLogItemKegiatan", {
    kategoriKegiatan: kategoriKegiatan.value,
    indexKegiatan: indexKegiatan.value,
    indexLog,
  });
};

const formatTanggal = (tanggal) => moment(tanggal).format("L");
</script>
