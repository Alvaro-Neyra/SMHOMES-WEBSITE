"use client";
import { StatItemProps } from "@/app/utils/interfaces";
import React, { useState, useEffect, useRef } from 'react';

const StatItem: React.FC<StatItemProps> = ({ icon, value, title, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const node = ref.current;
        if (node) {
            observer.observe(node);
        }
        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, []);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        if (isVisible) {
            const startAnimation = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const percentage = Math.min(progress / duration, 1);
                const currentCount = Math.floor(percentage * value);

                setCount(currentCount);

                if (percentage < 1) {
                    animationFrame = requestAnimationFrame(startAnimation);
                }
            };

            animationFrame = requestAnimationFrame(startAnimation);
        }

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isVisible, value, duration]);

    return (
        <div ref={ref} className="flex flex-col items-center p-4 sm:p-6">
            <div className="flex items-center mb-2 xl:mb-[2vw]">
                <div className="text-primaryBackground mr-3 text-xl xl:mr-[1vw]">
                    {icon}
                </div>
                <span className="text-3xl sm:text-4xl xl:text-[3vw] font-bold">{count}</span>
            </div>
            <h3 className="text-lg sm:text-xl xl:text-[2vw] font-medium text-center">{title}</h3>
        </div>
    );
};

export default StatItem;