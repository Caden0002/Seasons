import { data } from "./Data.js";
import { FaPagelines, FaCanadianMapleLeaf, FaSun, FaSnowflake } from 'react-icons/fa';
import React from "react";
import figmaIcon from '/figma.svg';


const SpringIcon = <FaPagelines />; // Change to a flower icon
const SummerIcon = <FaSun />;
const AutumnIcon = <FaCanadianMapleLeaf />;
const WinterIcon = <FaSnowflake />;

function Child(props) {
    const { selectedSeason, onSeasonChange } = props;
    const selectedData = data[selectedSeason];

    return (
        // Component Container
        <div style={{ background: selectedData.background2 }}>
            <div className="max-w-screen-xl mx-auto flex justify-center items-center md:min-h-screen">
                <div className="place-self-center">


                    {/* MOBILE VIEW*/}

                    <div className="md:hidden flex flex-col justify-center items-center min-h-screen">
                        <div className="text-center">
                            <p className="text-xl mb-4">Optimized for laptop and larger screens</p>
                        </div>
                        <div className="text-center">
                            <a
                                href="https://www.figma.com/file/kGhT6Yjx0AXy5JxclQwhAH/Seasons?type=design&node-id=0-1&mode=design&t=bHLFtFhRkIx1KVaK-0"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={figmaIcon} alt="Figma" className="w-12 h-12 text-white" />
                            </a>
                        </div>
                    </div>


                    <div className="hidden md:block">
                        {/* Container into 12 columns */}
                        <div className="grid grid-cols-12" style={{ background: selectedData.background, boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
                            {/*  image */}
                            <div className="col-span-5">
                                <img src={selectedData.linkToImage} alt="Hero Image" className="object-fill w-full" />
                            </div>
                            {/*  content */}
                            <div className="col-span-7 text-left place-self-center">
                                {/*  header */}
                                <h1 className="text-5xl font-light whitespace-pre-line leading-tight text-left">
                                    {selectedData.header}
                                </h1>
                                {/*  header2 */}
                                <p className="text-5xl font-black whitespace-pre-line leading-tight">
                                    {selectedData.header2}
                                </p>
                                {/* Button header */}
                                <p className={`text-sm font-bold mt-4 border-t-2 pt-8 pb-4`} style={{ borderColor: selectedData.background2 }}>
                                    Seasons
                                </p>
                                {/* buttons */}
                                <div className="flex justify-center">
                                    <div className="flex space-x-14">
                                        {Object.keys(data).map((season) => (
                                            <div key={season}>
                                                <button
                                                    onClick={() => onSeasonChange(season)}
                                                    style={{
                                                        background: selectedSeason === season ? selectedData.background2 : '',
                                                        color: selectedSeason === season ? 'white' : 'darkslategrey',
                                                    }}
                                                    className={`text-2xl py-3 px-3 rounded-lg`}
                                                >
                                                    {season === "spring" && SpringIcon}
                                                    {season === "summer" && SummerIcon}
                                                    {season === "autumn" && AutumnIcon}
                                                    {season === "winter" && WinterIcon}
                                                </button>
                                                <p className="text-xs text-black font-bold text-center mt-2">{season}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Child;
