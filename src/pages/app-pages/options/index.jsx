import { Circle, Image, Layer, Line, Stage, Text } from "react-konva";
import { ChevronDown, ChevronRight, Search, Shovel } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/app-context";
import ZoomRange from "../../../components/zoom-range";

const dropDownMenus = [
    {
        label: "Cuts",
        color: "bg-orange-400",
        items: [
            { tag: "121", itemName: "trench 8 cut" },
            { tag: "129", itemName: "pit cut" },
        ],
    },
    {
        label: "Objects",
        color: "bg-blue-400",
        items: [
            { tag: "C 2023 1", itemName: "Local red shape with molded head" },
            { tag: "C 2023 2", itemName: "late roman red slip bowl" },
        ],
    },
    {
        label: "Structures",
        color: "bg-blue-400",
        items: [
            { tag: "140", itemName: "head of wall 19" },
            { tag: "138", itemName: "head of wall 27" },
        ],
    },
    {
        label: "Coins",
        color: "bg-blue-400",
        items: [
            {
                tag: "1",
                itemName:
                    "Roman,Copper/Bronze Coin, Nummus, 2/2 5th AD - 1/2 6th AD",
            },
            { tag: "2", itemName: "Not Coin" },
        ],
    },
    {
        label: "Photos",
        color: "bg-green-700/70",
        items: [
            {
                tag: "1",
                itemName: "Opening of 16B 118",
            },
            { tag: "2", itemName: "Drawing of Modern Pipe" },
        ],
    },
    {
        label: "Summaries",
        color: "bg-red-400/90",
        items: [
            {
                tag: "1",
                itemName: "Final report 16B (3rd - 21st April 2023) ",
            },
            {
                tag: "2",
                itemName: "NET 16B Final Report 2023 (29 May - 23 June) ",
            },
        ],
    },
    {
        label: "Typography",
        color: "bg-red-400/90",
        items: [{ itemName: "Untitle", tag: "Test Point 11" }],
    },
    {
        label: "Coversation",
        items: [
            {
                tag: "1",
                itemName: "Coin 2023 1 cleaning ",
            },
            {
                tag: "2",
                itemName: "Coin 2023 2 cleaning ",
            },
        ],
    },
    {
        label: "Lots",
        items: [{ itemName: "Deposit", link: "/" }],
    },
    {
        label: "Plans",
        items: [{ itemName: "Deposit", link: "/" }],
    },
];

const DropDownMenu = ({ isCollapsed, label, items, color }) => {
    const [dropMenu, setDropMenu] = useState({});

    return (
        <div
            className={`cursor-pointer w-full flex items-center group  py-1 border
${isCollapsed ? "justify-center" : "justify-start"}
 hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors `}
        >
            <div className="flex flex-col gap-4 w-full overflow-hidden">
                <div
                    onClick={() =>
                        setDropMenu({
                            name: label,
                            isActive: !dropMenu.isActive,
                        })
                    }
                    className={`z-20 group-hover:bg-blue-100 px-2 ${
                        isCollapsed ? "justify-center" : ""
                    } flex  items-center gap-3 overflow-hidden`}
                >
                    <ChevronDown
                        className="w-5 h-5 items-center !text-gray-700"
                        strokeWidth={1}
                    />
                    <p
                        className={`${
                            isCollapsed ? "hidden" : "block"
                        } font-medium text-xs text-gray-700 capitalize`}
                    >
                        {label}
                    </p>
                </div>
                {items.length > 0 && (
                    <div
                        className={`w-full transition-all  duration-300 -mt-3 flex flex-col  ${
                            dropMenu.name === label && dropMenu.isActive
                                ? "translate-y-0 h-full"
                                : "-translate-y-full h-0"
                        }`}
                    >
                        {items?.map(({ itemName, tag }, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex  items-center text-xs text-gray-800 hover:underline border"
                                >
                                    <div
                                        className={`w-14 text-xs font-medium text-center uppercase h-full py-3 ${
                                            color ? color : "bg-green-200"
                                        } flex px-2 items-center`}
                                    >
                                        {tag}
                                    </div>
                                    <div className="flex items-center w-full  py-3 px-2 justify-between">
                                        <span className=" font-semibold text-wrap uppercase">
                                            {itemName}
                                        </span>
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

const Options = () => {
    const [dimension, setDimension] = useState({
        width: 0,
        height: 0,
    });
    const navigate = useNavigate();
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
        setIsAddSectionOpen,
        lines,
        zoom,
        setTrench,
        setLines,
        setCurrentSection,
        currentSection,
    } = useAppContext();

    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [konvaImage, setKonvaImage] = useState(null);

    const fileInputRef = useRef(null);
    let closedShapeCount = 0;

    const handleNewSectionClick = () => {
        setIsAddSectionOpen(true);
    };

    const saveSingleShape = (singleLine) => {
        localStorage.setItem("singleLine", JSON.stringify(singleLine));
        navigate("/points");
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveSection = () => {
        const newSection = { name, image };
        setCurrentSection(newSection);
        setTrench(name);

        localStorage.setItem("currentSection", JSON.stringify(newSection));
        localStorage.removeItem("lines");

        const img = new window.Image();
        img.src = newSection.image;

        img.onload = () => {
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            const newWidth = 500;
            const newHeight = newWidth / aspectRatio;
            setDimension({ width: newWidth, height: newHeight });
            setKonvaImage(img);
        };

        setIsAddSectionOpen(false);
        setName("");
        setImage(null);
        setLines([]);
    };

    useEffect(() => {
        const storedcurrentSection =
            JSON.parse(localStorage.getItem("currentSection")) || {};
        setCurrentSection(storedcurrentSection);
        setTrench(storedcurrentSection.name);

        const img = new window.Image();
        img.src = storedcurrentSection.image;
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
                } bg-blue-50 z-10 shadow-md transition-all ease-in  duration-300 `}
            >
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
                <div
                    className={`flex-grow ${
                        isMenuItemCollapsed ? "hidden md:block" : "block"
                    }`}
                >
                    <div>
                        {dropDownMenus?.map((menu, index) => (
                            <DropDownMenu
                                color={menu.color}
                                key={index}
                                isCollapsed={isMenuItemCollapsed}
                                label={menu.label}
                                items={menu.items}
                            />
                        ))}
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
                        onClick={handleClick}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onTap={handleClick}
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

                            {currentSection?.lines?.map((line, i) => {
                                const points = line.points;
                                let sumX = 0;
                                let sumY = 0;
                                const numPoints = points.length / 2;

                                for (let j = 0; j < points.length; j += 2) {
                                    // x  and y
                                    sumX += points[j];
                                    sumY += points[j + 1];
                                }
                                const midX = sumX / numPoints;
                                const midY = sumY / numPoints;

                                const fontSize = 26;
                                const textWidth = fontSize * 2;
                                const textHeight = fontSize;

                                const isClosed = line.closed || false;

                                let displayText = isClosed
                                    ? (++closedShapeCount).toString()
                                    : `${i + 1}`;

                                return (
                                    <React.Fragment key={i}>
                                        <Line
                                            {...line}
                                            onDblClick={(e) =>
                                                saveSingleShape(e.target.attrs)
                                            }
                                            onDblTap={(e) =>
                                                saveSingleShape(e.target.attrs)
                                            }
                                        />

                                        <Text
                                            fontSize={fontSize}
                                            text={isClosed ? displayText : ""}
                                            fill="white"
                                            fontStyle="bold"
                                            x={midX - textWidth / 5}
                                            y={midY - textHeight / 6}
                                            align="center"
                                            verticalAlign="middle"
                                        />
                                    </React.Fragment>
                                );
                            })}
                        </Layer>
                    </Stage>
                </div>
            </div>
        </>
    );
};

export default Options;
