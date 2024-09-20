import { auth } from '@/auth'

export default async function UserSession() {
  const session = await auth()

  if (!session?.user) return null
  return <p>{JSON.stringify(session, null, 2)}</p>
}
