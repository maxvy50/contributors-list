import React, { FC, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Item } from '../api/api';

type Credits = null | Omit<Item, "address">

interface CreditsContextData {
    setCredits: React.Dispatch<React.SetStateAction<Credits>>
    credits: Credits
}


const CreditsContext = React.createContext<CreditsContextData | null>(null);

export function useCreditsContext(): CreditsContextData | null {
    return useContext(CreditsContext)
}

const CreditsContextProvider: FC<PropsWithChildren> = ( { children } ) => {
    const [credits, setCredits] = useState<Credits>(null)

    useEffect(() => 
        console.log(credits)
    , [credits])

    return (
        <CreditsContext.Provider value={{credits, setCredits}}>
            {children}
        </CreditsContext.Provider>
    )
}

export default CreditsContextProvider