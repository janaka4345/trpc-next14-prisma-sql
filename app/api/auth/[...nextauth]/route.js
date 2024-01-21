import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GIHUB_CLIENT_ID,
            clientSecret: process.env.GIHUB_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
}
export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }