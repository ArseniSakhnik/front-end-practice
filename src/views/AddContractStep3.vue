<template>
  <div class="step-3">
    <b style="margin-left: 0px; margin-top: 0px; float:left" class="wasselectedtext">Contract type</b>
    <select name="contrType" v-model="contractType" class="browser-default" style="width: 100px; margin-left: 180px;
     height: 30px">
      <option>Charter</option>
      <option>Order</option>
      <option>Proxy</option>
      <option>Certificate</option>
    </select>
    <div>
      <b style="margin-left: 0px; margin-top: 20px; float:left; display: inline-block" class="wasselectedtext">Service
        Agreement</b>
      <input type="text" style="width: 100px; margin-left: 50px; display: inline" v-model="serviceAgreement">
    </div>
    <div>
      <b style="margin-left: 0px; margin-top: 20px; float:left;" class="wasselectedtext">Contract Start Date</b>
      <!--      <input type="text" style="width: 100px; margin-left: 50px" readonly v-model="contractStartDate">-->
      <datepicker class="browser-default" style="width: 105px; margin-left: 45px; float: left; cursor: pointer"
                  :value="Date"
                  v-model="contractStartDate"
                  :calendar-button="false"
                  :format="customFormatter"
      >
      </datepicker>
      <i class="fa fa-calendar" style="margin-top: 20px"></i>
    </div>
    <div style="margin-top: 20px">
      <b style="margin-left: 0px; margin-top: 20px; float:left;" class="wasselectedtext">Contract Start Date</b>
      <!--      <input type="text" style="width: 100px; margin-left: 50px" readonly v-model="contractStartDate">-->
      <datepicker class="browser-default" style="width: 105px; margin-left: 45px; float: left; cursor: pointer"
                  :value="Date"
                  v-model="contractEndDate"
                  :calendar-button="false"
                  :format="customFormatter"
      >
      </datepicker>
      <i class="fa fa-calendar" style="margin-top: 20px"></i>
    </div>
    <div style="margin-top: 20px">
      <b style="margin-left: 0px; margin-top: 20px; display: inline-block" class="wasselectedtext">Location</b>
      <input type="text" style="width: 400px; margin-left: 120px; display: inline" v-model="location">
    </div>
    <div style="margin-top: 10px">
      <b style="margin-left: 0px; margin-top: 20px; display: inline-block" class="wasselectedtext">Contractor Name</b>
      <input type="text" style="width: 400px; margin-left: 60px; display: inline" v-model="contractorName">
    </div>
    <button class="btn buttonnextstep" style="margin-left: 1200px">
      View Results
    </button>
  </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker'
    import Vue from 'vue'

    Vue.use(require('vue-moment'))

    export default {
        components: {
            Datepicker,
        },
        name: "AddContractStep3",

        computed: {
            contractType: {
                get() {
                    return this.$store.getters.getOrder.contractType
                },
                set(value) {
                    this.$store.dispatch('setContractType', {contractType: value})
                }
            },
            serviceAgreement: {
                get() {
                    return this.$store.getters.getOrder.serviceAgreement
                },
                set(value) {
                    this.$store.dispatch('setServiceAgreement', {serviceAgreement: value})
                }
            },
            contractStartDate: {
                get(){
                    return this.$store.getters.getOrder.contractStartDate
                },
                set(value) {
                    this.$store.dispatch('setContractStartDate', {contractStartDate: value})
                }
            },
            contractEndDate: {
                get(){
                    return this.$store.getters.getOrder.contractEndDate
                },
                set(value){
                    this.$store.dispatch('setContractEndDate', {contractEndDate: value})
                }
            },
            location: {
                get(){
                    return this.$store.getters.getOrder.location
                },
                set(value){
                    this.$store.dispatch('setLocation', {location: value})
                }
            },
            contractorName: {
                get(){
                    return this.$store.getters.getOrder.contractorName
                },
                set(value){
                    this.$store.dispatch('setContractorName', {contractorName: value})
                }
            }
        },

        mounted() {

        },
        methods: {
            customFormatter(date) {
                return this.$moment(date).format('MM/DD/YYYY');
            },
        }
    }
</script>

<style scoped>

</style>