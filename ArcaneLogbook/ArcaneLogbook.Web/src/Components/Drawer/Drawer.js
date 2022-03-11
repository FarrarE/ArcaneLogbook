import React from "react";
import { GiBookCover } from "react-icons/gi";

export default function Drawer({ id, children, backdrop, position}) {
    return (
        <div
            data-bs-backdrop={backdrop}
            className={`offcanvas offcanvas-${position}`}
            tabindex="-1"
            id={id}
        >
            {children}
        </div>
    )
}