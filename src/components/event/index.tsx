import React from "react";
import Image from "next/image";
import Event1 from "@/assets/images/event1.png";
import Event2 from "@/assets/images/event2.png";

const events = [
    {
        id: 1,
        title: "HIMTI IT Fest Competition 4.0",
        image: Event1,
        link: "/event1",
    },
    {
        id: 2,
        title: "HIMTI GO!",
        image: Event2,
        link: "/event2",
    }
];

const SectionEvent = () => {
    return (
        <div className="w-full max-w-[1400px] mx-auto p-8 bg-dark-himti rounded-lg text-white">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-brand-main text-4xl m-0">Upcoming Events</h2>
                    <p className="text-[#6B7588]">Here are some events that will be held by HIMTI Paramadina in the near future</p>
                </div>
                <a href="/events" className="text-brand-main flex items-center">
                    see all events
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#66FF00" className="w-6 h-6 transform rotate-[-50deg]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15M15 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
            <div className="flex overflow-x-hidden gap-8 p-4 bg-dark-himti">
                {events.map(event => (
                    <div key={event.id} className="bg-dark-himti rounded-lg text-center min-w-[300px] flex-none shadow-xl relative">
                        <Image src={event.image} alt={event.title} width={610} height={400} className="w-full rounded-t-lg object-cover" />
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-left p-4 rounded-b-lg">
                            <h3 className="text-brand-main">{event.title}</h3>
                        </div>
                        <a href={event.link} className="absolute bottom-4 right-4 bg-[#121316] p-2 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#66FF00" className="w-6 h-6 transform rotate-[5deg]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18l12-12m0 0v8.25m0-8.25H9.75" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionEvent;
