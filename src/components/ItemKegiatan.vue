<template>
  <v-list-group>
    <template v-slot:activator="{ props }">
      <v-list-item v-bind="props" title="Judul Kegiatan"></v-list-item>
    </template>

    <v-list-item>
      <v-btn v-if="kategoriKegiatan != 'arsip'" size="x-small" text="Arsipkan" />
      <v-btn size="x-small" text="Detail" />
      <v-btn size="x-small">
        Pindahkan ke
        <v-menu activator="parent" location="end">
          <v-list>
            <v-list-item :value="0" v-if="kategoriKegiatan != 'keinginan'">
              <v-list-item-title>Keinginan</v-list-item-title>
            </v-list-item>
            <v-list-item :value="1" v-if="kategoriKegiatan != 'berjalan'">
              <v-list-item-title>Berjalan</v-list-item-title>
            </v-list-item>
            <v-list-item :value="2" v-if="kategoriKegiatan != 'selesai'">
              <v-list-item-title>Selesai</v-list-item-title>
            </v-list-item>
            <v-list-item :value="3" v-if="kategoriKegiatan != 'ditunda'">
              <v-list-item-title>Ditunda</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </v-list-item>

    <v-list-item
      v-for="([title], i) in admins"
      :key="i"
      :title="title"
      :value="title"
    ></v-list-item>
  </v-list-group>
</template>

<script setup>
const open = ["Users"];
const admins = [["[01/01/01] latest update"]];

defineProps({
  isArsip: Boolean,
  kategoriKegiatan: String,
})
</script>
