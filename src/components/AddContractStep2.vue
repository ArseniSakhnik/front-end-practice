<template>
  <div v-if="getLegalentityWasSelected">
    <h2 class="heading">2: Select Legal Entity for "{{getSelectedLegalEntityName}}"</h2>
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
      <tr class="cursor-pointer" v-for="p in getPharmaciesByLegalEntityId" :key="p.pharmaID" @click="selectPharmacy(p.pharmaID)"
          :class="{rowselected: p.Selected}">
        <td width="5%" v-if="p.Selected">
          <i class="fa fa-check icon"></i>
        </td>
        <td width="5%" v-else></td>
        <td>{{p.pharmaName}}</td>
        <td>{{p.address}}</td>
        <td>{{p.city}}</td>
        <td>{{p.country}}</td>
      </tr>
      </tbody>
    </table>
    <router-link to="/">
      <button class="btn button-back-step">
        Back
      </button>
    </router-link>
    <div v-if="getPharmacyWasSelected">
      <router-link to="/Step-3">
        <button class="btn button-next-step step-2">
          Enter Contract Terms
        </button>
      </router-link>
    </div>
    <div v-else>
      <button class="btn button-next-step step-2" @click="wrongClick">
        Enter Contract Terms
      </button>
    </div>
  </div>
  <div class="error-data-uploading" v-else>
    <h3>Items were not choose on step 1!</h3>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "AddContractStep2",
        computed: mapGetters(['getPharmaciesByLegalEntityId', 'getPharmacyWasSelected', 'getSelectedLegalEntityName', 'getLegalentityWasSelected']),
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