<template>
  <v-card>
    <v-card-item>
      <v-card-title>{{title}}</v-card-title>
    </v-card-item>
    <v-list>
      <item-kegiatan :kategoriKegiatan="kategoriKegiatan" />
      <item-kegiatan :kategoriKegiatan="kategoriKegiatan" />
      <item-kegiatan :kategoriKegiatan="kategoriKegiatan" />
      <item-kegiatan :kategoriKegiatan="kategoriKegiatan" />
      <item-kegiatan :kategoriKegiatan="kategoriKegiatan" />
    </v-list>
  </v-card>
</template>

<script setup>
import ItemKegiatan from './ItemKegiatan.vue'
defineProps({
  title: String,
  kategoriKegiatan: String,
})
</script>
