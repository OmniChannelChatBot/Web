<template>
  <v-layout column>
    <chat-room-message-list
      :messages="messages"
    />
    <v-divider />
    <chat-room-input
      :control="control"
      @changeUserId="onChatRoomUserIdChange"
      @changeUserMesage="onChatRoomUserMessageChange"
      @clickUserSendMessage="onChatRoomUserSendMessageClick"
    />
  </v-layout>
</template>

<script>
import ChatRoomMessageList from '@/components/ChatRoomMessageList.vue'
import ChatRoomInput from '@/components/ChatRoomInput.vue'

export default {
  components: {
    ChatRoomMessageList,
    ChatRoomInput
  },
  data() {
    return {
      messages: [],
      control: {
        message: '',
        userId: ''
      }
    }
  },
  methods: {
    onChatRoomUserIdChange(text) {
      this.control.userId = text
    },
    onChatRoomUserMessageChange(text) {
      this.control.message = text
    },
    onChatRoomUserSendMessageClick() {
      this.messages.push({
        owner: true,
        text: this.control.message
      })

      this.control.message = ''
      // console.log(this.control.userId, this.control.message)
    }
  }
}
</script>
