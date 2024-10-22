import { createContext, useContext, useRef, useState } from "react";
import DrawPolyline from "../utils/DrawPolyline";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMenuItemCollapsed, setIsMenuItemCollapsed] = useState(false);
    const [isPanning, setIsPanning] = useState(false);
    const [isPencilSelect, setIsPencilSelect] = useState(false);
    const [isAddSectionOpen, setIsAddSectionOpen] = useState(false);
    const [trench, setTrench] = useState("");

    const [lines, setLines] = useState(() => {
        try {
            const storedLines = localStorage.getItem("lines");
            return storedLines ? JSON.parse(storedLines) : [];
        } catch (error) {
            console.error("Error parsing localStorage data:", error);
            return [];
        }
    });

    const stageRef = useRef(null);
    const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
    const isDrawing = useRef(false);
    const [history, setHistory] = useState([]);
    const [redoStack, setRedoStack] = useState([]);
    const [zoom, setZoom] = useState(1);

    // BIG SCREENS
    const handleClick = () => {
        const stage = stageRef.current;
        if (isPencilSelect) {
            if (isDrawing.current) {
                const polylines = Array.from(lines);
                const lastPolylines = polylines[polylines.length - 1];
                const newLine = DrawPolyline(
                    stage,
                    lastPolylines,
                    true,
                    isDrawing
                );
                polylines.splice(polylines.length, 1, newLine);
                setLines([...lines, newLine]);
                localStorage.setItem(
                    "lines",
                    JSON.stringify([...lines, newLine])
                );
            } else {
                isDrawing.current = true;
                const newLine = DrawPolyline(stage);
                setLines([...lines, newLine]);
                localStorage.setItem(
                    "lines",
                    JSON.stringify([...lines, newLine])
                );
            }
        }
    };
    const handleMouseDown = () => {
        const stage = stageRef.current;
        if (!isAddSectionOpen && !isPencilSelect) {
            setIsPanning(true);
            const pos = stage.getPointerPosition();
            setLastPos({ x: pos.x, y: pos.y });
        }
    };
    const handleMouseMove = () => {
        const stage = stageRef.current;
        if (!isAddSectionOpen && !isPencilSelect) {
            if (!isPanning) return;
            const pos = stage.getPointerPosition();
            const dx = pos.x - lastPos.x;
            const dy = pos.y - lastPos.y;
            const x = stage.x() + dx;
            const y = stage.y() + dy;
            stage.x(x);
            stage.y(y);
            stage.batchDraw();
            setLastPos(pos);
        }

        if (isPencilSelect) {
            // no drawing - skipping
            if (!isDrawing.current) {
                return;
            }

            const polylines = Array.from(lines);
            const lastPolylines = polylines[polylines.length - 1];
            const newLine = DrawPolyline(stage, lastPolylines);
            polylines.splice(polylines.length - 1, 1, newLine);

            setLines(polylines);
            localStorage.setItem("lines", JSON.stringify(polylines));
        }
    };
    const handleMouseUp = () => {
        if (!isAddSectionOpen && !isPencilSelect) {
            setIsPanning(false);
        }
    };

    //MOBILE
    const handleTouchStart = () => {
        const stage = stageRef.current;
        if (!isAddSectionOpen && !isPencilSelect) {
            setIsPanning(true);
            const pos = stage.getPointerPosition();
            setLastPos({ x: pos.x, y: pos.y });
        }
    };
    const handleTouchMove = () => {
        const stage = stageRef.current;
        if (!isAddSectionOpen && !isPencilSelect) {
            if (!isPanning) return;
            const pos = stage.getPointerPosition();
            const dx = pos.x - lastPos.x;
            const dy = pos.y - lastPos.y;

            stage.x(stage.x() + dx);
            stage.y(stage.y() + dy);
            stage.batchDraw();

            setLastPos(pos);
        }
        if (isPencilSelect) {
            // no drawing - skipping
            if (!isDrawing.current) {
                return;
            }

            const polylines = Array.from(lines);
            const lastPolylines = polylines[polylines.length - 1];
            const newLine = DrawPolyline(stage, lastPolylines);
            polylines.splice(polylines.length - 1, 1, newLine);

            setLines(polylines);
        }
    };
    const handleTouchEnd = () => {
        if (!isAddSectionOpen && !isPencilSelect) {
            setIsPanning(false);
        }
    };
    const handleUndo = () => {
        if (lines.length === 0) return;
        const newLines = [...lines];
        const removedLine = newLines.pop();
        setRedoStack([...redoStack, removedLine]);
        setHistory([...history, lines]);
        setLines(newLines);
    };
    const handleRedo = () => {
        if (redoStack.length === 0) return;
        const newRedoStack = [...redoStack];
        const restoredLine = newRedoStack.pop();
        setLines([...lines, restoredLine]);
        setRedoStack(newRedoStack);
    };

    return (
        <AppContext.Provider
            value={{
                isSidebarCollapsed,
                isMenuItemCollapsed,
                isPanning,
                stageRef,
                isPencilSelect,
                isAddSectionOpen,
                lines,
                history,
                redoStack,
                zoom,
                trench,
                setTrench,
                setIsSidebarCollapsed,
                setIsMenuItemCollapsed,
                setIsPanning,
                handleMouseDown,
                handleMouseMove,
                handleMouseUp,
                handleTouchStart,
                handleTouchMove,
                handleTouchEnd,
                setIsPencilSelect,
                setIsAddSectionOpen,
                setLines,
                handleUndo,
                handleRedo,
                setHistory,
                setRedoStack,
                setZoom,
                handleClick,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
