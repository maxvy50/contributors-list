import React, { FC, FormEventHandler, useRef } from 'react'
import Button from '../UI/button/Button';
import s from './userForm.module.css'
import { paragraphPlaceholder } from '../../index';
import Input from '../UI/input/Input';
import { useCreditsContext } from '../../context/CreditsContext';
import { useEthers } from '@usedapp/core';



const UserForm: FC = () => {

    const { account } = useEthers()

    const context = useCreditsContext()
    const isSubmitted = context?.credits !== null

    const nameInputRef = useRef<string>('')
    const emailInputRef = useRef<string>('')

    const submit: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        context?.setCredits({ 
            id: 'new', 
            username: nameInputRef.current, 
            email: emailInputRef.current,
        })
    }

    return (
        <div className={s['container']}>
            <h2 className={s['title']}>Beta test registration</h2>
            <p className={s['description']}>{paragraphPlaceholder}</p>

            <form onSubmit={submit}>
                <h3 className={s['label']}>Name</h3>
                {isSubmitted
                    ? <h2 className={s['submitted']}>{context?.credits?.username}</h2>
                    : <Input onChange={(e) => nameInputRef.current = e.target.value}
                        type={'text'}
                        required={true}
                        placeholder={'We will display your name in participation list'} />
                }
                <h3 className={s['label']}>Email</h3>
                {isSubmitted
                    ? <h2 className={s['submitted']}>{context?.credits?.email}</h2>
                    : <Input onChange={(e) => emailInputRef.current = e.target.value}
                        type={'email'}
                        required={true}
                        placeholder={'We will display your email in participation list'} />
                }
                <div className={s['spacer']} />
                <Button disabled={isSubmitted /* || !account */ }>
                    {isSubmitted ? 'List me to the table' : 'Get early access'}
                </Button>
            </form>
        </div>
    )
}

export default UserForm
