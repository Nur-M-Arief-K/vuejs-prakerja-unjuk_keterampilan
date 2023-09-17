<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Tambah kegiatan</span>
    </v-card-title>
    <v-card-text>
      <v-text-field
        label="Nama Kegiatan"
      ></v-text-field>
      <v-text-field
        label="Deskripsi Kegiatan"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        variant="text"
        @click="batalkan()"
      >
        Batal
      </v-btn>
      <v-btn
        variant="text"
        @click="submit()"
      >
        Tambah
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  submit: Function,
  batalkan: Function
})
</script>
