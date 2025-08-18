import { createContext, useState, type PropsWithChildren } from "react";



export const NavContext = createContext({
    active: false,
    toggleActive: () => { },
})




export default function NavProvider({ children }: PropsWithChildren) {
    const [active, setActive] = useState(false)
    const toggleActive = () => setActive(prev => !prev)
    return (
        <NavContext.Provider value={{ active, toggleActive }}>
            {children}
        </NavContext.Provider>
    )
}