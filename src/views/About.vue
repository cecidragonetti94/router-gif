<template>
<div>
  <Search @accion="getGifs" />
 <v-row>
<v-col col=12 v-for="gif in gifs" :key="gif.id">
    <Gift class="m-3 w-100" :data="gif"/>
</v-col>
 </v-row>
  </div>
</template>
<script>
import Gift from "../components/Gift.vue"
import Search from '../components/Search.vue';
export default {
  name: "Home",
  components:{
    Gift,
    Search
  },
  data() {
    return {
      gifs: {},
    };
  },
  created() {
    this.getGifs()
  },
  methods: {
    async getGifs(search){
      const key = "lUsKjQjMAVed9xpiPsxjOwWU2v8ZwmQY"
      const {data} = await this.axios.get(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}`)
     this.gifs = data.data
     console.log(this.gifs)
     console.log(search)
     
     
    }
  }
};
</script>