import React, { FC, PropsWithChildren, useContext, useState } from 'react';
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


const CreditsContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [credits, setCredits] = useState<Credits>(null)

    return (
        <CreditsContext.Provider value={{ credits, setCredits }}>
            {children}
        </CreditsContext.Provider>
    )
}

export default CreditsContextProvider