import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Emit } from 'vue-property-decorator'

export type ChatRoomInputControlType = {
  userName: string;
  userMessage: string;
}

export interface IChatRoomInput {
  control?: ChatRoomInputControlType;
  onUserNameChange(userName: string): string | void;
  onUserMessageChange(userMessage: string): string | void;
  onSendMessageClick(): void;
}

@Component
export default class ChatRoomInput extends Vue implements IChatRoomInput {
  @Prop({ type: Object, required: true })
  public control?: ChatRoomInputControlType

  @Emit()
  public onUserNameChange(userName: string): string {
    return userName
  }

  @Emit()
  public onUserMessageChange(userMessage: string): string {
    return userMessage
  }

  @Emit()
  public onSendMessageClick(): void { }
}
