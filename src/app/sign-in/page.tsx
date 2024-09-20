import SignInForm from './SignInForm'

export default function SignInPage() {
  return (
    <div className="mx-auto flex w-fit flex-col gap-2">
      <h1 className="text-primary text-2xl font-bold">Sign In</h1>
      <hr />
      <SignInForm />
    </div>
  )
}
