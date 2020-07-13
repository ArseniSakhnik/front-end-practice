import legalentity from '@/dates/legalentity';

export default {
    state: {
        legalEntities: []
    },

    mutations: {
        updateLegalEntities(state, updatedLegalEntities){
            if(state.legalEntities.length === 0) {
                updatedLegalEntities.forEach(el => el.Selected = false)
                updatedLegalEntities.forEach(el => el.address= el.address1 + " " + el.address2)
                state.legalEntities = updatedLegalEntities
            }
            else
            {
                state.legalEntities = updatedLegalEntities
            }
        },
        selectEntity(state, payload){
            state.legalEntities.forEach(el => el.legalEntityID === payload.id ? el.Selected = payload.value : el.Selected = false)
        }
    },

    actions: {
        fetchLegalEntities(ctx) {
            ctx.commit('updateLegalEntities', legalentity)
        },
        selectLegalEntity(ctx, payload) {
            ctx.commit('selectEntity', payload)
        }
    },

    getters: {
        getAllLegalEntities(state){
            return state.legalEntities
        },
        // getLegalEntityById(state, id){
        //     return state.legalEntities.filter(el => el.legalEntityID === id)
        // }
        getLegalEntityById: (state) => (id) => {
            return state.legalEntities.filter(el => el.legalEntityID === id)[0]
        },

        getSelectedLegalEntity(state){
            return state.legalEntities.filter(el => el.Selected === true)[0].legalEntityID
        },

        getLegalentityWasSelected(state){
            return state.legalEntities.filter(el => el.Selected === true).length > 0
        }
    },
}