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

<script src="./index.ts" lang="ts"/>
