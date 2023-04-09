import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const providers = [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  }),
];

export const authOptions: AuthOptions = {
  providers,
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
  },
};

export default NextAuth(authOptions);
