import React, { PropsWithChildren, useContext, useState } from 'react';
import { Item } from '../api/api';

type Credits = null | Omit<Item, "address">

interface ParticipantContextData {
    setCredits: React.Dispatch<React.SetStateAction<Credits>>
    credits: Credits
    isNotified: boolean,
    setIsNotified: React.Dispatch<React.SetStateAction<boolean>>
}


const ParticipantContext = React.createContext<ParticipantContextData | null>(null);

export function useParticipantContext(): ParticipantContextData | null {
    
    return useContext(ParticipantContext)
}

export default function ParticipantContextProvider({children}: PropsWithChildren) {
    const [credits, setCredits] = useState<Credits>(null)
    const [isNotified, setIsNotified] = useState(false)

    return (
        <ParticipantContext.Provider value={{
            credits, setCredits, 
            isNotified, setIsNotified}}
            >
            {children}
        </ParticipantContext.Provider>
    )
}