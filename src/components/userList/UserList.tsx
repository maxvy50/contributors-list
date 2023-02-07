import React, { FC, useCallback, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { Item, ItemsBatchRequest, ItemsBatchResponse, API } from '../../api/api';
import s from './userList.module.css'
import { useCreditsContext } from '../../context/CreditsContext';
import User from './user/User';
import { useEthers } from '@usedapp/core';


type ItemHandler = (id: Item['id']) => void


const loader = (
    <span key="loader" className={s['loader']}></span>
);

const UserList: FC = () => {

    const { account } = useEthers()
    const context = useCreditsContext()
    const [list, setList] = useState<Item[]>([])
    const extendedList = (!context || !context.credits /* || !account */)
        ? list
        : [{ ...context.credits, address: account ?? 'wallet not connected' }, ...list]

    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const perPage = 20
    const [isFetching, setIsFetching] = useState(false)
    const loadItemsBatch = useCallback(  //TODO это можно выделить в кастомный хук
        async () => {
            if (isFetching) return;
            setIsFetching(true);
            try {
                const { meta, items } =
                    await API.get<ItemsBatchRequest, ItemsBatchResponse>(new ItemsBatchRequest(page, perPage))
                setList([...list, ...items]);
                if (meta.currentPage < meta.totalPages) {
                    setPage(meta.currentPage + 1)
                    setHasMore(true)
                } else
                    setHasMore(false)

            } finally {
                setIsFetching(false);
            }
        }
        , [list, isFetching, page]);


    const removeItem: ItemHandler = id => {
        context?.setCredits(null)
    }


    if (!context?.credits) return <></>
    return (
        <div className={s['container']}>
            <h2 className={s['title']}>Participation listing (enable only for participants)</h2>
            <div className={s['row']}>
                <span>Name</span><span>Email</span><span>Wallet</span>
            </div>
            <div className={s['table']}>
                <InfiniteScroll
                    pageStart={1}
                    threshold={50}
                    loadMore={loadItemsBatch}
                    hasMore={hasMore}
                    loader={loader}
                    useWindow={false}
                >
                    {extendedList.map(i =>
                        <User key={i.id}
                            item={i}
                            callback={() => removeItem(i.id)} />
                    )}
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default UserList