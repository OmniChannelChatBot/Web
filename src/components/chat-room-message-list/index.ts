import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import ChatRoomMessage from '@/components/chat-room-message/view.vue'
import { IChatRoomMessage } from '../chat-room-message'

export interface IChatRoomMessageList {
  messages?: IChatRoomMessage[]
}

@Component({
  components: {
    ChatRoomMessage
  }
})
export default class ChatRoomMessageList extends Vue implements IChatRoomMessageList {
  @Prop({ type: Array, required: true })
  public messages!: IChatRoomMessage[]
}
