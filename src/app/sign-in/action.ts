'use server'

import { SignInFormState } from './types'
import { validateSignInForm } from './zod'

export async function signInAction(
  prevState: SignInFormState,
  formData: FormData,
): Promise<SignInFormState> {
  const { data, errors, message } = validateSignInForm(formData)

  if (errors || message) return { errors, message }

  if (!data) return { errors: {}, message: 'Form validation failed' }

  try {
    console.log('Attempting to sign in with:', data)
    return {}
  } catch (err) {
    console.error('Sign in failed:', err)
    return { errors: {}, message: 'Sign in failed' }
  }
}
