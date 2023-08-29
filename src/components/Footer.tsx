import React from 'react';
import SacramentoText from "~/components/SacramentoText";


const Footer = () => {
  return (
  <div className="flex flex-col bg-slate-500 gap-4">
    <hr className="h-8 bg-slate-700 border-0"/>
      
    <div className="flex flex-col justify-center justify-items-center items-center text-3xl">
      <SacramentoText classNames="text-5xl" text="Vero Lady " />
      <div className="border rounded-full p-2 border-sky-500 bg-sky-300 opacity-75">HHA Services</div>
    </div>

    <hr className="h-px my-8 bg-sky-400 border-0"/>
    <div className="flex flex-col justify-center justify-items-center items-center">
      <div>Office Hours</div>
      <div>Monday - Friday 8am to 5pm EST</div>
    </div>
    <hr className="h-px my-8 bg-sky-400 border-0"/>

    <div className="flex justify-items-around justify-around h-16">
      <div>Lucita Dover, Owner</div>
      <div>(772) 453-3524</div>
      <div>lucita.dover@gmail.com</div>
    </div>
  </div>
  )
}

export default Footer
