import React, { FC } from 'react'
import s from './input.module.css'

export interface InputProps extends
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  React.AriaAttributes {
}

const Input: FC<InputProps> = props => {
  //const ref = useRef<HTMLInputElement>(null)

  return (
    /* props.disabled
      ? <h2 className={s['submitted']}>{ref.current?.value}</h2>
      :  */<input className={s['input']}
                //ref={ref}
                {...props}/>
  )
}
export default Input
