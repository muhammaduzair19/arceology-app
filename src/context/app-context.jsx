import { createContext, useContext, useRef, useState } from "react"


const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
    const [isMenuItemCollapsed, setIsMenuItemCollapsed] = useState(true);
    const [isPanning, setIsPanning] = useState(false);
    const stageRef = useRef(null);
    const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

    const handleMouseDown = () => {
        setIsPanning(true);
        const stage = stageRef.current;
        const pos = stage.getPointerPosition();
        setLastPos({ x: pos.x, y: pos.y });
    };

    const handleMouseMove = () => {
        if (!isPanning) return;

        const stage = stageRef.current;
        const pos = stage.getPointerPosition();
        const dx = pos.x - lastPos.x;
        const dy = pos.y - lastPos.y;

        stage.x(stage.x() + dx);
        stage.y(stage.y() + dy);
        stage.batchDraw();

        setLastPos(pos);
    };

    const handleMouseUp = () => {
        setIsPanning(false);
    };

    const handleTouchStart = (e) => {
        setIsPanning(true);
        const stage = stageRef.current;
        const pos = stage.getPointerPosition();
        setLastPos({ x: pos.x, y: pos.y });
    };

    const handleTouchMove = () => {
        if (!isPanning) return;

        const stage = stageRef.current;
        const pos = stage.getPointerPosition();
        const dx = pos.x - lastPos.x;
        const dy = pos.y - lastPos.y;

        stage.x(stage.x() + dx);
        stage.y(stage.y() + dy);
        stage.batchDraw();

        setLastPos(pos);
    };

    const handleTouchEnd = () => {
        setIsPanning(false);
    };



    return (
        <AppContext.Provider
            value={{ isSidebarCollapsed, setIsSidebarCollapsed, isMenuItemCollapsed, setIsMenuItemCollapsed, isPanning, setIsPanning, stageRef, handleMouseDown, handleMouseMove, handleMouseUp, handleTouchStart, handleTouchMove, handleTouchEnd }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);




export default AppContextProvider