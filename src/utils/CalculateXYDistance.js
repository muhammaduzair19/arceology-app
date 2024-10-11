const CalculateXYDistance = (mousePos, pos) => {
    const x = mousePos.x - pos.x;
    const y = mousePos.y - pos.y;
    return { x, y };
};

export default CalculateXYDistance;
