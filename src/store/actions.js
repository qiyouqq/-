import {reqHome} from '../api'
import {RECEIVE_HOME} from './mutation-types'


export default {
  async getHome({commit}){
    const result = await reqHome()


    if(result.code===0){
      const  home = result.data
      console.log(home.kingKongModule.kingKongList)
      commit(RECEIVE_HOME,{home})

    }
  }
}
