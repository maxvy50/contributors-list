import React, { useRef } from 'react'
import s from './input.module.css'

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, React.AriaAttributes { }

function Input(props: InputProps) {
  const ref = useRef<HTMLInputElement>(null)

  return (
    /* props.disabled
      ? <h2 className={s['submitted']}>{ref.current?.value}</h2>
      :  */<input className={s['input']}
        ref={ref}
        {...props}
      />
  )
}
export default Input
