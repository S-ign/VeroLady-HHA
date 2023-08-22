import React from 'react';
import Link from "next/link";
import SacramentoText from "~/components/SacramentoText";

const HeaderNav = () => {
  return (
    <div className="flex flex-wrap w-full p-4 justify-between justify-items-between bg-zinc-100">

      <Link href="/">
        <div className="text-3xl">
          <SacramentoText text="Vero Lady " />
          <div className="border rounded-full p-2 border-sky-500 bg-sky-300 opacity-75">HHA Services</div>
        </div>
      </Link>
      
      <div>
        <ul className="flex justify-between gap-8">
          <div className="flex border border-2 rounded-2xl border-sky-500 transition hover:bg-white">
            <Link className="flex flex-wrap text-2xl p-2 items-center" href="get-started"> <li>Get Started</li> </Link>
          </div>
          <Link className="p-4 text-lg" href="about"> <li>About</li> </Link>
          <Link className="p-4 text-lg" href="services"> <li>Services</li> </Link>
        </ul>
      </div>
    </div>
  )
}

export default HeaderNav
