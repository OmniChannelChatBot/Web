<template>
  <v-row align="center">
    <v-col cols="6" md="3">
      <v-text-field
        color="accent"
        placeholder="User"
        :value="control.userName"
        @change="onUserNameChange"
      />
    </v-col>
    <v-col cols="12" md="9">
      <v-row align="center">
        <v-col>
          <v-textarea
            class="testArea"
            color="accent"
            placeholder="Message"
            auto-grow
            rows="1"
            row-height="15"
            :value="control.userMessage"
            @change="onUserMessageChange"
          />
        </v-col>
        <v-col md="auto">
          <v-btn
            color="accent"
            @click="onSendMessageClick"
          >
            Send
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script src="./index.ts" lang="ts"/>
