import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  // Configure one or more authentication providers

  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          // Validate the credentials using our own APIs
          const { email, password } = credentials;

          // const response = await fetch("/auth/login", {
          //   email,
          //   password,
          // });

          // Destructure the user details from the response
          // const { results: user } = response.data;

          return {
            email,
            name: "Nilanchal Patra",
            type: "devlopers-purpose-only",
          };
        } catch (e) {
          // Rejecting this callback with an Error will redirect the user to the error page along with the error message as a query parameter
          throw new Error(e.response.data.message);
        }
      },
    }),
  ],

  /** Session Config */
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
  },

  callbacks: {
    async jwt({ token, account }) {
      console.log(" token : ", token, "account : ", account);
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },

    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
