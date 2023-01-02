import React, { FC, PropsWithChildren, useContext, useState } from 'react';

interface GlobalContextData {
    setIsNotified: React.Dispatch<React.SetStateAction<boolean>>
    isNotified: boolean
}

const GlobalContext = React.createContext<GlobalContextData | null>(null);

export function useGlobalContext(): GlobalContextData | null {
    return useContext(GlobalContext)
}

const GlobalContextProvider: FC<PropsWithChildren> = ( { children } ) => {
    const [isNotified, setIsNotified] = useState(false)

    return (
        <GlobalContext.Provider value={{isNotified, setIsNotified}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider