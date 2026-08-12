"use client";

import { useCallback, useRef, useState } from "react";

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeAlt = "Before",
    afterAlt = "After",
    beforeLabel = "Before",
    afterLabel = "After",
}) {
    const [position, setPosition] = useState(50);
    const wrapRef = useRef(null);
    const draggingRef = useRef(false);

    const updateFromClientX = useCallback((clientX) => {
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const pct = ((clientX - rect.left) / rect.width) * 100;
        setPosition(Math.min(100, Math.max(0, pct)));
    }, []);

    const handlePointerDown = (e) => {
        draggingRef.current = true;
        e.currentTarget.setPointerCapture?.(e.pointerId);
        updateFromClientX(e.clientX);
    };

    const handlePointerMove = (e) => {
        if (!draggingRef.current) return;
        updateFromClientX(e.clientX);
    };

    const stopDragging = () => {
        draggingRef.current = false;
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowLeft") {
            setPosition((p) => Math.max(0, p - 5));
        } else if (e.key === "ArrowRight") {
            setPosition((p) => Math.min(100, p + 5));
        }
    };

    return (
        <div
            className="ba-slider"
            ref={wrapRef}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerLeave={stopDragging}
        >
            {/* Bottom layer: full "after" image */}
            <img className="ba-slider-img" src={afterImage} alt={afterAlt} draggable={false} />

            {/* Top layer: full-size "before" image, clipped to reveal only the left `position`% */}
            <img
                className="ba-slider-img ba-slider-before"
                src={beforeImage}
                alt={beforeAlt}
                draggable={false}
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            />

            <span className="ba-tag ba-tag-before" style={{ opacity: position > 12 ? 1 : 0 }}>
                {beforeLabel}
            </span>
            <span className="ba-tag ba-tag-after" style={{ opacity: position < 88 ? 1 : 0 }}>
                {afterLabel}
            </span>

            <div className="ba-handle-line" style={{ left: `${position}%` }}></div>

            <button
                type="button"
                className="ba-handle"
                style={{ left: `${position}%` }}
                onPointerDown={handlePointerDown}
                onKeyDown={handleKeyDown}
                aria-label="Drag to compare before and after"
                role="slider"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(position)}
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3L2 8L6 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 3L14 8L10 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}
