'use server'

import { signIn } from '@/auth'
import { SignInFormState } from './types'
import { validateSignInForm } from './zod'
import { AuthError } from 'next-auth'

export async function signInAction(
  prevState: SignInFormState,
  formData: FormData,
): Promise<SignInFormState> {
  const { data, errors, message } = validateSignInForm(formData)

  if (errors || message) return { errors, message }

  if (!data) return { errors: {}, message: 'Form validation failed' }

  try {
    await signIn('credentials', { ...data, redirectTo: '/dashboard' })

    return { message: 'Sign in successful' }
  } catch (error) {
    if (error instanceof AuthError) {
      console.error(
        `Authentication Failed: ${error.cause?.err?.message || error.message}`,
      )

      return { message: 'Authentication Failed' }
    }
    throw error // Rethrow all other errors
  }
}
