import React from 'react'
import s from './banner.module.css'
import { paragraphPlaceholder } from '../../index'

type JSXContentReducer = (res: string, child: string | JSX.Element) => string


function Banner({ children }: { children: JSX.Element }) {

    const reducer: JSXContentReducer = ((res, child) => {
        let text = typeof child === 'string' ? child :
            child.props.children
        return res + text;
    })
    // mainText -- строковый эквивалент содержимого div.main-text, 
    // необходим для маски текста над картинкой планеты
    const mainText = children.props.children.reduce(reducer, '');

    return (
        <div className={s['container']}>
            <div className={s["orbit"]}></div>
            <h1 className={s['text']} data-text-mask={mainText}>
                {children}
            </h1>
            <p className={s['description-text']}>
                {paragraphPlaceholder}
            </p>
        </div>
    )
}

export default Banner;
