<template>
  <v-card color="grey lighten-4" flat height="200px" tile>
    <v-toolbar dense class="warning" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" temporary dark>
        <v-row >
          <v-col>
            <v-avatar>
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
              <v-btn to="/about">About</v-btn>
          </v-col>
          <v-col>
              <v-btn to="/">Home</v-btn>
          </v-col>
        </v-row>
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


