<template>
  <div>
    <h2 class="heading">1: Select Legal Entity</h2>
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
        <tr class="cursor-pointer" v-for="l in getAllLegalEntities" :key="l.legalEntityID" @click="selectLegalEntity(l.legalEntityID)"
            :class="{rowselected: l.Selected}">
          <td width="5%" v-if="l.Selected">
            <i class="fa fa-check icon"></i>
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
        <router-link to="/Step-2">
          <button class="btn button-next-step">
            Select Pharmacies
          </button>
        </router-link>
      </div>
      <div v-else>
        <button class="btn button-next-step" @click="wrongClick">
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
            wrongClick() {
                alert('You have to select one Legal Entity')
            }
        }
    }
</script>

<style scoped>

</style>