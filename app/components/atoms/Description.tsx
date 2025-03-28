'use client';

interface DescriptionProps {
    readonly description: string;
}

export default function Description({ description }: DescriptionProps) {
    if (!description) return <p className="text-gray-300">Sin descripción disponible.</p>;

    const paragraphs = description
        .split(/\n\s*\n/)
        .filter(paragraph => paragraph.trim() !== '');

    return (
        <>
            {paragraphs.map((paragraph, index) => (
                <p 
                    key={index} 
                    className="text-gray-300 mb-4 last:mb-0"
                >
                    {paragraph.trim()}
                </p>
            ))}
        </>
    );
}