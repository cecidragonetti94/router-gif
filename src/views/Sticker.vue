<template>
<div col=12 xs=4 md=8>
  <h1>STICKERS</h1>
  <hr>
  <Search @accion="getStickers" />

 <v-row>
<v-col col=12 v-for="item in sticker" :key="item.id">
    <Stickers class="m-3 w-100" :data="item"/>
</v-col>
 </v-row>
  </div>
</template>
<script>
import Stickers from "../components/Stickers.vue"
import Search from '../components/Search.vue';

export default {
  name: "Home",
  components:{
    Stickers,
    Search,

  },
  data() {
    return {
      sticker: {},
  
    };
  },
  created() {
    this.getStickers()
  },
  methods: {
    async getStickers(search){
      const key = "lUsKjQjMAVed9xpiPsxjOwWU2v8ZwmQY"
      
      const {data} = await this.axios.get(`https://api.giphy.com/v1/stickers/search?q=${search}&api_key=${key}`)
     this.sticker = data.data
     console.log("search",search)
    
      console.log("data",this.sticker)
     
     
    }
  }
};
</script>
<style>
h1{
  text-align: center;
  margin-bottom: 5px;
  font-size:50px
}
hr{
  margin-bottom: 10px;
}
</style>