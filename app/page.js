import Image from "next/image";
import SigninButton from "@/components/auth/SigninButton";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <p> login </p>
        <SigninButton />
    </main>
  );
}
