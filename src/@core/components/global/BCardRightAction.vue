<template>
  <b-card>
    <b-card-header>
      <b-card-sub-title>{{ title }}</b-card-sub-title>
      <slot name="navbar" />
    </b-card-header>
    <slot name="body" />
  </b-card>
</template>
<script>
import { BCard, BCardHeader, BCardSubTitle } from 'bootstrap-vue'

export default {
  props: ['title'],
  components: { BCard, BCardHeader, BCardSubTitle },
}
</script>
