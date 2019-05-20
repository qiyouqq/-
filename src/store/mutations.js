import {RECEIVE_HOME} from './mutation-types'


export default {
  [RECEIVE_HOME](state,{home}){
    state.home = home
  }
}
