import { AppLoadRequestEffect } from './app-load.request.effect';
import { LoginButtonSubmitEffect } from './login-button-submit.effect';
import { LoginSuccessEffect } from './login-success-effect';
import { LogoutButtonSubmitEffect } from './logout-button-submit.effect';
import { ProductLoadEffect } from './product-load.effect';
import { SigUpButtonSubmitEffect } from './signup-button-submit.effect';
import { SignUpSuccessEffect } from './signup-success.effect';

export const registeredEffects = {
  LoginButtonSubmitEffect,
  LoginSuccessEffect,
  SigUpButtonSubmitEffect,
  SignUpSuccessEffect,
  ProductLoadEffect,
  LogoutButtonSubmitEffect,
  AppLoadRequestEffect,
};
