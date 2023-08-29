import React from 'react';
import { Sacramento } from 'next/font/google'

const sacramento = Sacramento({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

const SacramentoText = (props: {text: string, classNames: string}) => {
  return (
      <div className="flex justify-center justify-items-center">
         <div className={props.classNames}>
           <div className={sacramento.className}> {props.text} </div> 
         </div>
      </div>
  )
}

export default SacramentoText

