"use client";

import React, { ReactNode } from "react";

interface ActionButtonProps {
    children: ReactNode;
    onClick: () => void;
    className?: string;
    variant?: "primary" | "secondary";
}

const ActionButton = ({
    children,
    onClick,
    variant = "primary",
    className = "",
}: ActionButtonProps) => {
    const baseStyles =
        "px-4 py-2 rounded font-medium transition transition-transform duration-150 ease-in-out cursor-pointer hover:scale-105 hover:shadow-lg";

    const variants: Record<string, string> = {
        primary:
            "bg-orange-500 border border-orange-500 text-white hover:bg-white hover:border-gray-400 hover:text-gray-700",
        secondary:
            "border border-gray-400 text-gray-700 bg-white hover:bg-orange-500 hover:border-orange-500 hover:text-white",
    };

    return (
        <button
            type="button"
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default ActionButton;
