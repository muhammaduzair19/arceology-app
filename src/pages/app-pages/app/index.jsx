import { useAppContext } from "../../../context/app-context";
import { Circle, Image, Layer, Line, Stage, Text } from "react-konva";
import { Search, Shovel } from "lucide-react";
import MenuLink from "./link";
import TagItem from "./tag";
import React, { useEffect, useRef, useState } from "react";
import ZoomRange from "../../../components/zoom-range";
import { useNavigate } from "react-router-dom";

const MenuLinks = [
    {
        id: 0,
        to: "/points",
        label: "Barone",
    },
    {
        id: 1,
        to: "/points",
        label: "Abstergo",
    },
    {
        id: 2,
        to: "/points",
        label: "Big Kahuna",
    },
    {
        id: 3,
        to: "/points",
        label: "Blinford",
    },
    {
        id: 4,
        to: "/points",
        label: "Section C",
    },
    {
        id: 5,
        to: "/points",
        label: "Section D",
    },
    {
        id: 6,
        to: "/points",
        label: "Section E",
    },
];

const MenuItem = () => {
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
                        <TagItem label={"Section"} />
                        {MenuLinks?.map((menu) => (
                            <MenuLink
                                key={menu.id}
                                id={menu.id}
                                to={menu.to}
                                label={menu.label}
                                isCollapsed={isMenuItemCollapsed}
                            />
                        ))}
                    </div>

                    <div>
                        <TagItem label={"Features"} />
                        <MenuLink
                            to={"/features"}
                            id={0}
                            label={"Features Base"}
                            isCollapsed={isMenuItemCollapsed}
                        />
                    </div>
                    <div>
                        <TagItem label={"Context"} />
                        <MenuLink
                            to={"/relations"}
                            id={0}
                            label={"Context 1"}
                            isCollapsed={isMenuItemCollapsed}
                        />
                    </div>
                    <div>
                        <TagItem label={"Options"} />
                        <MenuLink
                            to={"/options"}
                            id={0}
                            label={"Options"}
                            isCollapsed={isMenuItemCollapsed}
                        />
                    </div>

                    <div
                        className={`w-full px-4 ${
                            isMenuItemCollapsed ? "py-5" : "py-2"
                        }`}
                    >
                        <button
                            onClick={handleNewSectionClick}
                            className="w-full flex text-xs items-center gap-2 text-gray-800 bg-gray-200  justify-center p-2 rounded-md"
                        >
                            <Shovel className="w-4 h-4" strokeWidth={1} />
                            <p
                                className={`${
                                    isMenuItemCollapsed ? "hidden" : " block"
                                }`}
                            >
                                New Section
                            </p>
                        </button>
                    </div>
                </div>
                {isAddSectionOpen && (
                    <div
                        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50"
                        onClick={() => setIsAddSectionOpen(false)} // Close modal on backdrop click
                    >
                        <div
                            className="bg-white p-5 rounded-md shadow-lg"
                            onClick={(e) => e.stopPropagation()} // Prevent modal content clicks from closing modal
                        >
                            <h2 className="text-lg font-bold mb-4">
                                Add New Section
                            </h2>
                            <input
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border p-2 w-full mb-4"
                            />
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                className="mb-4"
                            />
                            {image && (
                                <img
                                    src={image}
                                    alt="preview"
                                    className="mb-4"
                                    width={100}
                                />
                            )}
                            <button
                                onClick={handleSaveSection}
                                className="bg-blue-500 text-white p-2 rounded-md w-full"
                            >
                                Save Section
                            </button>
                        </div>
                    </div>
                )}
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

export default MenuItem;
