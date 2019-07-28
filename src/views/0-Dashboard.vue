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
    <v-layout wrap>
      <v-flex shrink>
        <RoomCard></RoomCard>
      </v-flex>
      <v-flex shrink>
        <RoomCard></RoomCard>
      </v-flex>
      <v-flex shrink>
        <RoomCard></RoomCard>
      </v-flex>
      <v-flex shrink>
        <RoomCard></RoomCard>
      </v-flex>
      <v-flex shrink>
        <RoomCard></RoomCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import StatsCard from "@/components/cards/StatsCard";
import RoomCard from "@/components/cards/RoomCard";

export default {
  components: {
    StatsCard,
    RoomCard
  }
};
</script>

<style>
</style>


