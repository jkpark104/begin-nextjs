import Image from "next/image";
import os from "os";
import Counter from "../components/Counter";

export default function Home() {
  console.log(os.hostname());
  return (
    <>
      <h1>홈페이지다!!</h1>
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1682687221038-404cb8830901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3987&q=80"
        alt="etc"
        width={400}
        height={400}
      />
    </>
  );
}
