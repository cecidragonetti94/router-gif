.<template>
  <v-form ref="form" @submit.prevent="handlePeticion">
    <v-text-field v-model="search" label="Categoria"></v-text-field>

    <v-btn color="success" class="mb-5" type="submit"> Search </v-btn>
  </v-form>
</template>



<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    handlePeticion() {
        if(this.search === "") {
            "No se encontro elemento"
        } else  this.$emit("accion", this.search)
            
    
        }
      
    },
  }

</script>

<style>
</style>