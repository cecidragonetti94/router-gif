<template>
<div>
  <Search @accion="getGifs"/>
 <v-row>
<v-col col=12>
    <Gift class="m-3 w-100" :data="gifs"/>
</v-col>
<v-col col=12>
    <Gift  class="m-3 w-100" :data="gifs"/>
</v-col>
<v-col col=12>
    <Gift class="m-3 w-100" :data="gifs" />
</v-col>
<v-col col=12>
    <Gift class="m-3 w-100" :data="gifs"/>
</v-col>
<v-col col=12>
    <Gift class="m-3 w-100" :data="gifs"/>
</v-col>
<v-col col=12>
    <Gift class="m-3 w-100" :data="gifs"/>
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
    async getGifs(){
      const {data} = await this.axios.get("https://api.giphy.com/v1/gifs/random?&api_key=lUsKjQjMAVed9xpiPsxjOwWU2v8ZwmQY")
     this.gifs = data.data
     console.log(this.gifs)
     
     
    }
  }
};
</script>