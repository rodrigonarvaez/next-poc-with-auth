import { z } from 'zod'
import { SignInFormState } from './types'

const SignInFormSchema = z.object({
  username: z
    .string({ required_error: 'Username is required' })
    .min(1, { message: 'Username cannot be empty' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, { message: 'Password cannot be empty' }),
})

export function validateSignInForm(data: FormData): SignInFormState {
  try {
    const validatedFields = SignInFormSchema.safeParse({
      username: data.get('username') as string,
      password: data.get('password') as string,
    })

    console.log('Validated fields:', validatedFields)

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Validation failed',
      }
    }

    return {
      data: validatedFields.data,
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        errors: error.flatten().fieldErrors,
        message: 'Validation error',
      }
    }
    throw error
  }
}
