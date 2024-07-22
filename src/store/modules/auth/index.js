import actions from "./actions"
import getters from "./getters"
import muttations from "./muttations"

export default {
  namespaced: true,
  state() {
    return {
      name: 'Andres Oliveira'
    }
  },
  muttations,
  getters,
  actions
}