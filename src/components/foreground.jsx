import React from "react";
import { useRef } from 'react';
import Card from "./Card";

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            title:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            fileSize: ".4mb",
            isClose: false,
            tag: { isTag: true, title: "Download Now", color: "bg-green-900" },
        },
        {
            title:
                "Lorem Ipsum is simply dummy text of the printing .",
            fileSize: "2mb",
            isClose: true,
            tag: { isTag: false, title: "Download Now", color: "bg-green-900" },
        },
        {
            title:
                "Simply dummy text of the printing and typesetting.",
            fileSize: "5.4mb",
            isClose: false,
            tag: { isTag: true, title: "Show More..", color: "bg-orange-700" },
        },
    ];
    return (
        <div ref={ref} className="fixed w-full h-full top-0 left-0 z-[3] flex gap-5 flex-wrap flex-shrink-0 p-5">
            {data.map((item, index) => (
                <Card data={item} reference={ref} />
            ))}

        </div>
    );
}

export default Foreground;
