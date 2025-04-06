export default function LocationIcon({ className }: { className?: string }) {
    // This component renders a location icon using SVG.
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`feather feather-map-pin ${className}`}
        >
            <path d="M21 10c0 5.5-9 13-9 13S3 15.5 3 10a9 9 0 1 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>
    );
}