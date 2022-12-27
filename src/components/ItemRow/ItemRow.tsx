import React, { SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'
import { Item } from '../../api/api'
import s from './itemRow.module.css'
//FIXME эти стили общие со стилем заголовков таблицы
//они только для разметки столбцов -- лучше переделать, но я не успеваю :)
import tableStyles from '../list/list.module.css' 

type ItemRowProps = {
    item: Item
    callback: (e: SyntheticEvent, id: Item['id']) => void
}

export default function ItemRow({ item, callback }: ItemRowProps ) {
    
    
    return (
        <div className={`${s['item']} ${tableStyles['row']} ${item.id === 'new' ? s['inactive'] : ''}`}
            key={item.id}
        >
            <Link to={`/id/${item.id}`}>
                <span>{item.username}</span>
                <span>{item.email}</span>
                <span>{item.address}</span>
            </Link>
            <button className={s['remove-btn']}
                onClick={e => callback(e, item.id)}>&times;</button>
        </div>
    )
}
