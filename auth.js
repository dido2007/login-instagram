import NextAuth from "next-auth"
import InstagramProvider from "next-auth/providers/instagram"
import connectMongo from "@/lib/mongo";
import { MongoDBAdapter } from "@auth/mongodb-adapter";


 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    
  ],
  ...(connectMongo && { adapter: MongoDBAdapter(connectMongo) }),


})