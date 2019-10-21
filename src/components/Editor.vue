<template>
  <v-navigation-drawer dark permanent right app width="350px">
    <v-list>
      <!-- <v-list-item-title class="title">Scene Editor</v-list-item-title> -->
      <v-list-item>
        <NewParticleCard />
      </v-list-item>

      <div class="mx-2" justify="center">
        <v-list-item>
          <v-btn
            block
            @click="addGroundPlane"
            :disabled="disableGroundPlaneButton"
            >Add Box</v-btn
          >
        </v-list-item>
        <v-list-item>
          <v-col>
            <v-checkbox
              label="Detect Collisions"
              v-model="detectCollisions"
            ></v-checkbox>
          </v-col>
          <v-col>
            <v-row>
              <v-subheader justify="center">Restitution</v-subheader>
            </v-row>
            <v-row>
              <v-slider
                :disabled="!detectCollisions"
                v-model="restitution"
                thumb-label
                :thumb-size="30"
                thumb-color="grey darken-4"
                min="0"
                max="1"
                step="0.01"
              ></v-slider>
            </v-row>
          </v-col>
        </v-list-item>
      </div>
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
import NewParticleCard from "./NewParticleCard.vue";
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component<Editor>({
  components: {
    NewParticleCard
  }
})
export default class Editor extends Vue {
  private restitution: number = 0.5;
  private detectCollisions: boolean = true;

  @Watch("restitution")
  onRestitutionChanged(value: number) {
    store.dispatch("setRestitution", +value);
  }

  @Watch("detectCollisions")
  onCollisionDetectionChanged(value: boolean) {
    store.dispatch("setCollisionDetection", value);
  }

  get isPlaying() {
    return this.$store.state.isPlaying;
  }
  togglePlay() {
    this.$store.dispatch("togglePlay");
  }
  addGroundPlane() {
    store.dispatch("addBox");
  }
  get disableGroundPlaneButton() {
    return this.$store.state.showGroundPlane || this.$store.state.isPlaying;
  }
}
</script>
