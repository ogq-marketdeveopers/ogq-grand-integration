import * as mutations from './mutations'

import gAPI from '@/gapi/analytics'
import { login } from '@/utils/cookieUtils'

export const GET_AUTH = 'GET_AUTH'

export default {
  async [GET_AUTH] ({ commit }, payload) {
    this.$axios.post('/auth/login', {
      googleAccessToken: payload.accessToken
    }).then((data) => {
      console.log('data===>>> ', data)
      login(data.data.token)
      gAPI.postLogin(payload.accessToken)
      commit(mutations.GET_AUTH, data.data.admin)
    }).catch((err) => {
      console.error('GET_AUTH Actions error ', err)
      commit(mutations.LOGIN_CODE, err.response.data.code)
    })
  }
}
