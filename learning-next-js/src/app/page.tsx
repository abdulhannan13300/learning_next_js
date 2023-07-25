//every component in src/app is a server component
"use client"; //convert server component to client component

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    //Dynamic Route
    push(`/prediction/${inputVal}`);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-300 ">
      <div className="bg-slate-950 shadow-sm p-14 rounded-md">
        <div className="">
          <h1> Enter Your Name</h1>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            className="text-black p-2 rounded-md "
            type="text"
            placeholder="Type your name..."
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
          />
          <button
            className=" mt-4 p-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
            type="submit"
          >
            {" "}
            Predict Data
          </button>
        </form>
      </div>
    </div>
  );
}
