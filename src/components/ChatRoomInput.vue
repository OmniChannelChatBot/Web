<template>
  <v-row align="center">
    <v-col cols="6" md="3">
      <v-text-field
        color="accent"
        placeholder="User"
        :value="control.userId"
        @change="onTextFieldChange"
      />
    </v-col>
    <v-col cols="12" md="9">
      <v-row align="center">
        <v-col>
          <v-textarea
            class="testArea"
            color="accent"
            placeholder="Message"
            auto-grow
            rows="1"
            row-height="15"
            :value="control.message"
            @change="onTextAreaChange"
          />
        </v-col>
        <v-col md="auto">
          <v-btn
            color="accent"
            @click="onButtonClick"
          >
            Send
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    control: {
      type: Object,
      required: true
    }
  },
  methods: {
    onTextFieldChange(text) {
      this.$emit('changeUserId', text)
    },
    onTextAreaChange(text) {
      this.$emit('changeUserMesage', text)
    },
    onButtonClick() {
      this.$emit('clickUserSendMessage')
    }
  }
}
</script>
