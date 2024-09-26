import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/app-context"
import { ChevronLeft, ChevronRight, Trash } from "lucide-react";
import { Circle, Layer, Line, Rect, Stage, Text } from "react-konva";
import React from "react";
import TagItem from "../app/tag";







const Features = () => {
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


    const rectangles = [
        { x: 560, y: 200, fill: "#545454", width: 80, height: 80, cornerRadius: 30, text: "15", textX: 590, textY: 235, textColor: "#fff" },
        { x: 370, y: 200, fill: "#A4A4A4", width: 80, height: 80, cornerRadius: 30, text: "17", textX: 400, textY: 235, textColor: "#eee" },
        { x: 600, y: 430, fill: "#BDBDBD", width: 80, height: 80, cornerRadius: 30, rotationDeg: 45, text: "26", textX: 595, textY: 475, textColor: "#fff" },
    ];

    const circles = [
        { x: 600, y: 80, radius: 50, fill: '#262626', text: 'Test' },
        { x: 300, y: 400, radius: 40, fill: "#989898", text: "17", },
        { x: 430, y: 400, radius: 40, fill: "#989898", text: "16", },
        { x: 700, y: 350, radius: 40, fill: "#989898", text: "1", },
        { x: 800, y: 350, radius: 40, fill: "#989898", text: "2", },
        { x: 900, y: 350, radius: 40, fill: "#989898", text: "3", },
    ];


    return (
        <>
            <div className={`${isMenuItemCollapsed ? 'w-0 md:w-20' : 'w-60'} bg-indigo-50 z-10 shadow-md transition-all ease-in  duration-300 `}>
                <Link to={'/app'} className={`text-gray-600/80 text-xs px-3 font-semibold flex gap-1 items-center mt-2 ${isMenuItemCollapsed ? 'hidden md:flex' : 'flex'}`} >
                    <ChevronLeft strokeWidth={1.5} className="w-4 h-4 text-gray-600/80" />
                    Feature
                </Link>
                <div className={`flex-grow ${isMenuItemCollapsed ? 'hidden md:block' : 'block'}`}>
                    <form className="flex flex-col px-3 mt-4 gap-2">
                        <TagItem label={'General'} />
                        <div className="flex flex-col text-xs text-gray-600" >
                            <label htmlFor="trench">Trench</label>
                            <input type="text" className="mt-1 py-1 px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300" placeholder="Test" />
                        </div>
                        <div className="flex flex-col text-xs text-gray-600" >
                            <label htmlFor="type">Type</label>
                            <select name="type" className="mt-1 py-1 px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300">
                                <option value={1} >1</option>
                                <option value={2}  >2</option>
                            </select>
                        </div>
                        <div className="flex flex-col text-xs text-gray-600" >
                            <label htmlFor="trench">Number</label>
                            <input type="number" className="mt-1 py-1 px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300" placeholder="Test" />
                        </div>
                        <div className="flex flex-col text-xs text-gray-600" >
                            <label htmlFor="title">Title</label>
                            <input type="text" className="mt-1 py-1 px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300" placeholder="Ebony clay structure" />
                        </div>
                        <div className="flex flex-col text-xs text-gray-600" >
                            <label htmlFor="start">Start</label>
                            <input type="datetime-local" className="mt-1 py-1 px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300" placeholder="Test" />
                        </div>
                        <div className="flex flex-col text-xs text-gray-600" >
                            <label htmlFor="end">End</label>
                            <input type="datetime-local" className="mt-1 py-1 px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300" placeholder="Test" />
                        </div>
                        <TagItem label={'Points'} />
                        <div className="flex flex-col text-xs text-gray-600" >
                            <label htmlFor="outline">Outline</label>
                            <div className="mt-1 overflow-hidden  rounded-sm md:rounded-[4px] border border-gray-300 bg-white flex items-center justify-center py-3 px-2" >
                                <span className={`${isMenuItemCollapsed ? 'hidden' : 'block'} bg-gray-200 p-2 rounded-full flex justify-center items-center`} >
                                    <Trash className={`w-3 h-3 `} />
                                </span>
                                <input type="text" className="w-full h-full py-1 px-2 focus:outline-none" placeholder="Polygon, 46 points" />
                                <span>
                                    <ChevronRight className="w-3 h-3" />
                                </span>
                            </div>
                            <button
                                className="w-full bg-blue-900 text-white py-1 rounded-full mt-2 flex justify-center gap-2"
                            >
                                <span>New</span>
                                <span className={`${isMenuItemCollapsed ? 'hidden' : 'block'}`} >Outline</span>
                            </button>
                        </div>
                        <div className="flex flex-col text-xs text-gray-600" >
                            <label htmlFor="description">Description</label>
                            <input type="text" className="mt-1 py-1 px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300" placeholder="Ebony clay structure" />
                        </div>
                        <div className="flex flex-col text-xs text-gray-600" >
                            <label htmlFor="content">Content</label>
                            <input type="text" className="mt-1 py-1 px-2 focus:outline-none rounded-sm md:rounded-[4px] border border-gray-300" placeholder="Ebony clay structure" />
                        </div>
                        <div className={`w-full flex ${isMenuItemCollapsed ? "flex-col gap-3" : "flex-row gap-1"} justify-between text-xs  mt-3`} >
                            <button className="px-2 w-full bg-gray-300 text-gray-700 py-1.5 rounded-[4px]" >Cancel</button>
                            <button className="px-2 w-full bg-blue-700 text-white py-1.5 rounded-[4px]" >Done</button>
                        </div>

                    </form>

                </div>

            </div>
            <div className={`w-full h-full ${isMenuItemCollapsed ? "md:pl-24" : "md:pl-64"} py-2 px-4 md:px-8 fixed`}>
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
            </div>
        </>
    )
}

export default Features;