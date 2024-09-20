'use client'

import { useFormState } from 'react-dom'
import { signInAction } from './actions'
import { SignInFormState } from './types'

const initialState: SignInFormState = {}

export default function SignInForm() {
  const [formState, action] = useFormState(signInAction, initialState)

  return (
    <form action={action} className="flex flex-col gap-2">
      <div className="flex w-fit flex-col gap-2">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
        {formState.errors?.username && (
          <p className="text-sm text-red-500">{formState.errors.username}</p>
        )}
      </div>
      <div className="flex w-fit flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        {formState.errors?.password && (
          <p className="text-sm text-red-500">{formState.errors.password}</p>
        )}
      </div>
      {formState.message && (
        <p className="bg-red-300 text-red-500">{formState.message}</p>
      )}
      <button
        type="submit"
        className="border-primary bg-primary self-end rounded-md border-2 px-3 py-2 text-white"
      >
        Sign In
      </button>
    </form>
  )
}
