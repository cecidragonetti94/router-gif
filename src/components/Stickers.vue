<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
    loader="lazy"
      class="white--text align-end"
      height="200px"
      :src="data.images.downsized.url"
    >
      <v-card-title>{{ data.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"> {{data.username}} </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{data.user.display_name}}</div>

      <div>{{data.title}}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    data: Object,
    
  },
};
</script>

<style>
</style>