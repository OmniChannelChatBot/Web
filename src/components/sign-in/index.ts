import { OAuthApiServiceClient, SignInCommand } from '@/api/oauth-api-service-client'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Emit } from 'vue-property-decorator'

const config = require('config')

export interface ISignInProps {
  loading: boolean;
  username?: string;
  password?: string;
}

export interface ISignInEvents {
  onUsernameChange(username: string): string | void;
  onPasswordChange(password: string): string | void;
  onSignInClick(): void;
}

@Component
export default class SignIn extends Vue implements ISignInProps, ISignInEvents {
  private oauthApiServiceClient: OAuthApiServiceClient

  public username: string
  public password: string

  public loading: boolean;
  public error: string;

  public constructor() {
    super()
    this.username = ''
    this.password = ''
    this.loading = false
    this.error = ''
    this.oauthApiServiceClient = new OAuthApiServiceClient(config.oauthServiceUrl)
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
  public async onSignInClick(): Promise<void> {
    try {
      this.loading = true
      this.error = ''

      const signInCommand = new SignInCommand({
        username: this.username,
        password: this.password
      })

      await this.oauthApiServiceClient.signIn(signInCommand)

      this.$router.push('/')
      this.loading = false
    } catch ({ message }) {
      this.loading = false
      this.error = message
    }
  }
}
