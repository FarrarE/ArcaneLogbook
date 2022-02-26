import React from "react";

export default function FloatingInput({ className, label, value }) {
    return (
        <form class="form-floating">
            <input
                type="text"
                class={`form-select ${className}`}
                id={`${label}FloatingInput`}
                placeholder="Character Name"
                value={value} />
            <label forhtml={`${label}FloatingInput`}>{label}</label>
        </form>
    );
}