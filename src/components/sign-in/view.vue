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
            Sign in
          </v-col>
          <v-col cols="2">
            <v-row justify="end">
              <v-hover
                v-slot:default="{ hover }"
                close-delay="300"
              >
                <v-btn
                  text
                  icon
                  large
                  :color="hover && 'primary' || null"
                  @click="onSignInClick"
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
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-container>
          <v-row justify="center">
            <router-link to="/sign-up">
              Don't have an account yet? Sign up
            </router-link>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script src="./index.ts" lang="ts"/>
