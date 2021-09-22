import Vue from 'vue'
import { defaultProps } from './props'
import type { VDialogProps } from './props'

export interface ConfirmboxOptions {
  title: string
  content?: string
  props?: Partial<VDialogProps>
}

export interface ConfirmboxState {
  active: boolean
  resolve: () => void
  reject: () => void
}

const noop = () => {}

export const defaultState: ConfirmboxState & ConfirmboxOptions = {
  active: false,
  title: '',
  content: '',
  resolve: noop,
  reject: noop,
  props: defaultProps
} as const

export const state: ConfirmboxState & ConfirmboxOptions = Vue.observable(Object.assign({}, defaultState))
