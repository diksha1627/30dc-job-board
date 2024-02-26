import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { createHash } from 'crypto';

export const authOptions: any = {
 providers: [
  GoogleProvider({
   clientId: '671233571571-gn54tn6g8mi3m67kvg30rlgdd6c7uaot.apps.googleusercontent.com',
   clientSecret: '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',
  }),
 ],
 session: {
  strategy: 'jwt',
  maxAge: 3600,
  destroyAccessTokens: true,
 },
 secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET || createHash('sha256').update(Math.random().toString()).digest('hex'),

};

export default NextAuth(authOptions);