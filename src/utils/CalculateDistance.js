import CalculateXYDistance from "./CalculateXYDistance";

const CalculateDistance = (mousePos, pos) => {
    const d = CalculateXYDistance(mousePos, pos);
    const offset = Math.sqrt(Math.pow(d.x, 2) + Math.pow(d.y, 2));
    return isNaN(offset) ? 0 : offset;
};

export default CalculateDistance;
