import { createContext, useState, type PropsWithChildren } from "react";


type ContextProps = {
    actIdx: number | null
    setActIdx: React.Dispatch<React.SetStateAction<number | null>>
}

export const ListPanelContext = createContext<ContextProps>({
    actIdx: null,
    setActIdx() { },
})


// type State = {
//     actIdx: number | null
//     selectedIdx: number | null
// }

// type Action = {
//     type: 'setActIdx' | 'setSelectedIdx',
//     payload: number
// }

// function panelReducer(state: State, action: Action): State {
//     const { payload } = action
//     if (action.type === 'setActIdx') {
//         return {
//             ...state,
//             actIdx: payload !== state.actIdx ? payload : null
//         }
//     }
//     else if (action.type === 'setSelectedIdx') {
//         return {
//             ...state,
//             selectedIdx: payload !== state.selectedIdx ? payload : null
//         }
//     }
//     return state
// }



export default function ListPanelProvider({ children }: PropsWithChildren) {
    const [actIdx, setActIdx] = useState<number | null>(null)

    return (
        <ListPanelContext.Provider value={{ actIdx, setActIdx }}>
            {children}
        </ListPanelContext.Provider>
    )
}