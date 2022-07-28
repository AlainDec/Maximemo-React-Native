import React, { createContext } from 'react';

export type TContext = {
    tabId: number;
    setTabId: (param: number) => void;
    isFabMemo: number;
    setIsFabMemo: (param: number) => void;
}

export const UserContext = createContext<TContext>({
    tabId: 1,
    setTabId: () => {},
    isFabMemo: 0,
    setIsFabMemo: () => {}
});