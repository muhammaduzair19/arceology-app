import { createContext, useContext, useRef, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
    const [isMenuItemCollapsed, setIsMenuItemCollapsed] = useState(true);
    const [isPanning, setIsPanning] = useState(false);
    const [isPencilSelect, setIsPencilSelect] = useState(false);
    const [isAddSectionOpen, setIsAddSectionOpen] = useState(false);
    const [lines, setLines] = useState([]);
    const stageRef = useRef(null);
    const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
    const isDrawing = useRef(false);
    const [history, setHistory] = useState([]); // Store drawing history
    const [redoStack, setRedoStack] = useState([]); // Store redo history

    // BIG SCREENS
    const handleMouseDown = () => {
        const stage = stageRef.current;
        if (!isAddSectionOpen && !isPencilSelect) {
            setIsPanning(true);
            const pos = stage.getPointerPosition();
            setLastPos({ x: pos.x, y: pos.y });
        }
        if (isPencilSelect) {
            isDrawing.current = true;
            const pos = stage.getPointerPosition();
            setLines([...lines, { points: [pos.x + -1 * stage.x(), pos.y + -1 * stage.y()] }]);
        }
    };

    const handleMouseMove = () => {
        if (!isAddSectionOpen && !isPencilSelect) {
            if (!isPanning) return;
            const stage = stageRef.current;
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
            const stage = stageRef.current;
            const point = stage.getPointerPosition();

            let lastLine = lines[lines.length - 1];

            // add point
            lastLine.points = lastLine.points.concat([point.x + -1 * stage.x(), point.y + -1 * stage.y()]);

            // replace last
            lines.splice(lines.length - 1, 1, lastLine);
            setLines(lines.concat());
        }
    };

    const handleMouseUp = () => {
        if (!isAddSectionOpen && !isPencilSelect) {
            setIsPanning(false);
        }
        if (isPencilSelect) {
            isDrawing.current = false;
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
        if (isPencilSelect) {
            console.log(isPencilSelect, '<= touch start');
            
            isDrawing.current = true;
            const pos = stage.getPointerPosition();
            setLines([...lines, { points: [pos.x + -1 * stage.x(), pos.y + -1 * stage.y()] }]);
        }
    };

    const handleTouchMove = () => {
        if (!isAddSectionOpen && !isPencilSelect) {
            if (!isPanning) return;
            const stage = stageRef.current;
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
            const stage = stageRef.current;
            const point = stage.getPointerPosition();

            let lastLine = lines[lines.length - 1];

            // add point
            lastLine.points = lastLine.points.concat([point.x + -1 * stage.x(), point.y + -1 * stage.y()]);

            // replace last
            lines.splice(lines.length - 1, 1, lastLine);
            setLines(lines.concat());
        }
    };

    const handleTouchEnd = () => {
        if (!isAddSectionOpen && !isPencilSelect) {
            setIsPanning(false);
        }
        if (isPencilSelect) {
            isDrawing.current = false;
        }
    };

    // Undo the last line
    const handleUndo = () => {
        if (lines.length === 0) return; // No lines to undo
        const newLines = [...lines];
        const removedLine = newLines.pop(); // Remove the last line
        setRedoStack([...redoStack, removedLine]); // Add the removed line to the redo stack
        setHistory([...history, lines]); // Update history
        setLines(newLines); // Update lines state
    };

    // Redo the last undone line
    const handleRedo = () => {
        if (redoStack.length === 0) return; // No lines to redo
        const newRedoStack = [...redoStack];
        const restoredLine = newRedoStack.pop(); // Restore the last undone line
        setLines([...lines, restoredLine]); // Update lines state
        setRedoStack(newRedoStack); // Update redo stack
    };

    return (
        <AppContext.Provider
            value={{
                isSidebarCollapsed,
                setIsSidebarCollapsed,
                isMenuItemCollapsed,
                setIsMenuItemCollapsed,
                isPanning,
                setIsPanning,
                stageRef,
                handleMouseDown,
                handleMouseMove,
                handleMouseUp,
                handleTouchStart,
                handleTouchMove,
                handleTouchEnd,
                isPencilSelect,
                setIsPencilSelect,
                isAddSectionOpen,
                setIsAddSectionOpen,
                lines,
                setLines,
                handleUndo,
                handleRedo,
                history,
                setHistory,
                redoStack,
                setRedoStack,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
