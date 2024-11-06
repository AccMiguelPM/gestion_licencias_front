<script setup>
import { ref } from 'vue'

const licenses = ref([ // datos de ejemplo 
  {
    email: 'aaaaaa@bbva.com',
    idBBVA: 'E002629',
    status: 'En curso',
    country: 'España',
    domain: 'GIAM',
    lastModified: '2024-10-10',
    checkbox1: true,
    checkbox2: true,
    checkbox3: false,
    checkbox4: false,
  },
  {
    email: 'bbbbb@bbva.com',
    idBBVA: '******',
    status: 'Sin iniciar',
    country: 'México',
    domain: 'Security',
    lastModified: '2024-09-15',
    checkbox1: false,
    checkbox2: true,
    checkbox3: true,
    checkbox4: false,
  },
  {
    email: 'ccccc@bbva.com',
    idBBVA: '******',
    status: 'Activa',
    country: 'España',
    domain: 'Cloud',
    lastModified: '2024-08-20',
    checkbox1: true,
    checkbox2: true,
    checkbox3: true,
    checkbox4: true,
  },
  
])

const columns = [
  { name: 'email', align: 'left', label: 'Email', field: 'email' },
  { name: 'idBBVA', align: 'center', label: 'ID BBVA', field: 'idBBVA' },
  { name: 'status', align: 'center', label: 'Estado', field: 'status' },
  { name: 'country', align: 'center', label: 'País', field: 'country' },
  { name: 'domain', align: 'center', label: 'Dominio', field: 'domain' },
  { name: 'lastModified', align: 'center', label: 'Fecha de última modificación', field: 'lastModified' },
  { name: 'checkbox1', align: 'center', label: '', field: 'checkbox1' },
  { name: 'checkbox2', align: 'center', label: '', field: 'checkbox2' },
  { name: 'checkbox3', align: 'center', label: '', field: 'checkbox3' },
  { name: 'checkbox4', align: 'center', label: '', field: 'checkbox4' },
  { name: 'checkbox5', align: 'center', label: '', field: 'checkbox5' },
]

</script>


<template>
    <div>
      <div class="row items-center q-gutter-sm">
        <q-input filled dense placeholder="Búsqueda por usuario" class="col" />
        <q-select filled dense placeholder="País" :options="['España', 'México', 'Colombia']" class="col" />
        <q-select filled dense placeholder="Dominio" :options="['GIAM', 'Security', 'Cloud']" class="col" />
        <q-select filled dense placeholder="Estado de Licencia" :options="['En curso', 'Sin iniciar', 'Activa', 'Inactiva']" class="col" />
        <q-btn label="Nueva Licencia" color="primary" icon="add" class="q-ml-sm" />
        <q-btn label="Carga masiva" color="primary" icon="file_upload" />
      </div>
    

    <!-- Tabla -->
    <q-table
      :rows="licenses"
      row-key="email"
      :columns="columns"
      class="q-mt-md"
    >
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <q-icon
            v-if="props.row.status === 'En curso'"
            name="circle"
            color="orange"
          />
          <q-icon
            v-else-if="props.row.status === 'Sin iniciar'"
            name="cancel"
            color="red"
          />
          <q-icon
            v-else-if="props.row.status === 'Activa'"
            name="check_circle"
            color="green"
          />
          <q-icon
            v-else
            name="remove_circle"
            color="grey"
          />
          {{ props.row.status }}
        </q-td>
      </template>

      <template v-slot:body-cell-checkbox1="props">
        <q-td :props="props">
          <q-checkbox v-model="props.row.checkbox1" dense />
        </q-td>
      </template>
      <template v-slot:body-cell-checkbox2="props">
        <q-td :props="props">
          <q-checkbox v-model="props.row.checkbox2" dense />
        </q-td>
      </template>
      <template v-slot:body-cell-checkbox3="props">
        <q-td :props="props">
          <q-checkbox v-model="props.row.checkbox3" dense />
        </q-td>
      </template>
      <template v-slot:body-cell-checkbox4="props">
        <q-td :props="props">
          <q-checkbox v-model="props.row.checkbox4" dense />
        </q-td>
      </template>
      <template v-slot:body-cell-checkbox5="props">
        <q-td :props="props">
          <q-checkbox v-model="props.row.checkbox5" dense />
        </q-td>
      </template>
    </q-table>
</div>
</template>


<style lang="scss">
.q-page {
  background-color: #f5f5f5;
}
</style>
