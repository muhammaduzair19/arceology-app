import { useAppContext } from "../../../context/app-context"
import { Circle, Layer, Line, Rect, Stage, Text } from "react-konva";
import { Search, Shovel } from "lucide-react";
import MenuLink from "./link";
import TagItem from "./tag";
import React from "react";




const MenuLinks = [
    {
        id: 0,
        to: '/points',
        label: 'Barone',
    },
    {
        id: 1,
        to: '/points',
        label: 'Abstergo',
    },
    {
        id: 2,
        to: '/points',
        label: 'Big Kahuna',
    },
    {
        id: 3,
        to: '/points',
        label: 'Blinford',
    },
    {
        id: 4,
        to: '/points',
        label: 'Section C',
    },
    {
        id: 5,
        to: '/points',
        label: 'Section D',
    },
    {
        id: 6,
        to: '/points',
        label: 'Section E',
    },
    {
        id: 7,
        to: '/points',
        label: 'Section F',
    },
    {
        id: 8,
        to: '/points',
        label: 'Room 1',
    },
    {
        id: 9,
        to: '/points',
        label: 'Room 2',
    },
]





const MenuItem = () => {
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
                <div className={`${isMenuItemCollapsed ? 'hidden' : 'block'} px-4 py-2 w-full flex items-center gap-2 mt-3`} >
                    <Search className="w-4 h-4 text-gray-500" />
                    <input type="search" placeholder="Search.." className="bg-transparent focus:outline-none text-xs w-full" />
                </div>
                <div className={`flex-grow ${isMenuItemCollapsed ? 'hidden md:block' : 'block'}`}>

                    <div>
                        <TagItem label={'Sections'} />
                        {
                            MenuLinks?.map((menu) => (
                                <MenuLink
                                    key={menu.id}
                                    id={menu.id}
                                    to={menu.to}
                                    label={menu.label}
                                    isCollapsed={isMenuItemCollapsed}
                                />)
                            )
                        }
                    </div>

                    <div>
                        <TagItem label={'Features'} />

                        <MenuLink
                            to={'/features'}
                            id={0}
                            label={"Features Base"}
                            isCollapsed={isMenuItemCollapsed}
                        />
                    </div>
                    <div>
                        <TagItem label={'Context'} />

                        <MenuLink
                            to={'/relations'}
                            id={0}
                            label={"Context 1"}
                            isCollapsed={isMenuItemCollapsed}
                        />
                    </div>

                    <div className={`w-full px-4 ${isMenuItemCollapsed ? 'py-5' : 'py-2'}`}>
                        <button className="w-full flex text-xs items-center gap-2 text-gray-800 bg-gray-200  justify-center p-2 rounded-md" >
                            <Shovel className="w-4 h-4" strokeWidth={1} />
                            <p className={`${isMenuItemCollapsed ? 'hidden' : ' block'}`} >New Section</p>
                        </button>
                    </div>
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

export default MenuItem;