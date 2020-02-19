<template>
  <v-row class="fill-height" align="end" justify="center">
    <v-col>
      <chat-room-message-list
        :messages="messages"
      />
      <v-divider />
      <chat-room-message-input
        :value="message"
        @on-chat-room-message-change="onChatRoomMessageChange"
        @on-chat-room-message-send="onChatRoomMessageSend"
      />
    </v-col>
  </v-row>
</template>

<script src="./index.ts" lang="ts"/>
