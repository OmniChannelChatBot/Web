<template>
  <v-col>
    <v-alert
      text
      prominent
      type="error"
      transition="scale-transition"
      :value="error != ''"
    >
      {{ error }}
    </v-alert>
    <v-card outlined :loading="loading">
      <v-card-title>
        <v-row align="center">
          <v-col cols="10">
            Sign up
          </v-col>
          <v-col cols="2">
            <v-row justify="end">
              <v-hover v-slot:default="{ hover }" close-delay="300">
                <v-btn
                  text
                  icon
                  large
                  :color="hover && 'primary' || null"
                  @click="onSignUpClick"
                >
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </v-hover>
            </v-row>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            id="firstName"
            label="FirstName"
            name="firstName"
            prepend-icon="mdi-account"
            type="text"
            clearable
            :value="firstName"
            @change="onFirstNameChange"
          />
          <v-text-field
            id="lastName"
            label="LastName"
            name="lastName"
            prepend-icon="mdi-account"
            type="text"
            clearable
            :value="lastName"
            @change="onLastNameChange"
          />
          <v-text-field
            id="username"
            label="Username"
            name="username"
            prepend-icon="mdi-account"
            type="text"
            clearable
            :value="username"
            @change="onUsernameChange"
          />
          <v-text-field
            id="password"
            label="Password"
            name="password"
            prepend-icon="mdi-lock"
            type="password"
            clearable
            :value="password"
            @change="onPasswordChange"
          />
          <v-text-field
            id="passwordConfirm"
            label="PasswordConfirm"
            name="passwordConfirm"
            prepend-icon="mdi-lock"
            type="password"
            clearable
            :value="passwordConfirm"
            @change="onPasswordConfirmChange"
          />
          <v-text-field
            id="email"
            label="Email"
            name="email"
            prepend-icon="mdi-email"
            type="email"
            clearable
            :value="email"
            @change="onEmailChange"
          />
        </v-form>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script src="./index.ts" lang="ts"/>
