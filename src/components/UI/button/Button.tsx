import React from 'react'
import s from './button.module.css'

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <button className={s['button']} {...props}>
            {children}
        </button>
    )
}
