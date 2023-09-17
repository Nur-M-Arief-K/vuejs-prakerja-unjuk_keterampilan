<template>
  <v-app>
    <v-navigation-drawer v-model="isDrawerShown" temporary elevation="24">
      <v-list nav>
        <v-list-item :prepend-icon="mdiHome" title="Home" value="home" @click="navigateToHome()" />
        <v-list-item :prepend-icon="mdiFolder" title="Arsip" value="arsip" @click="navigateToArsip()" />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="isDrawerShown = !isDrawerShown.value" />
      <v-app-bar-title text="Kanban Board" @click="navigateToHome()" tag="a" />
    </v-app-bar>

    <br />
    <br />
    <br />
    <router-view />
  </v-app>
</template>

<script setup>
import { mdiHome, mdiFolder } from '@mdi/js';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const isDrawerShown = ref(false);
const navigateToHome = () => router.push('/')
const navigateToArsip = () => router.push('/arsip')
</script>

<style scoped>
.v-app-bar-title:hover {
  cursor: pointer;
}
</style>