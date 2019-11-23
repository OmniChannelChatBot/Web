import { shallowMount } from '@vue/test-utils'
import ChatRoomMessage from '@/components/ChatRoomMessage.vue'

describe('ChatRoomMessage.vue', () => {
  test('render text message pass', () => {
    const messageText = 'new message'
    const wrapper = shallowMount(ChatRoomMessage, {
      propsData: { owner: true, text: messageText }
    })

    expect(wrapper.text()).toBe(messageText)
  })
})
