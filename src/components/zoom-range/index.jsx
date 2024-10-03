import { ZoomIn, ZoomOut } from "lucide-react";
import { useAppContext } from "../../context/app-context";

const ZoomRange = () => {
    const { zoom, setZoom } = useAppContext();

    const SetZoom = (e, newValue) => {
        const value = newValue ?? e.target.value;
        if (value) {
            setZoom(Number(value));
        }
    };

    const increaseZoom = (e) => {
        const currentZoom = zoom;
        const newZoom = currentZoom + 0.5 > 10 ? 10 : currentZoom + 0.5;
        SetZoom(e, newZoom);
    };

    const decreaseZoom = (e) => {
        const currentZoom = zoom;
        const newZoom = currentZoom - 0.5 < 1 ? 1 : currentZoom - 0.5;
        SetZoom(e, newZoom);
    };

    return (
        <div className="flex items-center gap-2">
            {/* ZoomOut Button */}
            <button onClick={decreaseZoom}>
                <ZoomOut strokeWidth={0.75} />
            </button>
            {/* Range Input */}
            <input type="range" min={1} step={1} max={10} value={zoom} onChange={SetZoom} />
            {/* ZoomIn Button */}
            <button onClick={increaseZoom}>
                <ZoomIn strokeWidth={0.75} />
            </button>
        </div>
    );
};

export default ZoomRange;
