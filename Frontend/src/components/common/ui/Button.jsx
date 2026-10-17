
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Button = ({
    children,
    type = "button",
    onClick,
    loading = false,
    disabled = false,
    className = "",
    as = "button",
    ...props
}) => {
    const Component = motion[as === "a" ? "a" : "button"];

    return (
        <Component
            type={as === "button" ? type : undefined}
            onClick={onClick}
            disabled={as === "button" ? disabled || loading : undefined}
            aria-disabled={as === "a" ? disabled || loading : undefined}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className={`
        group inline-flex items-center justify-center gap-2
        rounded-lg border border-[#7c3aed]/40
        bg-[#2e1065] px-6 py-3
        text-sm font-semibold text-white
        shadow-md shadow-purple-950/40
        transition-colors duration-200
        hover:border-[#a78bfa]/60 hover:bg-[#4c1d95]
        disabled:cursor-not-allowed disabled:opacity-60
        ${className}
      `}
            {...props}
        >
            {loading ? (
                <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    <span>Wait...</span>
                </>
            ) : (
                <>
                    <span>{children}</span>
                    {as === "button" && (
                        <ArrowUpRight
                            size={16}
                            strokeWidth={2}
                            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    )}
                </>
            )}
        </Component>
    );
};

export default Button;
