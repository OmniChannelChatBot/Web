<template>
  <v-row align="center">
    <v-col cols="12" md="12">
      <v-row align="center">
        <v-col>
          <v-textarea
            color="accent"
            placeholder="Input message"
            auto-grow
            rows="1"
            row-height="15"
            :value="message"
            @change="onChatRoomMessageChange"
          />
        </v-col>
        <v-col md="auto">
          <v-btn
            color="accent"
            @click="onChatRoomMessageSend"
          >
            Send
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script src="./index.ts" lang="ts"/>
