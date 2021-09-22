<template>
  <v-dialog
    v-model="state.active"
    v-bind="state.props"
    @input="(value) => value || onCancle()"
  >
    <v-card>
      <v-card-title>
        {{ state.title }}
      </v-card-title>
      <template v-if="state.content">
        <v-card-text>
          {{ state.content }}
        </v-card-text>
      </template>
      
      <v-card-actions>
        <v-spacer />
        <v-btn @click="onCancle">
          取消
        </v-btn>
        <v-btn
          color="primary"
          @click="onConfirm"
        >
          確認
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

import { state } from './../state'

export default Vue.extend({
  name: 'GConfirmbox',
  computed: {
    state: {
      get () {
        return state
      }
    }
  },
  methods: {
    onCancle () {
      this.state.reject?.()
    },
    onConfirm () {
      this.state.resolve?.()
    }
  }
})
</script>