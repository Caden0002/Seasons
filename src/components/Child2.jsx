import React from 'react';
import { data } from "./Data.js";
import figmaIcon from '/figma.svg';
import canvaIcon from '/canva.svg';

function Child2(props) {
    const { selectedSeason } = props;
    const selectedData = data[selectedSeason];

    const colors = [
        selectedData.background,
        selectedData.background2,
        selectedData.background3,
        selectedData.background4,
    ];

    return (
        <div className="hidden md:block">
            <div style={{ background: selectedData.background2 }}>
                <div className="max-w-screen-xl mx-auto flex justify-center items-center min-h-full pb-20 px-40">
                    <div className="grid grid-cols-3 gap-36 pb-10 border-b" style={{ borderColor: selectedData.background }}>
                        <div className="">
                            <p className="text-3xl text-black font-black pt-8 border-b-4 mb-8" style={{ borderColor: selectedData.background }}>
                                TOOLS
                            </p>
                            <div className="text-base text-white font-bold mb-2">
                                CANVA
                            </div>
                            <img src={canvaIcon} className="w-12 h-12 text-white mb-6" />
                            <div className="text-base text-white font-bold mb-2">
                                FIGMA
                            </div>
                            <a
                                href="https://www.figma.com/file/kGhT6Yjx0AXy5JxclQwhAH/Seasons?type=design&node-id=0-1&mode=design&t=bHLFtFhRkIx1KVaK-0"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={figmaIcon} alt="Figma" className="w-12 h-12 text-white" />
                            </a>
                        </div>

                        <div className="">
                            <p className="text-3xl text-black font-black pt-8 border-b-4 mb-8" style={{ borderColor: selectedData.background }}>
                                FONTS
                            </p>
                            <div className="text-sm text-textColorSecondary font-bold mb-2">
                                Black
                            </div>
                            <div className="text-lg text-white font-bold">
                                Roboto
                            </div>
                            <div className="text-sm text-textColorSecondary font-bold mb-2 mt-6">
                                Medium
                            </div>
                            <div className="text-lg text-white font-bold">
                                Roboto
                            </div>
                            <div className="text-sm text-textColorSecondary font-bold mb-2 mt-6">
                                Regular
                            </div>
                            <div className="text-lg text-white font-bold">
                                Roboto
                            </div>
                        </div>

                        <div className="">
                            <p className="text-3xl text-black font-black pt-8 border-b-4 mb-10" style={{ borderColor: selectedData.background }}>
                                COLORS
                            </p>
                            <div className="flex-col">
                                {colors.map((color, index) => (
                                    <div key={index} className="h-12 w-12 rounded-full mt-[-8px] border-2 border-white" style={{ backgroundColor: color }}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Child2;


