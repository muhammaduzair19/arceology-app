import { createContext, useContext, useState } from "react"


const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)
    return (
        <AppContext.Provider
            value={{ isSidebarCollapsed, setIsSidebarCollapsed }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);




export default AppContextProvider