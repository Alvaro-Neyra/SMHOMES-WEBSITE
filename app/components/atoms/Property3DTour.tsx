interface Property3DTourProps {
    matterportUrl?: string;
}

const Property3DTour: React.FC<Property3DTourProps> = ({ matterportUrl }) => {
    if (!matterportUrl) return null;

    return (
        <div className="w-full rounded-lg overflow-hidden">
            <div className="bg-primaryBackground text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-semibold text-center">Recorrido Virtual 3D</h3>
            </div>
            <div className="w-full h-96 rounded-b-lg overflow-hidden">
                <iframe
                    src={matterportUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    allowFullScreen
                    title="Recorrido Virtual 3D"
                ></iframe>
            </div>
        </div>
    );
};

export default Property3DTour;