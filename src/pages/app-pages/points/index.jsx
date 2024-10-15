import { Link } from "react-router-dom";
import { Circle, Image, Layer, Line, Stage, Text } from "react-konva";
import { useAppContext } from "../../../context/app-context";
import { ChevronLeft, Search, X } from "lucide-react";
import PointLink from "./link";
import React, { useEffect, useState } from "react";
import TagItem from "./tag";
import ZoomRange from "../../../components/zoom-range";

const PointsLinks = [
    {
        id: 0,
        to: "/app",
        label: "Point One",
    },
    {
        id: 1,
        to: "/app",
        label: "Point Two",
    },
    {
        id: 2,
        to: "/app",
        label: "Point Three",
    },
    {
        id: 3,
        to: "/app",
        label: "Point Four",
    },
    {
        id: 4,
        to: "/app",
        label: "Point Five",
    },
    {
        id: 5,
        to: "/app",
        label: "Point Six",
    },
    {
        id: 6,
        to: "/app",
        label: "Point Seven",
    },
    {
        id: 7,
        to: "/app",
        label: "Point Eight",
    },
];

const Points = () => {
    const [dimension, setDimension] = useState({
        width: 0,
        height: 0,
    });
    const [points, setPoints] = useState(() => {
        try {
            const storedPoints = localStorage.getItem("points");
            return storedPoints ? JSON.parse(storedPoints) : {};
        } catch (error) {
            console.log(error);
        }
    });

    console.log(points);

    const {
        isMenuItemCollapsed,
        isPanning,
        stageRef,
        handleClick,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        isAddSectionOpen,
        zoom,
    } = useAppContext();

    const [konvaImage, setKonvaImage] = useState(null);
    const [sections, setSections] = useState({});

    useEffect(() => {
        const storedSections =
            JSON.parse(localStorage.getItem("sections")) || {};
        setSections(storedSections);

        const img = new window.Image();
        img.src = storedSections.image;
        img.onload = () => {
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            const newWidth = 500;
            const newHeight = newWidth / aspectRatio;
            setDimension({ width: newWidth, height: newHeight });
            setKonvaImage(img);
        };
    }, []);

    return (
        <>
            <div
                className={`${
                    isMenuItemCollapsed ? "w-0 md:w-20" : "w-60"
                } fixed  bg-indigo-50 top-12 z-10 h-full shadow-md transition-all ease-in  duration-300 overflow-auto `}
            >
                <Link
                    to={"/app"}
                    className="text-gray-600/80 text-xs px-3 font-semibold flex gap-1 items-center mt-2"
                >
                    <ChevronLeft
                        strokeWidth={1.5}
                        className="w-4 h-4 text-gray-600/80"
                    />
                    Back
                </Link>
                <div
                    className={`${
                        isMenuItemCollapsed ? "hidden" : "block"
                    } px-4 py-2 w-full flex items-center gap-2 mt-3`}
                >
                    <Search className="w-4 h-4 text-gray-500" />
                    <input
                        type="search"
                        placeholder="Search.."
                        className="bg-transparent focus:outline-none text-xs w-full"
                    />
                </div>
                <div className="flex-grow flex flex-col gap-8">
                    <div>
                        <TagItem label={"Sections"} />
                        {points["points"]?.map((point, index) => (
                            <PointLink
                                key={index}
                                label={`Point ${index + 1}`}
                                isCollapsed={isMenuItemCollapsed}
                            />
                        ))}
                    </div>
                    <div
                        className={`w-full px-4 ${
                            isMenuItemCollapsed ? "py-5" : "py-2"
                        }`}
                    >
                        <button className="w-full flex text-xs items-center gap-2 text-white bg-blue-600  justify-center p-2 rounded-md">
                            <X className="w-4 h-4" strokeWidth={1} />
                            <Link
                                to={"/app"}
                                className={`${
                                    isMenuItemCollapsed ? "hidden" : " block"
                                }`}
                            >
                                <p>Close Polygon</p>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`w-full h-full ${
                    isMenuItemCollapsed ? "md:pl-24" : "md:pl-64"
                } py-2 px-4 md:px-8 fixed`}
            >
                {konvaImage && <ZoomRange />}
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
                        style={{
                            cursor:
                                isPanning && !isAddSectionOpen
                                    ? "grabbing"
                                    : "default",
                        }}
                    >
                        <Layer>
                            {konvaImage && (
                                <Image
                                    x={
                                        (window.innerWidth -
                                            dimension.width * zoom) /
                                        2
                                    }
                                    y={
                                        (window.innerHeight -
                                            dimension.height * zoom) /
                                        2
                                    }
                                    image={konvaImage}
                                    width={dimension.width * zoom}
                                    height={dimension.height * zoom}
                                />
                            )}
                            

                            <Line {...points} />
                        </Layer>
                    </Stage>
                </div>
            </div>
        </>
    );
};

export default Points;
