<template>
  <v-card color="grey lighten-4 mb-4">
    <v-app-bar app dense class="warning">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Gif Router</v-app-bar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary dark align-center>
        <v-container class="mt-4 text-center">
          <v-col>
            <v-avatar >
              <img
                src="https://image.freepik.com/vector-gratis/software-programador-lenguaje-avatar_24877-771.jpg"
                alt=""
              />
            </v-avatar>
          </v-col>
          <v-col>
            <p class="white--text nt-3 headline">Cecilia Dragonetti</p>
          </v-col>
          <v-col>
              <v-btn to="/">Home</v-btn>
          </v-col>
          <v-col>
              <v-btn to="/gift">Gift</v-btn>
          </v-col>
          
           <v-col>
              <v-btn to="/sticker">Sticker</v-btn>
          </v-col>
        </v-container> 
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
    };
  },
};
</script>


