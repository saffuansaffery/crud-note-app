'use client'
import Auth from "./auth";
import PocketBase from 'pocketbase';


export default function Home() {
  const pb = new PocketBase('http://127.0.0.1:8090');

  return (
    <main>
      {/* <h1>Logged in : {pb.authStore.isValid.toString()} </h1> */}
      <Auth />
    </main>
  )
}
