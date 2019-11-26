<template>
  <v-col v-if="messages.length">
    <chat-room-message
      v-for="(message, index) in messages"
      :key="index"
      :owner="message.owner"
      :text="message.text"
    />
  </v-col>
  <v-col v-else>
    No incoming messages
  </v-col>
</template>

<script src="./index.ts" lang="ts"/>
