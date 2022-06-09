import React from "react";

function Footer() {
    const day = new Date().getFullYear();
    return (
        <footer>
        <p>
            Copyright © {day}
        </p>
        </footer>
    );
};

export default Footer;