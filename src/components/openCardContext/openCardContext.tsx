'use client'

import { createContext } from "react";

export type ContextType = {
    state: boolean,
    setState: Function
}

export const OpenCardContext = createContext<ContextType>({
    state: false,
    setState: () => {}
})