import Vue from 'vue'
import type { PluginObject } from 'vue'

import { state, defaultState } from './state'
import type { ConfirmboxOptions } from './state'

import GConfirmbox from './components/GConfirmbox.vue'

/**
 * @param {Object | String} options    confirm title 或是設定
 * @param {String} options.title       confirm title
 * @param {String} options.content     confirm 的內容敘述
 * @param {Object} options.props       傳給底層 v-dialog 的 props
 */
function $confirm (options: string | ConfirmboxOptions) {
  return new Promise<void>((resolve, reject) => {
    if(state == null) {
      reject()
      return
    }

    if (typeof options === 'string') {
      options = {
        title: options,
      }
    }

    state.title = options.title
    state.content = options.content
    state.props = { ...options.props, ...defaultState.props }

    // 觸發同意
    state.resolve = () => {
      state.active = false

      resolve()
    }

    // 觸發取消
    state.reject = () => {
      state.active = false

      reject()
    }

    Vue.nextTick(() => {
      state.active = true
    })
  })
}


const globalConfirmbox: PluginObject<undefined> = {
  install (_Vue_) {
    _Vue_.component('GConfirmbox', GConfirmbox)
    _Vue_.use(() => {
      Object.defineProperty(Vue.prototype, '$confirm', {
        get: () => $confirm,
      })
    })
  }
}

export default globalConfirmbox

declare module 'vue/types/vue' {
  interface Vue {
    $confirm: typeof $confirm
  }
}
