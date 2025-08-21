import { createContext, useState, type PropsWithChildren } from "react";


type ContextProps = {
    actIdx: number | null
    setActIdx: React.Dispatch<React.SetStateAction<number | null>>
}

export const ListPanelContext = createContext<ContextProps>({
    actIdx: null,
    setActIdx() { },
})




export default function ListPanelProvider({ children }: PropsWithChildren) {
    const [actIdx, setActIdx] = useState<number | null>(null)

    return (
        <ListPanelContext.Provider value={{ actIdx, setActIdx }}>
            {children}
        </ListPanelContext.Provider>
    )
}