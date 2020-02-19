<template>
  <v-col v-if="messages">
    <chat-room-message
      v-for="(message, index) in messages"
      :key="index"
      :owner="message.owner"
      :text="message.text"
    />
  </v-col>
</template>

<script src="./index.ts" lang="ts"/>
