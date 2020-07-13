<template>
  <div>
    <h1 style="margin-left: 200px; font-size: 20pt; margin-top: 50px">2: Select Legal Entity</h1>
    <table class="striped highlight add-contract-table">
      <thead>
      <tr class="tablehead">
        <th></th>
        <th>Pharmacy</th>
        <th>Street</th>
        <th>City</th>
        <th>Country</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="p in getPharmaciesByLegalEntityId" :key="p.pharmaID" @click="selectPharmacy(p.pharmaID)"
          style="cursor: pointer" :class="{rowselected: p.Selected}">
        <td width="5%" v-if="p.Selected">
          <i class="fa fa-check" style="font-size:24px"></i>
        </td>
        <td width="5%" v-else></td>
        <td>{{p.pharmaName}}</td>
        <td>{{p.address}}</td>
        <td>{{p.city}}</td>
        <td>{{p.country}}</td>
      </tr>
      </tbody>
    </table>
    <div v-if="getPharmacyWasSelected">
      <router-link to="/Step-3" style="color:white">
        <button class="btn buttonnextstep step-2">
          Enter Contract Terms
        </button>
      </router-link>
    </div>
    <div v-else>
      <button class="btn buttonnextstep step-2" @click="wrongClick">
        Enter Contract Terms
      </button>
    </div>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "AddContractStep2",
        computed: mapGetters(['getPharmaciesByLegalEntityId', 'getPharmacyWasSelected']),
        mounted() {
            this.$store.dispatch('fetchPharmacies')
        },
        methods: {
            selectPharmacy(id) {
                this.$store.dispatch('selectPharmacy', {
                    id: id
                })
            },
            wrongClick() {
                alert('You have to select at least one Legal Entity')
            }
        }
    }
</script>

<style scoped>

</style>