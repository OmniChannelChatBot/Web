import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { IChatRoomMessage } from '../chat-room-message'
import ChatRoomMessage from '@/components/chat-room-message/view.vue'

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
  public messages?: IChatRoomMessage[]
}
