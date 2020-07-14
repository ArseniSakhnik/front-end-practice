export default {
    state: {
        contractType: 'Charter',
        serviceAgreement: '',
        contractStartDate: null,
        contractEndDate: null,
        location: '',
        contractorName: '',
        selectedLegalEntities: null,
        selectedPharmacy: []
    },
    mutations: {
        setContractType(state, payload){
            state.contractType = payload.contractType
        },
        setServiceAgreement(state, payload){
            state.serviceAgreement = payload.serviceAgreement
        },
        setContractStartDate(state, payload){
            state.contractStartDate = payload.contractStartDate
        },
        setContractEndDate(state, payload){
            state.contractEndDate = payload.contractEndDate
        },
        setLocation(state, payload){
            state.location = payload.location
        },
        setContractorName(state, payload){
            state.contractorName = payload.contractorName
        }
    },
    actions: {
        setContractType(ctx, payload){
            ctx.commit('setContractType', payload)
        },
        setServiceAgreement(ctx, payload){
            ctx.commit('setServiceAgreement', payload)
        },
        setContractStartDate(ctx, payload){
            ctx.commit('setContractStartDate', payload)
        },
        setContractEndDate(ctx, payload){
            ctx.commit('setContractEndDate', payload)
        },
        setLocation(ctx, payload){
            ctx.commit('setLocation', payload)
        },
        setContractorName(ctx, payload){
            ctx.commit('setContractorName', payload)
        }
    },
    getters: {
        getOrder(state){
            return state
        },
        getOrderWasFilled(state){
            return state.serviceAgreement != ''
                && state.contractStartDate != null
                && state.contractEndDate != null
                && state.location != ''
                && state.contractorName != null
                && state.contractorName != null
        }
    }
}