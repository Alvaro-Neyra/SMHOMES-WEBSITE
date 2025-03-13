"use client";
import { Building, Home, Users, Award } from 'lucide-react';
import Stats from './Stats';
import { useEffect, useState } from 'react';

const StatsSection = () => {
    const [iconSize, setIconSize] = useState(32);
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setIconSize(64);
            } else if (window.innerWidth >= 1024) {
                setIconSize(48);
            } else if (window.innerWidth >= 768) {
                setIconSize(40);
            } else {
                setIconSize(32);
            }
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const statsData = [
        {
            icon: <Building size={iconSize}/>,
            value: 999,
            title: "Proyectos Completados",
            duration: 2500
        },
        {
            icon: <Home size={iconSize} />,
            value: 720,
            title: "Propiedades Vendidas",
            duration: 2000
        },
        {
            icon: <Users size={iconSize} />,
            value: 750,
            title: "Clientes Satisfechos",
            duration: 2200
        },
        {
            icon: <Award size={iconSize} />,
            value: 120,
            title: "Premios Ganados",
            duration: 1800
        }
    ];

    return <Stats stats={statsData} />;
};

export default StatsSection;