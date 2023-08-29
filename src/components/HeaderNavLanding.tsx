import React from 'react';
import Link from "next/link";
import SacramentoText from "~/components/SacramentoText";

const HeaderNav = () => {
  return (
    <div className="absolute flex flex-wrap w-full p-4 justify-between justify-items-between">

      <Link href="/">
        <div className="text-3xl">
          <SacramentoText classNames="text-5xl" text="Vero Lady " />
          <div className="border rounded-full p-2 border-sky-500 bg-sky-300 opacity-75">HHA Services</div>
        </div>
      </Link>
      
      <div>
        <ul className="flex justify-between gap-8">
          <Link className="p-4 text-lg" href="about"> <li>About</li> </Link>
          <Link className="p-4 text-lg" href="services"> <li>Services</li> </Link>
        </ul>
      </div>
    </div>
  )
}

export default HeaderNav
