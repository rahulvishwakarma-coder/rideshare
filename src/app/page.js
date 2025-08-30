  'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count,setcount] = useState(1);
  return (
    <div>
      <button onClick={() =>setcount(count +1)} className=" cursor-pointer bg-amber-100 text-white rounded-xl">click</button>
      <div>{count} </div>
    </div>
  );
}
