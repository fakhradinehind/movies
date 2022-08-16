import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    async signIn({ dispatch }, credentials) {

        try {
          const response = await axios.post('auth/login', credentials)
          console.log(response.data)

        } catch (error) {
          console.log(error)
        }
      },  
      
  },
  modules: {
    
  }
})
