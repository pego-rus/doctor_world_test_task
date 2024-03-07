'use client'

import React, { useState } from "react";
import { OpenCardContext } from "./openCardContext";

export const OpenContextFirstProvider = ({ children } : { children: React.ReactNode }) => {

    const [openState, setOpenState] = useState<boolean>(false);

    return(
        <OpenCardContext.Provider value={{
            state: openState,
            setState: setOpenState
        }}>
            {children}
        </OpenCardContext.Provider>
    )
}

export const OpenContextSecondProvider = ({ children } : { children: React.ReactNode }) => {

    const [openState, setOpenState] = useState<boolean>(false);

    return(
        <OpenCardContext.Provider value={{
            state: openState,
            setState: setOpenState
        }}>
            {children}
        </OpenCardContext.Provider>
    )
}