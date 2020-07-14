import pharmacy from '@/dates/pharmacy'

export default {
    state: {
        pharmacies: []
    },
    mutations: {
        updatePharmacies(state, updatedPharmacies){
            if(state.pharmacies.length === 0){
                updatedPharmacies.forEach(el => el.Selected = false)
                updatedPharmacies.forEach(el => el.address = el.address_1 + " " + el.address_2)
                state.pharmacies = updatedPharmacies
            }
            else {
                state.pharmacies = updatedPharmacies
            }
        },
        selectPharmacy(state, payload){
            state.pharmacies.forEach(el => {
                if(el.pharmaID === payload.id){
                    el.Selected = !el.Selected
                }
            })
        }
    },
    actions: {
        fetchPharmacies(ctx){
            ctx.commit('updatePharmacies', pharmacy)
        },
        selectPharmacy(ctx, payload){
            ctx.commit('selectPharmacy', payload)
        }

    },
    getters: {
        getPharmaciesByLegalEntityId(state, getters){
            return state.pharmacies.filter(el => el.legalEntityID === getters.getSelectedLegalEntity)
        },
        getPharmacyWasSelected(state) {
            return state.pharmacies.filter(el => el.Selected === true).length > 0
        },
        getSelectedPharmacies(state) {
            return state.pharmacies.filter(el => el.Selected === true)
        }
    },
}