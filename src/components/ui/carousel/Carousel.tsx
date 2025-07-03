"use client";
import React, { useRef } from 'react'

export default function Carousel({persons}) {
    const carouselRef = useRef(null);

    // Función para desplazar hacia la izquierda
    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    // Función para desplazar hacia la derecha
    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <div className="relative">
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 text-white p-2 rounded-full hover:bg-indigo-600 z-10"
                >
                    &larr;
                </button>
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 text-white p-2 rounded-full hover:bg-indigo-600 z-10"
                >
                    &rarr;
                </button>

                <div
                    ref={carouselRef}
                    className="flex flex-row gap-2 snap-x snap-mandatory scrollbar-hide overflow-x-hidden"
                >
                    {persons.map((c, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center min-w-[150px] snap-center"
                        >
                            <img
                                src={c.image}
                                alt={c.name}
                                width={70}
                                height={70}
                                className="rounded-full object-cover"
                            />
                            <span className="mt-2 text-center text-sm font-medium">
                                {c.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
