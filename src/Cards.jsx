import React from 'react';

const Cards = () => {
    const logos = [
        { 
            name: "DEEI", 
            id: 1,
            src:"https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/670e4261906d47fc562dc2b3_logo-4.png"
        },
        { 
            name: "Bilg", 
            id: 2,
            src: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/670e40b1822e237fb9eae048_logo-2.png"
        },
        { 
            name: "MCDN", 
            id: 3,
            src: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/670e41dfe192fa83448667c4_logo-3.png" 
        },
        { 
            name: "CUBE", 
            id: 4,
            src: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67092b02e0a47e061ff6afd2_logo-3.png"
        },
        { 
            name: "Albor", 
            id: 5,
            src: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67092b02e0a47e061ff6afd5_logo-5.png"
        },
        { 
            name: "R", 
            id: 6,
            src: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67092b02e0a47e061ff6afd3_logo-4.png"
        },
        { 
            name: "MOVE", 
            id: 7,
            src: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67092b02e0a47e061ff6afcc_logo-2.png"
        },
        { 
            name: "RIDE", 
            id: 8,
            src: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/670e3fe58d63a21410d87491_logo-1.png"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
            <div className="max-w-7xl w-full text-center mt-16">
                <h1 className="text-[50px] leading-[1.1] font-bold">
                    Ups™ Founded in 2019, this agency<br />
                    focuses on building, launching,<br />
                    and revitalizing brands.
                </h1>

                <button className="mt-12 px-6 py-3 text-white font-semibold relative overflow-hidden hover:text-white transition-colors 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
                    hover:after:w-full after:transition-all after:duration-300">
                    MORE ABOUT US
                </button>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 w-full max-w-5xl mt-24 mb-12">
                {logos.map((logo) => (
                    <div key={logo.id} className="flex items-center justify-center">
                        <img src={logo.src} alt={logo.name} className="w-20 md:w-20 lg:w-24 h-auto filter invert brightness-200" /> {/* Added image tag */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;