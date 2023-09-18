<template>
  <v-app>
    <v-navigation-drawer v-model="isSideNavShown" temporary elevation="24">
      <v-list nav>
        <v-list-item :prepend-icon="mdiHome" title="Home" value="home" @click="naviateToHomeHandler()" />
        <v-list-item :prepend-icon="mdiFolder" title="Arsip" value="arsip" @click="navigateToArsipHandler()" />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="isSideNavShown = !isSideNavShown" />
      <v-app-bar-title text="Kanban Board" @click="naviateToHomeHandler()" tag="a" />
    </v-app-bar>
    <br />
    <br />
    <br />
    <router-view />
  </v-app>
</template>

<script setup>
import { mdiHome, mdiFolder } from '@mdi/js'; //digunakan di template
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const isSideNavShown = ref(false);
const naviateToHomeHandler = () => router.push('/')
const navigateToArsipHandler = () => router.push('/arsip')
</script>

<style scoped>
.v-app-bar-title:hover {
  cursor: pointer;
}
</style>