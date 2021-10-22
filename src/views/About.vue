<template>
  <div class="about">
    <GiftCard/>
  </div>
</template>
<script>
import GiftCard from '../components/GiftCard.vue'
export default {
  name: "Home",
  components:{
    GiftCard
  },
  data() {
    return {
      gifs: null,
    };
  },
  mounted() {
    this.getGifs()
  },
  methods: {
    async getGifs(){
      const res = await this.axios.get("https://api.giphy.com/v1/gifs/random?&api_key=lUsKjQjMAVed9xpiPsxjOwWU2v8ZwmQY")
     console.log(res)
    }
  }
};
</script>