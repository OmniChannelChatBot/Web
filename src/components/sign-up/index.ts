import { OAuthApiServiceClient, SignUpCommand, UserType } from '@/api/oauth-api-service-client'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Emit } from 'vue-property-decorator'

const config = require('config')

export interface ISignUpProps {
  loading: boolean;
  username?: string;
  password?: string;
}

export interface ISignUpEvents {
  onUsernameChange(username: string): string | void;
  onPasswordChange(password: string): string | void;
  onSignUpClick(): void;
}

@Component
export default class SignUp extends Vue implements ISignUpProps, ISignUpEvents {
  private oauthApiServiceClient: OAuthApiServiceClient
  private passwordConfirm: string

  public username: string
  public password: string
  public email: string
  public firstName: string
  public lastName: string

  public loading: boolean;
  public error: string;

  public constructor() {
    super()
    this.oauthApiServiceClient = new OAuthApiServiceClient(config.oauthServiceUrl)
    this.passwordConfirm = ''

    this.username = ''
    this.password = ''
    this.email = ''
    this.firstName = ''
    this.lastName = ''
    this.loading = false
    this.error = ''
  }

  @Emit()
  public onFirstNameChange(firstName: string): string {
    this.firstName = firstName
    return firstName
  }

  @Emit()
  public onLastNameChange(lastName: string): string {
    this.lastName = lastName
    return lastName
  }

  @Emit()
  public onUsernameChange(username: string): string {
    this.username = username
    return username
  }

  @Emit()
  public onPasswordChange(password: string): string {
    this.password = password
    return password
  }

  @Emit()
  public onPasswordConfirmChange(passwordConfirm: string): string {
    this.passwordConfirm = passwordConfirm
    return passwordConfirm
  }

  @Emit()
  public onEmailChange(email: string): string {
    this.email = email
    return email
  }

  @Emit()
  public async onSignUpClick(): Promise<void> {
    try {
      this.loading = true
      this.error = ''

      const signUpCommand = new SignUpCommand({
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        email: this.email,
        type: UserType._1
      })

      await this.oauthApiServiceClient.signUp(signUpCommand)

      this.$router.push('/sign-in')
      this.loading = false
    } catch ({ message }) {
      this.loading = false
      this.error = message
    }
  }
}
