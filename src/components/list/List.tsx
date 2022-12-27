import React, { SyntheticEvent, useCallback, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { Item, ItemsBatchRequest, ItemsBatchResponse, API } from '../../api/api';
import s from './list.module.css'
import { useParticipantContext } from '../../context/ParticipantContext';
import ItemRow from '../ItemRow/ItemRow';
import { useEthers } from '@usedapp/core';

const loader = (
    <span key="loader" className={s['loader']}></span>
);



export default function List() {

    const { account } = useEthers()
    const [list, setList] = useState<Item[]>([])
    const context = useParticipantContext()
    const extendedList = (!context || !context.credits || !account)
        ? list
        : [{ ...context.credits, address: account }, ...list]


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


    const removeItem = (e: SyntheticEvent, id: Item['id']): void => {
        e.stopPropagation()
        setList(prev => prev.filter(item => item.id !== id))
        console.log(id)
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
                        <ItemRow
                            key={i.id}
                            item={i}
                            callback={removeItem} />
                    )}
                </InfiniteScroll>
            </div>
        </div>
    )
}