import { shallowMount } from '@vue/test-utils'
import ChatRoomMessage from '@/components/chat-room-message/view.vue'

describe('chat-room-message', () => {
  test('render text message pass', () => {
    const messageText = 'new message'
    const wrapper = shallowMount(ChatRoomMessage, {
      propsData: { owner: true, text: messageText }
    })

    expect(wrapper.text()).toBe(messageText)
  })
})
