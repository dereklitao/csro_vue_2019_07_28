<template>
  <v-container fluid grid-list-lg>
    <v-layout>
      <StatsCard
        name="客厅"
        icon="mdi-thermometer-lines"
        color="green"
        value="29.3"
        unit="°C"
        badge="true"
      ></StatsCard>
      <StatsCard name="客厅" icon="mdi-water-percent" color="blue" value="57" unit="%"></StatsCard>
      <StatsCard name="卧室" icon="mdi-water-percent" color="blue" value="67" unit="%"></StatsCard>
      <StatsCard name="卧室" icon="mdi-blur" color="teal" value="598" unit="ug/m³" badge="true"></StatsCard>
      <StatsCard name="卧室" icon="mdi-periodic-table-co2" color="pink" value="590" unit="ppm"></StatsCard>
    </v-layout>
    <v-layout>
      <v-flex shrink>
        <v-card width="280">
          <v-toolbar color="primary" dense dark>
            <v-icon>mdi-hotel</v-icon>
            <v-toolbar-title class="ml-5">主卧室</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn small rounded color="white" depressed class="primary--text">16</v-btn>
            <!-- <h3 class="font-weight-light">7</h3> -->
          </v-toolbar>
          <v-list avatar two-line>
            <v-list-item-group color="primary">
              <NormalLight></NormalLight>
              <v-divider></v-divider>
              <Curtain></Curtain>
              <v-divider></v-divider>
              <DimLight></DimLight>
              <v-divider></v-divider>
              <NormalLight></NormalLight>
              <v-divider></v-divider>
              <NormalLight></NormalLight>
              <v-divider></v-divider>
              <DimLight></DimLight>
              <v-divider></v-divider>
              <NormalLight></NormalLight>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex shrink>
        <WeatherCard></WeatherCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import StatsCard from "@/components/cards/StatsCard";
import NormalLight from "@/components/listitem/NormalLight";
import DimLight from "@/components/listitem/DimLight";
import Curtain from "@/components/listitem/Curtain";
import WeatherCard from "@/components/cards/WeatherCard";
export default {
  components: {
    StatsCard,
    NormalLight,
    DimLight,
    Curtain,
    WeatherCard
  }
};
</script>

<style>
</style>


