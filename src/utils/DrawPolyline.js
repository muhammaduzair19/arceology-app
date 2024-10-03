import CalculateDistance from "./CalculateDistance";

const DrawPolyline = (stage, polyline, update=false, isDrawing) => {
    const pointerPos = stage.getPointerPosition();
    if (pointerPos) {
        const stageX =  -1 * stage.x();
        const stageY = -1 * stage.y();
        const pointerX = pointerPos.x + stageX;
        const pointerY = pointerPos.y + stageY;
        if (polyline) {
            const points = Array.from(polyline.points);
            const pointsLength = points.length;
            let newPolyline = {
                ...polyline
            }
            if (update) {
                const threshold = 5;
                const dis = CalculateDistance(
                    {
                        x:pointerX,
                        y:pointerY
                    },
                    {
                        x:points[0],
                        y:points[1]
                    }
                );
                if (dis <= threshold) {
                    
                    points.splice(points.length,0, points[0],points[1]);
                    newPolyline = {
                        ...newPolyline,
                        fill:'#9a8ef6',
                        closed:true
                    }
                    isDrawing.current = false;
                }else{
                    points.splice(points.length, 0, pointerX, pointerY);
                }
            }else{
                pointsLength !== 2
                ? points.splice(points.length - 2, 2, pointerX, pointerY)
                : points.splice(points.length, 0, pointerX, pointerY);
            }
            newPolyline = {
                ...newPolyline,
                points,
            };
            return newPolyline;
        } else {
            const points = [pointerX, pointerY];
            return {
                points,
                stroke: "#1F04EB",
                strokeWidth: 2,
                lineJoin: "round",
                lineCap: "round",
            };
        }
    }
    throw new Error("Can not find pointer position");
};

export default DrawPolyline;
