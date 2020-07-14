<template>
  <div v-if="getLegalentityWasSelected && getPharmacyWasSelected">
    <h2 class="heading">3: Enter contact terms</h2>
    <div class="step-3">
      <b class="wasselectedtext form3">Contract type</b>
      <select name="contrType" v-model="contractType" class="browser-default form4">
        <option>Charter</option>
        <option>Order</option>
        <option>Proxy</option>
        <option>Proxy</option>
        <option>Certificate</option>
      </select>
      <div>
        <b class="wasselectedtext form-text form2">Service
          Agreement</b>
        <input type="text" style="width: 100px; margin-left: 50px; display: inline" v-model="serviceAgreement">
      </div>
      <div>
        <b class="wasselectedtext form-text">Contract Start Date</b>
        <datepicker class="mydatepicker"
                    :value="Date"
                    v-model="contractStartDate"
                    :calendar-button="false"
                    :format="customFormatter"
                    :disabledDates="disableDatesForStart"
        >
        </datepicker>
        <i class="fa fa-calendar calendar-icon"></i>
      </div>
      <div class="form6">
        <b class="wasselectedtext form-text">Contract Start Date</b>
        <datepicker class="mydatepicker"
                    :value="Date"
                    v-model="contractEndDate"
                    :calendar-button="false"
                    :format="customFormatter"
                    :disabledDates="disabledDatesForEnd"
        >
        </datepicker>
        <i class="fa fa-calendar form6"></i>
      </div>
      <div class="form6">
        <b class="wasselectedtext form7">Location</b>
        <input type="text" style="width: 400px; margin-left: 120px; display: inline" v-model="location">
      </div>
      <div class="form8">
        <b class="wasselectedtext form7">Contractor Name</b>
        <input type="text" style="width: 400px; margin-left: 60px; display: inline"
               v-model="contractorName">
      </div>
      <router-link class="form9" to="/Step-2">
        <button class="btn button-back-step step-3">
          Back
        </button>
      </router-link>
      <button class="btn button-next-step step-3 form10" style="margin-left: 1000px" @click="viewResults">
        View Results
      </button>
    </div>
  </div>
  <div class="form11" v-else>
    <h3>Items were not choose!</h3>
  </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker'
    import Vue from 'vue'
    import {mapGetters} from 'vuex'

    Vue.use(require('vue-moment'))

    export default {
        components: {
            Datepicker,
        },
        name: "AddContractStep3",

        computed: {
            ...mapGetters(['getLegalentityWasSelected', 'getPharmacyWasSelected']),
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
                get() {
                    return this.$store.getters.getOrder.contractStartDate
                },
                set(value) {
                    this.disabledDatesForEnd = {
                        to: new Date(value.getFullYear(), value.getMonth(), value.getDate())
                    }
                    this.$store.dispatch('setContractStartDate', {contractStartDate: value})
                }
            },
            contractEndDate: {
                get() {
                    return this.$store.getters.getOrder.contractEndDate
                },
                set(value) {
                    this.disableDatesForStart = {
                        from: new Date(value.getFullYear(), value.getMonth(), value.getDate())
                    }
                    this.$store.dispatch('setContractEndDate', {contractEndDate: value})
                }
            },
            location: {
                get() {
                    return this.$store.getters.getOrder.location
                },
                set(value) {
                    this.$store.dispatch('setLocation', {location: value})
                }
            },
            contractorName: {
                get() {
                    return this.$store.getters.getOrder.contractorName
                },
                set(value) {
                    this.$store.dispatch('setContractorName', {contractorName: value})
                }
            }
        },

        data() {
            return {
                disableTo: null,
                disableDatesForStart: {},
                disabledDatesForEnd: {}
            }
        },

        methods: {
            customFormatter(date) {
                return this.$moment(date).format('MM/DD/YYYY');
            },
            viewResults() {
                let errorMessage = 'The following error needs to be fixed: \r\n'
                if (this.serviceAgreement.trim().length === 0) {
                    errorMessage += 'The contract\'s type field is empty \r\n'
                }
                if (this.contractStartDate === null) {
                    errorMessage += 'The contract\'s start day field is empty \r\n'
                }
                if (this.contractEndDate == null) {
                    errorMessage += 'The contract\'s end day field is empty \r\n'
                }
                if (this.location.trim().length === 0) {
                    errorMessage += 'The contract\'s location field is empty \r\n'
                }
                if (this.contractorName.trim().length === 0) {
                    errorMessage += 'The contract\'s name of contractor field is empty \r\n'
                }
                if (this.contractStartDate > this.contractEndDate
                    && this.contractStartDate != null
                    && this.contractEndDate != null) {
                    errorMessage += 'The start date of contract is later then the end date of contract'
                }
                if (errorMessage.length > 41)
                    alert(errorMessage)
                else
                    this.$router.push('/Results')
            },
        }
    }
</script>

<style scoped>


</style>