"use client";
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";
import { PropertyMapProps } from "@/app/utils/interfaces";

const PropertyMap: React.FC<PropertyMapProps> = ({ coordinates, address }) => {
    useEffect(() => {
        const mapContainer = document.getElementById("property-map");
        if (!mapContainer) return;

        if (!coordinates || !coordinates.lat || !coordinates.lng) {
            return;
        }

        const map = L.map("property-map").setView([coordinates.lat, coordinates.lng], 15);

        L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png", {
            maxZoom: 19,
            attribution:
                '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>',
        }).addTo(map);

        const customIcon = L.divIcon({
            className: "custom-map-marker",
            html: `<div class="w-10 h-10 rounded-full flex justify-center items-center bg-blackSoft 2xl:w-20 2xl:h-20"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 2xl:w-12 2xl:h-12"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#D7BF66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#D7BF66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
        });

        const marker = L.marker([coordinates.lat, coordinates.lng], { icon: customIcon }).addTo(map);

        if (address) {
            marker.bindPopup(
                `<b class="2xl:text-3xl">${address}</b>`,
                {
                    className: "custom-popup",
                }
            ).openPopup();
        }

        return () => {
            map.remove();
        };
    }, [coordinates, address]);

    if (!coordinates || isNaN(coordinates.lat) || isNaN(coordinates.lng)) {
        return (
            <div className="w-full h-[40vh] md:h-[60vh] rounded-lg overflow-hidden bg-blackSoft30 flex items-center justify-center">
                <div className="text-center p-4">
                    <MapPin className="mx-auto text-primaryBackground mb-2 2xl:w-16 2xl:h-16" size={32} />
                    <p className="text-gray-300 2xl:text-xl">Coordenadas no válidas</p>
                </div>
            </div>
        );
    }

    return (
        <div
            id="property-map"
            className="w-full h-[40vh] md:h-[60vh] 2xl:h-[80vh] rounded-lg overflow-hidden bg-blackSoft30 z-10"
        ></div>
    );
};

export default PropertyMap;