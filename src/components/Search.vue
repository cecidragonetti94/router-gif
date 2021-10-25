.<template>
  <v-form ref="form" @submit.prevent="handlePeticion" class="form">
    <v-text-field v-model="search" label="Category"></v-text-field>

    <v-btn color="success" class="mb-5" type="submit"> Search </v-btn>
  </v-form>
</template>



<script>
export default {
  data() {
    return {
      search: '',
    };
  },
  methods: {
    handlePeticion() {
       this.$emit("accion", this.search)
        }
      
    },
  }

</script>

<style>
.form{
    margin-right: 500px;
    display: flex;
    align-items:  center;
    margin-left: 500px;
    margin-bottom: 30px;


}
</style>