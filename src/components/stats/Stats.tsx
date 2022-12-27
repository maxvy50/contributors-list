import React from 'react'
import s from './stats.module.css'
const numeral = require('numeral')
numeral.register('locale', 'unistory', {
    delimiters: {
        thousands: ', ',
        decimal: '.'
    }
});
numeral.locale('unistory')


type Stat = { label: string; value: number }


export default function Stats() {
    const stats: Stat[] = Array(3).fill({ label: "Lorem ipsum dolor", value: 12345 })

    return (
        <div className={s['container']}>
            <h2 className={s['title']}>Roadmap stats</h2>
            <div>
                {stats.map(({value, label}, i) => 
                    <div className={s['stat']} key={i}>
                        {numeral(value).format('0,0')}
                        <h3>{label}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}
