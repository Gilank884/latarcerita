import { useId } from 'react';

const GridBackground = ({ className = "", color = "stroke-sky-200/50" }) => {
    const patternId = useId();

    return (
        <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
            <svg
                className={`absolute w-full h-full ${color} [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]`}
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id={patternId}
                        width={50}
                        height={50}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 50V.5H50" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
            </svg>
            {/* Additional decorative gradients can be added here if needed */}
        </div>
    );
};

export default GridBackground;
