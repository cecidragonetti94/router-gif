<template>
 <h1>home</h1>
</template>

<script>


  export default {
    name: 'Home',
  mounted(){
    const res =this.axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(({data})=> console.log(data))
  }
   
  }
</script>
