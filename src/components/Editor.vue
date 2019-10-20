<template>
  <v-navigation-drawer dark permanent right app width="350px">
    <v-list>
      <!-- <v-list-item-title class="title">Scene Editor</v-list-item-title> -->
      <v-list-item>
        <NewParticleCard />
      </v-list-item>

      <div class="mx-4">
        <v-list-item>
          <v-btn block @click="addGroundPlane">Add Ground Plane</v-btn>
        </v-list-item>
      </div>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn
          block
          @click="togglePlay"
          height="80px"
        >
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
import NewParticleCard from "./NewParticleCard.vue";
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component<Editor>({
  components: {
    NewParticleCard
  }
})
export default class Editor extends Vue {
  get isPlaying() {
    return this.$store.state.isPlaying;
  }
  togglePlay() {
    this.$store.dispatch("togglePlay");
  }
  addGroundPlane() {
    store.dispatch("showGroundPlane");
  }
}
</script>
