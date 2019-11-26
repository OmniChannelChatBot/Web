import { HubConnectionBuilder, HubConnection, LogLevel } from '@microsoft/signalr'
import { v4 } from 'uuid'
import Vue from 'vue'
import Component from 'vue-class-component'
import ChatRoomInput from '@/components/chat-room-input/view.vue'
import ChatRoomMessageList from '@/components/chat-room-message-list/view.vue'
import { ChatRoomInputControlType, IChatRoomInput } from '../chat-room-input'
import { IChatRoomMessage } from '../chat-room-message'
import { IChatRoomMessageList } from '../chat-room-message-list'

type HubChatMessageType = {
  guid?: string;
  id?: number;
  chatRoomId?: number;
  text?: string;
  userId?: string;
  type?: number;
  userName: string;
  userGuid?: string;
  date?: Date;
};

@Component({
  components: {
    ChatRoomMessageList,
    ChatRoomInput
  }
})
export default class ChatRoom extends Vue implements IChatRoomMessageList, IChatRoomInput {
  private hubConnection: HubConnection | null = null

  public control: ChatRoomInputControlType = {
    userName: '',
    userMessage: ''
  }

  public messages: IChatRoomMessage[] = []

  public created() {
    this.hubConnection = new HubConnectionBuilder()
      // TODO: нужно подтягивать из настроек во время SSR
      .withUrl('http://localhost:49877/chat')
      .withAutomaticReconnect()
      // TODO: временно для отладки
      .configureLogging(LogLevel.Information)
      .build()

    this.hubConnection
      .on('MessageReceived', (message: HubChatMessageType, id: string) => {
        console.log(message, id)
        this.messages.push({
          owner: false,
          text: message.text
        })
      })

    this.hubConnection
      .on('Notify', (message: string) => {
        console.log(message)
      })

    this.hubConnection
      .start()
      .catch(err => console.log(err))

    this.hubConnection
      .onclose(() => console.log('Соединение закрыто'))
  }

  public onUserNameChange(text: string): void {
    this.control.userName = text
  }

  public onUserMessageChange(text: string): void {
    this.control.userMessage = text
  }

  public onSendMessageClick(): void {
    if (this.hubConnection) {
      const message: HubChatMessageType = {
        guid: v4(),
        userName: this.control.userName,
        text: this.control.userMessage
      }

      this.hubConnection
        .send('newMessage', message)
        .then(() => {
          this.messages.push({
            owner: true,
            text: this.control.userMessage
          })

          this.control.userMessage = ''
        })
    }
  }
}
