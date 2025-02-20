"use client"

import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

export function AosInit() {
   
    useEffect(() => {
        const AOS = require("aos");
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
            mirror: false,
            once: true,
        });
    }, []);
    return null;
}