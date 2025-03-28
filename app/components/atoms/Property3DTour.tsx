"use client";
import { useState } from 'react';

interface Property3DTourProps {
    matterportUrl?: string;
}

const Property3DTour: React.FC<Property3DTourProps> = ({ matterportUrl }) => {
    const [is3DTourVisible, setIs3DTourVisible] = useState(false);

    if (!matterportUrl) return null;

    return (
        <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4 border-b border-primaryBackground border-opacity-30 pb-2">
                Recorrido Virtual 3D
            </h3>

            <div className="w-full bg-blackSoft30 rounded-lg p-4">
                {!is3DTourVisible ? (
                    <button
                        onClick={() => setIs3DTourVisible(true)}
                        className="w-full px-6 py-3 bg-primaryBackground text-white rounded-lg hover:bg-secondaryBackground transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                        <span>Iniciar Recorrido Virtual 3D</span>
                    </button>
                ) : (
                    <div className="w-full aspect-video">
                        <iframe
                            src={matterportUrl}
                            title="3D Virtual Tour"
                            width="100%"
                            height="100%"
                            allowFullScreen
                            allow="xr-spatial-tracking"
                            className="rounded-lg"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Property3DTour;