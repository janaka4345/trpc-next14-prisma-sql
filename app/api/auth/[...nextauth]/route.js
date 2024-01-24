import NextAuth from "next-auth"

import { authOptions } from "./authOptions"

// export const authOptions = {
//     // Configure one or more authentication providers

// }
export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }