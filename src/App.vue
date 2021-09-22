<template>
  <v-app>
    <v-container>
      <v-btn
        color="primary"
        @click="onConfirm"
      >
        打開 Confirmbox
      </v-btn>
    </v-container>
    <g-confirmbox />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    isActive: true,
  }),

  methods: {
    onConfirm () {
      this.$confirm({
        title: '打開 confirm box',
        content: '透過按鈕打開確認用的對話框'
      })
        .then(() => {
          console.log('確認')
        })
        .catch(() => {
          console.log('取消')
        })
    }
  }
});
</script>
