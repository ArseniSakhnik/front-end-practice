<template>
  <div v-if="getLegalentityWasSelected && getSelectedPharmacies && getOrderWasFilled">
    <h2 class="heading">Results</h2>
    <table class="striped add-contract-table">
      <thead>
      <tr class="tablehead">
        <th>Contract Type</th>
        <th>Service Agreement</th>
        <th>Contract Start Date</th>
        <th>Contract End Date</th>
        <th>Location</th>
        <th>Contractor Name</th>
      </tr>
      </thead>
      <tbody>
      <td>{{getOrder.contractType}}</td>
      <td>{{getOrder.serviceAgreement}}</td>
      <td>{{customFormatter(getOrder.contractStartDate)}}</td>
      <td>{{customFormatter(getOrder.contractEndDate)}}</td>
      <td>{{getOrder.location}}</td>
      <td>{{getOrder.contractorName}}</td>
      </tbody>
    </table>
    <table class="striped add-contract-table">
      <thead>
      <tr class="tablehead">
        <th>Legal Entity</th>
        <th>Street</th>
        <th>City</th>
        <th>Country</th>
      </tr>
      </thead>
      <tbody>
      <td>{{getLegalEntity.legalEntityName}}</td>
      <td>{{getLegalEntity.address}}</td>
      <td>{{getLegalEntity.city}}</td>
      <td>{{getLegalEntity.country}}</td>
      </tbody>
    </table>
    <table class="striped add-contract-table">
      <thead>
      <tr class="tablehead">
        <th>Pharmacy</th>
        <th>Street</th>
        <th>City</th>
        <th>Country</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="p in getSelectedPharmacies" :key="p.pharmaID">
        <td>{{p.pharmaName}}</td>
        <td>{{p.address}}</td>
        <td>{{p.city}}</td>
        <td>{{p.country}}</td>
      </tr>
      </tbody>
    </table>
    <router-link class="form9" to="/Step-3">
      <button class="btn button-back-step step-2">
        Back
      </button>
    </router-link>
  </div>
  <div class="form12" v-else>
    <h3>Items were not choose!</h3>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Results",
        computed: mapGetters(['getLegalentityWasSelected', 'getSelectedPharmacies', 'getOrderWasFilled',
            'getLegalEntity', 'getOrder']),
        methods: {
            customFormatter(date) {
                return this.$moment(date).format('MM/DD/YYYY');
            },
        }
    }
</script>

<style scoped>

</style>