.<template>

  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="handlePeticion"
    
  >
    <v-text-field
      v-model="name"
      label="Categoria"
      required
    ></v-text-field>

    <v-btn
      color="success"
      class="mb-5"
      @click="validate"
      type="submit"

    >
      Search
    </v-btn>
  </v-form>
</template>



<script>
export default {
    methods:{
        handlePeticion(){
            this.$emit("accion")
        }
    }
}
</script>

<style>

</style>