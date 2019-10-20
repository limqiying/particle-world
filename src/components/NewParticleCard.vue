<template>
  <v-card outlined class="ma-3 pa-2">
    <v-card-title>New Particle</v-card-title>
    <v-form>
      <v-row class="mx-2">
        <v-col cols="12" sm="8" md="4">
          <v-text-field
            label="position-x"
            type="number"
            v-model="pos_x"
            :disabled="disableInputs"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="4">
          <v-text-field
            label="position-y"
            type="number"
            v-model="pos_y"
            :disabled="disableInputs"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="4">
          <v-text-field
            label="position-z"
            type="number"
            v-model="pos_z"
            :disabled="disableInputs"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mx-2">
        <v-col cols="12" sm="8" md="4">
          <v-text-field
            label="velocity-x"
            type="number"
            v-model="vel_x"
            :disabled="disableInputs"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="4">
          <v-text-field
            label="velocity-y"
            type="number"
            v-model="vel_y"
            :disabled="disableInputs"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="4">
          <v-text-field
            label="velocity-z"
            type="number"
            v-model="vel_z"
            :disabled="disableInputs"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row></v-row>
      <v-color-picker
        v-model="color"
        flat
        hide-inputs
        hide-canvas
        class="mx-auto"
        :disabled="disableInputs"
      ></v-color-picker>
      <v-row class="mx-2">
        <v-col cols="12" sm="8" md="4">
          <v-text-field
            label="radius"
            type="number"
            v-model="radius"
            :disabled="disableInputs"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="4">
          <v-text-field
            label="mass"
            type="number"
            v-model="mass"
            :disabled="disableInputs"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="4">
          <v-checkbox
            v-model="gravity"
            label="gravity"
            :disabled="disableInputs"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-btn
        block
        :disabled="disableInputs"
        elevation="1"
        @click="insertParticle"
        >Insert</v-btn
      >
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import store from "@/store";
import { Vector3 } from "three";
import Particle from "../particle";
import { ParticleInfo } from "../manager";

@Component<NewParticleCard>({})
export default class NewParticleCard extends Vue {
  private color: string = "#FF00FF";
  private pos_x: number = 0.0;
  private pos_y: number = 0.0;
  private pos_z: number = 0.0;
  private vel_x: number = 0.0;
  private vel_y: number = 0.0;
  private vel_z: number = 0.0;
  private radius: number = 1.0;
  private mass: number = 1.0;
  private nextID: number = 0;
  private gravity: boolean = true;

  get disableInputs() {
    return this.$store.state.isPlaying;
  }

  insertParticle(): void {
    const position: Vector3 = new Vector3(
      +this.pos_x,
      +this.pos_y,
      +this.pos_z
    );
    const velocity: Vector3 = new Vector3(
      +this.vel_x,
      +this.vel_y,
      +this.vel_z
    );
    const particle: Particle = new Particle(position, velocity, +this.mass);
    const particleInfo: ParticleInfo = {
      id: this.nextID++,
      radius: +this.radius,
      color: this.color,
      particle: particle,
      gravity: this.gravity
    };
    this.$store.dispatch("addParticle", particleInfo);
    this.resetValues();
  }

  resetValues(): void {
    this.pos_x = 0.0;
    this.pos_y = 0.0;
    this.pos_z = 0.0;
    this.vel_x = 0.0;
    this.vel_y = 0.0;
    this.vel_z = 0.0;
    this.radius = 1.0;
  }
}
</script>

<style></style>
