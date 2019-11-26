<template>
  <v-layout column>
    <chat-room-message-list
      :messages="messages"
    />
    <v-divider />
    <chat-room-input
      :control="control"
      @on-user-id-change="onUserNameChange"
      @on-user-message-change="onUserMessageChange"
      @on-send-message-click="onSendMessageClick"
    />
  </v-layout>
</template>

<script src="./index.ts" lang="ts"/>
