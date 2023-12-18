import Register from "./register";
import Login from "./login"
import PocketBase from 'pocketbase';

export default function Home() {
  const pb = new PocketBase('http://127.0.0.1:8090');
  return (
    <main>
      <Register />
      {pb.authStore.model && (
        <Login />
      )}
    </main>
  )
}
