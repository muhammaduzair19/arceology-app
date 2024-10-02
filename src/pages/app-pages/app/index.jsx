import { useAppContext } from "../../../context/app-context";
import { Image, Layer, Line, Stage } from "react-konva";
import { Search, Shovel } from "lucide-react";
import MenuLink from "./link";
import TagItem from "./tag";
import { useEffect, useRef, useState } from "react";

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
    const {
        isMenuItemCollapsed,
        isPanning,
        stageRef,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        isAddSectionOpen,
        setIsAddSectionOpen,
        lines,
    } = useAppContext();

    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [sections, setSections] = useState({});
    const [konvaImage, setKonvaImage] = useState(null); // To store HTMLImageElement for each section

    const fileInputRef = useRef(null);

    // Open the modal when the "New Section" button is clicked
    const handleNewSectionClick = () => {
        setIsAddSectionOpen(true);
    };

    // Handle file selection and convert it into a canvas image
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result); // Base64 string
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle saving the new section to localStorage and displaying it
    const handleSaveSection = () => {
        const newSection = { name, image };
        setSections(newSection);

        localStorage.setItem("sections", JSON.stringify(newSection));

        const img = new window.Image();
        img.src = newSection.image;

        img.onload = () => {
            setKonvaImage(img);
        };

        setIsAddSectionOpen(false);
        setName("");
        setImage(null);
    };

    // Load stored sections from localStorage on component mount
    useEffect(() => {
        const storedSections = JSON.parse(localStorage.getItem("sections")) || {};
        setSections(storedSections);

        const img = new window.Image();
        img.src = storedSections.image;
        img.onload = () => {
            setKonvaImage(img);
        };
    }, []);

    return (
        <>
            <div
                className={`${
                    isMenuItemCollapsed ? "w-0 md:w-20" : "w-60"
                } bg-indigo-50 z-10 shadow-md transition-all ease-in  duration-300 `}
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
                <div className={`flex-grow ${isMenuItemCollapsed ? "hidden md:block" : "block"}`}>
                    <div>
                        <TagItem label={"Sections"} />
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
                        <MenuLink to={"/features"} id={0} label={"Features Base"} isCollapsed={isMenuItemCollapsed} />
                    </div>
                    <div>
                        <TagItem label={"Context"} />
                        <MenuLink to={"/relations"} id={0} label={"Context 1"} isCollapsed={isMenuItemCollapsed} />
                    </div>

                    <div className={`w-full px-4 ${isMenuItemCollapsed ? "py-5" : "py-2"}`}>
                        <button
                            onClick={handleNewSectionClick}
                            className="w-full flex text-xs items-center gap-2 text-gray-800 bg-gray-200  justify-center p-2 rounded-md"
                        >
                            <Shovel className="w-4 h-4" strokeWidth={1} />
                            <p className={`${isMenuItemCollapsed ? "hidden" : " block"}`}>New Section</p>
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
                            <h2 className="text-lg font-bold mb-4">Add New Section</h2>
                            <input
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border p-2 w-full mb-4"
                            />
                            <input type="file" ref={fileInputRef} onChange={handleImageChange} className="mb-4" />
                            {image && <img src={image} alt="preview" className="mb-4" width={100} />}
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
                        style={{ cursor: isPanning && !isAddSectionOpen ? "grabbing" : "default" }}
                    >
                        <Layer>
                            {konvaImage && (
                                <Image
                                    image={konvaImage}
                                    x={150}
                                    y={50}
                                    width={window.innerWidth}
                                    height={window.innerHeight}
                                />
                            )}

                            {lines.map((line, i) => (
                                <Line
                                    
                                    key={i}
                                    {...line}
                                    stroke="#1F04EB"
                                    fill={'#1F04EB'}
                                    strokeWidth={5}
                                    tension={0.5}
                                    lineCap="round"
                                    lineJoin="round"
                                    onDblClick={() => console.log('sd')
                                    }
                                />
                            ))}
                        </Layer>
                    </Stage>
                </div>
            </div>
           
        </>
    );
};

export default MenuItem;
