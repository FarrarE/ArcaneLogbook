import React from "react";

export default function FloatingSpan({ className, label, children }) {
    return (
        <form class="form-floating">
            <span
                type="text"
                class={`form-control ${className}`}
                id={`${label}FloatingSpan`}
                placeholder="placeholder"
            >
                {children}
            </span>
            <label forhtml={`${label}FloatingInput`}>{label}</label>
        </form>
    );
}