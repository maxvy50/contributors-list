import React, { FC } from 'react'
import s from './button.module.css'

export interface ButtonProps extends 
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    React.AriaAttributes  {}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button className={s['button']} {...props}>
            {children}
        </button>
    )
}

export default Button
