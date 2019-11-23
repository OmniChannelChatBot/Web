<template>
  <v-row v-if="!owner" justify="start">
    <v-col md="auto">
      <v-card shaped outlined>
        <v-card-text>{{ text }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row v-else justify="end">
    <v-col md="auto">
      <v-card shaped outlined>
        <v-card-text>{{ text }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default {
  props: {
    owner: {
      type: Boolean,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
