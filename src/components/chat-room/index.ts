import ChatRoomMessageInput from '@/components/chat-room-message-input/view.vue'
import ChatRoomMessageList from '@/components/chat-room-message-list/view.vue'
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { v4 } from 'uuid'
import Vue from 'vue'
import Component from 'vue-class-component'
import { IChatRoomMessage } from '../chat-room-message'
import { IChatRoomMessageInput } from '../chat-room-message-input'
import { IChatRoomMessageList } from '../chat-room-message-list'

const config = require('config')

type ChatMessageType = {
  chatRoomId: number;
  username?: string;
  text: string;
  type: number;
};

@Component({
  components: {
    ChatRoomMessageList,
    ChatRoomMessageInput
  }
})
export default class ChatRoom extends Vue implements IChatRoomMessageList, IChatRoomMessageInput {
  private hubConnection: HubConnection

  public message?: string
  public messages: IChatRoomMessage[]

  public constructor() {
    super()
    this.message = ''
    this.messages = []
    this.hubConnection = new HubConnectionBuilder()
      // TODO: нужно подтягивать из настроек во время SSR
      .withUrl(`${config.serverServiceUrl}/chat`)
      .withAutomaticReconnect()
      // TODO: временно для отладки
      .configureLogging(LogLevel.Information)
      .build()

    this.hubConnection
      .on('ChatMessageReceived', (username: string, chatMessage: ChatMessageType) => {
        this.messages.push({
          text: chatMessage.text
        })

        console.log(username)
      })

    this.hubConnection
      .on('Connected', (text: string) => {
        console.log(text)
      })

    this.hubConnection
      .on('Disconnected', (text: string) => {
        console.log(text)
      })

    this.hubConnection
      .start()
      .then(() => console.log('Соединение открыто'))
      .catch(err => console.log(err))

    this.hubConnection
      .onclose(() => console.log('Соединение закрыто'))
  }

  public onChatRoomMessageChange(message: string): void {
    this.message = message
  }

  public onChatRoomMessageSend(): void {
    this.messages.push({
      text: this.message
    })

    const chatMessage: ChatMessageType = {
      chatRoomId: 1,
      username: 'zexsm',
      type: 1,
      text: this.message!
    }

    this.hubConnection
      .send('newChatMessage', chatMessage)
      .then(() => {
        this.messages.push({
          text: this.message
        })

        this.message = ''
      })
  }
}
