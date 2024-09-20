import NextAuth, { DefaultSession } from 'next-auth'
import credentials from 'next-auth/providers/credentials'
import { NextResponse } from 'next/server'

const db = [
  {
    id: '1',
    name: 'John Doe',
    username: 'user1',
    password: 'password1',
  },
]

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      accessToken: string
      idToken: string
      refreshToken: string
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession['user']
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    signIn(input) {
      console.log('signIn callback', JSON.stringify(input, null, 2))
      return true
    },
    authorized: async ({ auth, request }) => {
      if (request?.nextUrl?.pathname.startsWith('/dashboard')) {
        return !!auth
      }

      return true
    },
    session({ session, token, user }) {
      // `session.user.address` is now a valid property, and will be type-checked
      // in places like `useSession().data.user` or `auth().user`
      return {
        ...session,
        user: {
          ...session.user,
          accessToken: 'fake-access-token',
          refreshToken: 'fake-refresh-token',
          idToken: 'fake-id-token',
        },
      }
    },
  },
  providers: [
    credentials({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials, request) => {
        let user = null

        user = db.find(
          (user) =>
            user.username === credentials.username &&
            user.password === credentials.password,
        )

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error('User not found.')
        }

        // return user object with their profile data
        return { ...user }
      },
    }),
  ],
})
