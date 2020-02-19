import Vue from 'vue'
import Component from 'vue-class-component'
import { Emit, Prop } from 'vue-property-decorator'

export interface IChatRoomMessageInput {
  message?: string;
  onChatRoomMessageChange(value: string): string | void;
  onChatRoomMessageSend(): void;
}

@Component
export default class ChatRoomMessageInput extends Vue implements IChatRoomMessageInput {
  @Prop({ type: String })
  public message?: string

  @Emit()
  public onChatRoomMessageChange(message: string): string {
    return message
  }

  @Emit()
  public onChatRoomMessageSend(): void { }
}
