import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

export interface IChatRoomMessage {
    owner?: boolean;
    text?: string;
}

@Component
export default class ChatRoomMessage extends Vue implements IChatRoomMessage {
    @Prop({ type: Boolean, required: true })
    public owner?: boolean

    @Prop({ type: String, required: true })
    public text?: string
}
