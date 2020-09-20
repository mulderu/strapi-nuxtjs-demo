<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template and Strapi
        </v-card-title>
        <v-card-text>
          <div v-if="$strapi.user">
            <p><v-btn class="primary" @click="findPost()"> findPost </v-btn></p>
            <ul id="example-1">
              <li v-for="item in posts" :key="item.id">
                {{ item.title }}
              </li>
            </ul>
            <p><v-btn class="warning" @click="authLogout()"> logOut </v-btn></p>
          </div>
          <div v-else>
            <p><v-btn class="warning" @click="authLogin()"> Login </v-btn></p>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

var log = console.log;

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    // https://strapi.nuxtjs.org
    async authLogin() {
      log("authLogin");
      // authenticated user : mulder
      let r1 = await this.$strapi.login({
        identifier: "mulder",
        password: "mulder1234"
      });
      log(r1);
    },
    async authLogout() {
      log("authLogout")
      let r1 = await this.$strapi.logout()
      log(r1)
    },
    async findPost() {
      log("findPost");
      // posts was protected resource for authenticated group
      let r1 = await this.$strapi.find("posts");
      log(r1);
      this.posts = r1;
    }
  }
};
</script>
