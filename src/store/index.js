import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    token:null,
    user:null
  },
  mutations: {
    setToken(state,token){
      state.token=token
    },
    setUser(state,data){
      state.user=data
    }
  },
  actions: {
    async signIn({ dispatch }, credentials) {

        try {
          const response = await axios.post('auth/login', credentials)
          
            dispatch('attemp',response.data.access_token)
        } catch (error) {
          console.log(error)
        }
      },  
      async attemp({commit},token){
        try{
          const response =await axios.get('auth/user-profile',{
            headers:{'Authorization' :`Bearer ${token}`}
          })
            commit('setToken',token)
            commit('setUser',response.data)
            console.log('successful')
        }catch(error){
            console.log('failed2')
        }
      }
  },
  modules: {
    
  }
})
