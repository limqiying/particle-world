<template>
  <v-navigation-drawer absolute permanent right app>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block @click="togglePlay" height="80px">
          <div v-if="!isPlaying">
            <v-icon large>play_arrow</v-icon>
          </div>
          <div v-else>
            <v-icon large>pause</v-icon>
          </div>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script lang="ts">
import store from "@/store";
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component
export default class Editor extends Vue {
  get isPlaying() {
    return this.$store.state.isPlaying;
  }

  togglePlay() {
      this.$store.dispatch('togglePlay');
  }
}
// export default {
//   data() {
//     return {
//       items: [
//         { title: "Dashboard", icon: "dashboard" },
//         { title: "Account", icon: "account_box" },
//         { title: "Admin", icon: "gavel" }
//       ]
//     };
//   }
// };
</script>
