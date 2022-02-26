import React from "react";

function FloatingInput({ className, label, value }) {
    return (
        <form class="form-floating">
            <input
                type="text"
                class={`form-control ${className}`}
                id={`${label}FloatingInput`}
                placeholder="Character Name"
                value={value} />
            <label forhtml={`${label}FloatingInput`}>{label}</label>
        </form>
    );
}

export default FloatingInput;