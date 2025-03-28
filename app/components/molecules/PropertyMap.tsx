"use client";
import React, { useEffect, useState, useCallback } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Geocoder, geocoders } from "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

interface PropertyMapProps {
    coordinates: { lat: number; lng: number };
    address?: string;
    onCoordinatesChange: (coordinates: { lat: number; lng: number }) => void;
}

const PropertyMap = ({ coordinates, address, onCoordinatesChange }: PropertyMapProps) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [searchError, setSearchError] = useState("");
    const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
    const [marker, setMarker] = useState<L.Marker | null>(null);

    const updateMarker = useCallback((lat: number, lng: number, map: L.Map) => {
        if (marker) {
            marker.setLatLng([lat, lng]);
        } else {
            const customIcon = L.divIcon({
                className: "custom-map-marker",
                html: `<div class="w-10 h-10 rounded-full flex justify-center items-center bg-blackSoft 2xl:w-20 2xl:h-20">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 2xl:w-12 2xl:h-12">
                            <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#D7BF66" stroke-width="2"/>
                            <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#D7BF66" stroke-width="2"/>
                        </svg>
                    </div>`,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            });

            const newMarker = L.marker([lat, lng], {
                icon: customIcon,
                draggable: true
            }).addTo(map);

            newMarker.on("dragend", () => {
                const newPos = newMarker.getLatLng();
                onCoordinatesChange({ lat: newPos.lat, lng: newPos.lng });
            });

            setMarker(newMarker);
        }

        if (address && marker) {
            marker.bindPopup(`<b>${address}</b>`).openPopup();
        }
    }, [marker, address, onCoordinatesChange]);

    const tryGoogleGeocoding = useCallback(async (query: string, map: L.Map) => {
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(query)}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
            );
            
            const data = await response.json();
            
            if (data.results && data.results.length > 0) {
                const location = data.results[0].geometry.location;
                map.setView([location.lat, location.lng], 18);
                updateMarker(location.lat, location.lng, map);
                onCoordinatesChange({ lat: location.lat, lng: location.lng });
                return true;
            } else {
                setSearchError("No se encontró la dirección. Intente con más detalles.");
                return false;
            }
        } catch (error) {
            console.error("Google Geocoding error:", error);
            setSearchError("Error al conectar con el servicio de búsqueda.");
            return false;
        }
    }, [updateMarker, onCoordinatesChange]);

    const handleManualSearch = useCallback(async () => {
        if (!searchQuery.trim() || !mapInstance) return;

        setIsSearching(true);
        setSearchError("");

        try {
            const nominatimGeocoder = new geocoders.Nominatim({
                geocodingQueryParams: {
                    "accept-language": "es",
                    countrycodes: "mx",
                    limit: 5,
                    addressdetails: 1,
                    "namedetails": 1
                }
            });

            const results = await nominatimGeocoder.geocode(searchQuery);
            
            if (results.length > 0) {
                const bestResult = results[0];
                mapInstance.setView(bestResult.center, 18);
                updateMarker(bestResult.center.lat, bestResult.center.lng, mapInstance);
                onCoordinatesChange({ lat: bestResult.center.lat, lng: bestResult.center.lng });
                setSearchQuery(bestResult.name);
            } else {
                await tryGoogleGeocoding(searchQuery, mapInstance);
            }
        } catch (error) {
            setSearchError("Error al buscar la dirección. Intente con más detalles.");
            console.error("Geocoding error:", error);
        } finally {
            setIsSearching(false);
        }
    }, [searchQuery, mapInstance, updateMarker, onCoordinatesChange, tryGoogleGeocoding]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mapContainer = document.getElementById("property-map");
        if (!mapContainer) return;

        const map = L.map(mapContainer).setView([coordinates?.lat || 21.1619, coordinates?.lng || -86.8515], 13);
        setMapInstance(map);

        L.tileLayer(`https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${process.env.NEXT_PUBLIC_STADIA_API_KEY}`, {
            maxZoom: 19,
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>',
        }).addTo(map);

        const nominatimGeocoder = new geocoders.Nominatim({
            geocodingQueryParams: {
                "accept-language": "es",
                countrycodes: "mx",
                limit: 5,
                addressdetails: 1,
                "namedetails": 1
            }
        });

        const geocoderControl = new Geocoder({
            defaultMarkGeocode: false,
            geocoder: nominatimGeocoder,
            position: "topright",
            placeholder: "Buscar dirección exacta...",
            errorMessage: "No se encontraron resultados",
            showResultIcons: true,
            collapsed: false
        }).addTo(map);

        geocoderControl.on("markgeocode", (event) => {
            const { center, name } = event.geocode;
            map.setView(center, 18);
            updateMarker(center.lat, center.lng, map);
            onCoordinatesChange({ lat: center.lat, lng: center.lng });
            setSearchQuery(name);
            setSearchError("");
        });

        map.on("click", (e) => {
            updateMarker(e.latlng.lat, e.latlng.lng, map);
            onCoordinatesChange({ lat: e.latlng.lat, lng: e.latlng.lng });
        });

        if (coordinates?.lat && coordinates?.lng) {
            updateMarker(coordinates.lat, coordinates.lng, map);
        }

        return () => {
            map.remove();
            setMapInstance(null);
        };
    }, [coordinates, address, onCoordinatesChange, updateMarker]);

    if (!coordinates || isNaN(coordinates.lat) || isNaN(coordinates.lng)) {
        return (
            <div className="w-full h-[40vh] md:h-[60vh] rounded-lg overflow-hidden bg-blackSoft30 flex items-center justify-center">
                <div className="text-center p-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 mx-auto text-primaryBackground mb-2 2xl:w-12 2xl:h-12"
                    >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <p className="text-gray-300 2xl:text-xl">Coordenadas no válidas</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ej. Avenida Reforma 123, Ciudad de México"
                    className="flex-1 p-3 bg-blackSoft30 border border-primaryBackground border-opacity-30 rounded-lg text-white focus:border-primaryBackground focus:outline-none"
                    onKeyDown={(e) => e.key === "Enter" && handleManualSearch()}
                />
                <button
                    onClick={handleManualSearch}
                    disabled={isSearching || !mapInstance}
                    className="px-4 bg-primaryBackground text-white rounded-lg disabled:opacity-50"
                >
                    {isSearching ? "Buscando..." : "Buscar"}
                </button>
            </div>
            
            {searchError && <p className="text-red-400">{searchError}</p>}
            
            <div
                id="property-map"
                className="w-full h-[40vh] md:h-[60vh] 2xl:h-[80vh] rounded-lg overflow-hidden bg-blackSoft30 z-10"
            ></div>
            
            <p className="text-sm text-gray-400">
                Consejo: Arrastre el marcador para ajustar la ubicación exacta o haga clic en el mapa.
            </p>
        </div>
    );
};

export default PropertyMap;