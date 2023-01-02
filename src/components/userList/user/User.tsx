import React, { FC, MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import { Item } from '../../../api/api'
import s from './user.module.css'
import tableStyles from '../userList.module.css' 


interface UserProps {
    item: Item
    callback: () => void
}

const User: FC<UserProps> = ( { item, callback } ) => {   
    
    const remove: MouseEventHandler<HTMLButtonElement> = e => {
        e.stopPropagation()
        callback()
    }
    
    return (
        <div className={`${s['item']} ${tableStyles['row']} ${item.id === 'new' ? s['inactive'] : ''}`}
            key={item.id}
        >
            <Link to={`/id/${item.id}`}>
                <span>{item.username}</span>
                <span>{item.email}</span>
                <span>{item.address}</span>
            </Link>
            {item.id === 'new' &&
            <button className={s['remove-btn']}
                onClick={(e) => remove(e)}>&times;</button>}
        </div>
    )
}

export default User