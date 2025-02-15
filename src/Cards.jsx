import React from 'react';
import { useState, useEffect } from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import { Link, useLocation } from "react-router-dom";

const Cards = () => {
        const [showIndex, setShowIndex] = useState(0);
        const texts = [
            { small: "Need an extended tech team?", large: "We're your crew" },
            { small: "No tech co-founder?", large: "We'll keep you moving" },
            { small: "Running on strict deadline?", large: "We got you" }
        ];
    
        useEffect(() => {
            const interval = setInterval(() => {
                setShowIndex((prev) => (prev + 1) % texts.length);
            }, 3000); // Change text every 3 seconds
    
            return () => clearInterval(interval); // Cleanup interval on unmount
        }, []);    

    const logos = [
        { 
            name:"Harsh Kushwah",
            id: 1,
            src: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/670e4261906d47fc562dc2b3_logo-4.png",
            clientImage: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fharsh.19aad1df.png&amp;w=128&amp;q=75",
            company: "Founder- Menpsyche.com",
            review: "I used the AI tool created by the team and was highly impressed with their understanding of the users. Their tools was intuitive to use and easy to learn!"
        },
        { 
            name: "Srujan Panuganti", 
            id: 2,
            src: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/670e40b1822e237fb9eae048_logo-2.png",
            clientImage: "path_to_client_image",
            company: "Founder-XAIRO",
            review: "I really liked how they had a very well-structured step by step approach in designing while keeping us in the loop all the time. During the process we went over multiple iterations with a lot of ideas and suggestions coming from both the ends, to get to an output which is pleasing for everyone. Overall, it was great working with CogniMuse and I would highly recommend them."
        },
        { 
            name: "Amb. Harris", 
            id: 3,
            src: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/670e41dfe192fa83448667c4_logo-3.png",
            clientImage: "path_to_client_image",
            company: "Director- HPC Medical Staffing LLC",
            review: "CogniMuse is a fascinating team of professionals that prioritized efficiency and effectiveness in their transactions and interactions with clients." 
        },
        { 
            name: "Raja S Iskala", 
            id: 4,
            src: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67092b02e0a47e061ff6afd2_logo-3.png",
            clientImage: "path_to_client_image",
            company: "Founder- Ganganu",
            review: "The Collaboration with CogniMuse was so good that the output they gave me speaks for it. Throughout the process they value our vision and suggestions. Would love to collaborate with them in future."
        },
        { 
            name: "Dr. Naveen G", 
            id: 5,
            src: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67092b02e0a47e061ff6afd5_logo-5.png",
            clientImage: "path_to_client_image",
            company: "Director- Dhanvith Ventures",
            review: "The team's flexibility and adaptability helped us a lot, as our requirements were not very concrete at the beginning. Their willingness to help us achieve our final objective was very evident. Availability of the team to discuss any changes that were required was also helped us give our observations for bug-fixing/enhancements. Looking forward to working with you guys again."
        },
        { 
            name: "Gokul", 
            id: 6,
            src: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67092b02e0a47e061ff6afd3_logo-4.png",
            clientImage: "path_to_client_image",
            company: "Co-founder, Kadaikodi",
            review: "I reached out to Cognimuse for help with my software MVP, and they impressed me by completing it in just a week. Thanks to their amazing work, I was able to onboard early users and pitch to investors with confidence. I'd love to team up with Cognimuse again to build a scalable product."
        },
        { 
            name: "Ananya Dutta", 
            id: 7,
            src: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/67092b02e0a47e061ff6afcc_logo-2.png",
            clientImage: "path_to_client_image",
            company: "General Motors, Michigan",
            review: "The CogniMuse team was fantastic to work with. They provided regular updates and delivered everything within a very short turnaround time. The team incorporated all of our requirements into the logo and presentation, ensuring high-quality results. Overall, it was a fruitful experience working with the entire CogniMuse team."
        },
        { 
            name: "Suyog V Mahulkar", 
            id: 8,
            src: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7/670e3fe58d63a21410d87491_logo-1.png",
            clientImage: "path_to_client_image",
            company: "President- SFRI",
            review: "I remember that in each discussion, the team was firm about not compromising on quality, and this dedication is reflected in the product that CogniMuse delivered to us. As a result, our website is gaining appreciation from all our members and supporters. I witnessed their zeal and willingness to put in the effort to meet the highest possible standards for the website."
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
            <div className="max-w-7xl w-full text-center mt-16">
            <h1 className="h-[100px] overflow-hidden relative">
                    {texts.map((text, index) => (
                        <div key={index} className={`transition-opacity duration-1000 ${showIndex === index ? 'opacity-100' : 'opacity-0'} absolute w-full`}>
                            <span className="text-2xl md:text-3xl font-semibold">{text.small}</span><br />
                            <span className="text-5xl md:text-6xl font-bold">{text.large}</span>
                        </div>
                    ))}
            </h1>

                <Link to="/studio">
                <button className="mt-12 px-6 py-3 text-white font-semibold relative overflow-hidden hover:text-white transition-colors 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
                    hover:after:w-full after:transition-all after:duration-300">
                    MORE ABOUT US
                </button>
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 w-full max-w-5xl mt-24 mb-12">
                {logos.map((logo) => (
                    <HoverCard.Root key={logo.id}>
                        <HoverCard.Trigger asChild>
                            <div className="flex items-center justify-center cursor-pointer">
                                <img 
                                    src={logo.src} 
                                    alt={logo.name} 
                                    className="w-20 md:w-20 lg:w-24 h-auto filter invert brightness-200" 
                                />
                            </div>
                        </HoverCard.Trigger>
                        <HoverCard.Portal>
                            <HoverCard.Content 
                                className="bg-white text-black p-6 rounded-lg shadow-lg w-80"
                                sideOffset={10}
                                align="center"
                                side="top"
                            >
                                <div className="flex flex-col items-center">
                                    <img 
                                        src={logo.clientImage} 
                                        alt={logo.name} 
                                        className="w-16 h-16 object-cover rounded-full border-2 border-gray-300" 
                                    />
                                    <h2 className="text-lg font-bold mt-4">{logo.name}</h2>
                                    <p className="text-sm text-gray-600">{logo.company}</p>
                                    <p className="mt-4 text-center text-sm text-gray-800">{logo.review}</p>
                                </div>
                                <HoverCard.Arrow className="fill-white" />
                            </HoverCard.Content>
                        </HoverCard.Portal>
                    </HoverCard.Root>
                ))}
            </div>
        </div>
    );
};

export default Cards;
