<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const section = ref('one')
const router = useRouter()
</script>

<template>
  <div class="q-pa-none">
    <q-layout view="lHh lpr lFf" container style="height: 100vh" class="shadow-2">
      <q-header elevated class="bg-blue">
        <q-toolbar class="q-ml-md">
          <img src="@/assets/images/bbva-logo.svg" class="bbva-logo" />
          <!-- Removemos el q-space y cambiamos align a left -->
          <q-tabs 
            v-model="section" 
            align="left" 
            class="gt-sm q-ml-md" 
            indicator-color="white"
          >
            <q-tab 
              name="gestion" 
              label="Gestión de Listas" 
              @click="router.push({name: 'gestion_licencias'})"
            />
            <q-tab 
              name="monitorización" 
              label="Monitorización" 
              @click="router.push({name: 'monitoring'})"
            />
          </q-tabs>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md row justify-center bg-grey">
          <div class="row justify-center col-12">
            <router-view></router-view>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;

  main {
    flex: 1;
    display: flex;
    place-items: initial;
  }
}
</style>

<style scoped lang="scss">
@import '@/assets/styles/utils.scss';

.bbva-logo {
  width: 85px;
  height: 26px;
  vertical-align: middle;
}

// Añadimos estilos para las tabs
.q-tabs {
  height: 100%;
  .q-tab {
    padding: 0 20px;
  }
}
</style>