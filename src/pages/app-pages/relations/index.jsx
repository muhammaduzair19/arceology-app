import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/app-context"
import { ChevronLeft } from "lucide-react";
import { Circle, Layer, Line, Rect, Stage, Text } from "react-konva";







const Relations = () => {
    const {
        isMenuItemCollapsed,
        isPanning,
        stageRef,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd
    } = useAppContext();


    // Array of rectangle objects
    const rectangles = [
        { x: 560, y: 200, fill: "#FF0044", width: 80, height: 80, cornerRadius: 30, text: "15", textX: 590, textY: 235, textColor: "#fff" },
        { x: 370, y: 200, fill: "#FF9500", width: 80, height: 80, cornerRadius: 30, text: "17", textX: 400, textY: 235, textColor: "#eee" },
        { x: 600, y: 430, fill: "#7E84A38A", width: 80, height: 80, cornerRadius: 30, rotationDeg: 45, text: "26", textX: 595, textY: 475, textColor: "#fff" },
    ];

    // Array of circle objects
    const circles = [
        { x: 600, y: 80, radius: 50, fill: 'blue', text: 'Test' },
        { x: 300, y: 400, radius: 40, fill: "#04D4EB", text: "17", },
        { x: 430, y: 400, radius: 40, fill: "#04D4EB", text: "16", },
        { x: 700, y: 350, radius: 40, fill: "#04D4EB", text: "1", },
        { x: 800, y: 350, radius: 40, fill: "#04D4EB", text: "2", },
        { x: 900, y: 350, radius: 40, fill: "#04D4EB", text: "3", },
    ];

    return (

        <>
            <div className={`${isMenuItemCollapsed ? 'w-0 md:w-20' : 'w-60'} bg-indigo-50 z-10 shadow-md transition-all ease-in  duration-300 `}>
                <Link to={'/app'} className={`text-gray-600/80 text-xs px-3 font-semibold flex gap-1 items-center mt-2 ${isMenuItemCollapsed ? 'hidden md:flex' : 'flex'}`} >
                    <ChevronLeft strokeWidth={1.5} className="w-4 h-4 text-gray-600/80" />
                    Relations
                </Link>
                <div className={`flex-grow ${isMenuItemCollapsed ? 'hidden md:block' : 'block'}`}>
                    <form className="flex flex-col px-3 mt-4 gap-2">

                        <div className="flex flex-col text-xs text-gray-600" >
                            <label htmlFor="relate-to-layer">Relate to layer</label>
                            <select name="relate-to-layer" className="mt-1 py-1 bg-white px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300">
                                <option value={1} >Context 1</option>
                                <option value={2}  >Context 2</option>
                            </select>
                        </div>
                        <div className="flex flex-col text-xs text-gray-600" >
                            <label htmlFor="position">Position</label>
                            <select name="position" className="mt-1 py-1 bg-white px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300">
                                <option value={"Below"}>Below</option>
                                <option value={"Above"}>Above</option>
                                <option value={"Next to"}>Next to</option>
                                <option value={"After"}>After</option>
                                <option value={"Before"}>Before</option>
                                <option value={"Coeval with"}>Coeval with</option>
                                <option value={"Belongs to"}>Belongs to</option>
                                <option value={"Includes"}>Includes</option>
                            </select>
                        </div>
                        <div className="flex flex-col text-xs text-gray-600" >
                            <label htmlFor="reference">Reference</label>
                            <select name="reference" className="mt-1 py-1 bg-white px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300">
                                <option value={"Untyped"} >Untyped</option>
                                <option value={"Section"} >Section</option>
                                <option value={"Feature"} >Feature</option>
                                <option value={"Context"} >Context</option>
                                <option value={"Object"} >Object</option>
                                <option value={"Image"} >Image</option>
                                <option value={"Drawing"} >Drawing</option>
                                <option value={"Lot"} >Lot</option>
                                <option value={"Other"} >Other</option>
                            </select>
                        </div>
                        <div className="flex flex-col text-xs text-gray-600" >
                            <label htmlFor="feature">Feature</label>
                            <select name="feature" className="mt-1 py-1 bg-white px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300">
                                <option value={"Structure"} >Structure</option>
                                <option value={"Test"} >Test</option>
                            </select>
                        </div>


                    </form>

                </div>

            </div>
            <div className={`w-full h-full ${isMenuItemCollapsed ? "md:pl-24" : "md:pl-64"} py-2 px-4 md:px-8 fixed`}>
                <div className="w-full h-full flex">
                    <Stage
                        ref={stageRef}
                        width={window.innerWidth}
                        height={window.innerHeight}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        draggable={false}
                        style={{ cursor: isPanning ? "grab" : "default" }}
                    >
                        <Layer>
                            {/* Lines for connections */}

                            <Line points={[600, 80, 600, 200]} stroke="gray" strokeWidth={2} dash={[5, 5]} />

                            {/* 15 to 38 */}
                            <Line points={[590, 235, 400, 235]} stroke="gray" strokeWidth={2} dash={[5, 5]} />

                            {/* 15 to 1, 2, 3 */}
                            <Line points={[590, 235, 700, 350]} stroke="gray" strokeWidth={2} dash={[5, 5]} />
                            <Line points={[590, 235, 900, 350]} stroke="gray" strokeWidth={2} dash={[5, 5]} />
                            <Line points={[590, 235, 800, 350]} stroke="gray" strokeWidth={2} dash={[5, 5]} />

                            <Line points={[600, 240, 430, 400]} stroke="gray" dash={[5, 5]} strokeWidth={2} />
                            <Line points={[600, 240, 600, 450]} stroke="gray" dash={[5, 5]} strokeWidth={2} />

                            {/* 17 and 16 */}
                            <Line points={[300, 400, 430, 400]} stroke="gray" strokeWidth={2} dash={[5, 5]} />


                            {rectangles.map((rect, index) => (
                                <React.Fragment key={index}>
                                    <Rect
                                        x={rect.x}
                                        y={rect.y}
                                        width={rect.width}
                                        height={rect.height}
                                        fill={rect.fill}
                                        cornerRadius={rect.cornerRadius}
                                        rotation={rect.rotationDeg || 0}
                                    />
                                    <Text x={rect.textX} y={rect.textY} fill={rect.textColor} text={rect.text} fontSize={15} />
                                </React.Fragment>
                            ))}

                            {circles.map((circle, index) => (
                                <React.Fragment key={index}>
                                    <Circle x={circle.x} y={circle.y} radius={circle.radius} fill={circle.fill} />
                                    <Text x={circle.x - 50} y={circle.y - 10} fontStyle="bold" fill="white" width={100} align="center" text={circle.text} fontSize={15} />
                                </React.Fragment>
                            ))}


                        </Layer>
                    </Stage>
                </div >
            </div>
        </>
    )
}

export default Relations;