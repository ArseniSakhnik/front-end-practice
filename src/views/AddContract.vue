<template>
  <div>
    <h1 style="margin-left: 200px; font-size: 20pt; margin-top: 50px">1: Select Legal Entity</h1>
    <div class="app-contract-layout">
      <table class="striped highlight add-contract-table">
        <thead>
        <tr class="tablehead">
          <th></th>
          <th>Legal Entity</th>
          <th>Street</th>
          <th>City</th>
          <th>Country</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="l in getAllLegalEntities" :key="l.legalEntityID" @click="selectLegalEntity(l.legalEntityID)"
            style="cursor: pointer" :class="{rowselected: l.Selected}">
          <td width="5%" v-if="l.Selected">
            <i class="fa fa-check" style="font-size:24px"></i>
          </td>
          <td width="5%" v-else></td>
          <td>{{l.legalEntityName}}</td>
          <td>{{l.address}}</td>
          <td>{{l.city}}</td>
          <td>{{l.country}}</td>
        </tr>
        </tbody>
      </table>
      <div v-if="getLegalentityWasSelected">
        <router-link to="/Step-2" style="color:white">
          <button class="btn buttonnextstep">
            Select Pharmacies
          </button>
        </router-link>
      </div>
      <div v-else>
        <button class="btn buttonnextstep" @click="wrongClick">
          Select Pharmacies
        </button>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Stepper",
        components: {},
        // computed:{
        //     allLegalEntities() {
        //         return this.$store.getters.getAllLegalEntities
        //     }
        // }

        computed: mapGetters(['getAllLegalEntities', 'getLegalentityWasSelected']),
        mounted() {
            this.$store.dispatch('fetchLegalEntities')
        },
        methods: {
            selectLegalEntity(id) {
                this.$store.dispatch('selectLegalEntity', {
                    id: id,
                    value: true
                })
                this.error = false;
            },
            wrongClick(){
                alert('You have to select one Legal Entity')
            }
        }
    }
</script>

<style scoped>

</style>