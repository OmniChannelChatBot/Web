import Vue from 'vue'
import Component from 'vue-class-component'
import { Emit, Prop } from 'vue-property-decorator'
import { OAuthApiServiceClient, SignInCommand } from '@/api/oauth-api-service-client'

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
  @Prop({ type: String })
  public username?: string

  @Prop({ type: String })
  public password?: string

  public loading = false;

  @Emit()
  public onUsernameChange(username: string): string {
    return username
  }

  @Emit()
  public onPasswordChange(password: string): string {
    return password
  }

  @Emit()
  public async onSignInClick():Promise<void> {
    this.loading = true

    const client = new OAuthApiServiceClient()

    const command = new SignInCommand({
      username: this.username!,
      password: this.password!
    })

    await client.signIn(command)

    this.loading = false
  }
}
