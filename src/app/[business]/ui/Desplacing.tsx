
'use client'

import { BusinessCard } from "@/components"
import { business } from "@/data"
import { MouseEvent, useRef, useState } from "react"

interface Props {
    businesPageInfo: {
        id: number,
        name: string,
        slug: string,
        promotion: string,
        field: string,
        description: string,
        phoneNumber: string,
        logoSrc: string,
    }
}

export const Desplacing = ({ businesPageInfo }: Props) => {

    const businessContainerRef = useRef<HTMLDivElement>(null);
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const [startX, setStartX] = useState<number | null>(null);
    const [scrollLeft, setScrollLeft] = useState<number | null>(null);

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        setIsMouseDown(true);
        setStartX(e.pageX - (businessContainerRef.current?.offsetLeft || 0));
        setScrollLeft(businessContainerRef.current?.scrollLeft || 0);
        if (businessContainerRef.current) {
            businessContainerRef.current.style.cursor = 'grabbing';
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
        if (businessContainerRef.current) {
            businessContainerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseLeave = () => {
        setIsMouseDown(false);
        if (businessContainerRef.current) {
            businessContainerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isMouseDown || !businessContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - businessContainerRef.current.offsetLeft;
        const walk = (x - (startX || 0)) * 3;
        businessContainerRef.current.scrollLeft = (scrollLeft || 0) - walk;
    };

    return (
        <div
            className="flex p-40"
            style={{ gap: 50, overflowX: 'scroll', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            id="business"
            ref={businessContainerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            {business.map((company) =>
                <BusinessCard key={company.name} from={businesPageInfo.id} company={company} />
            )};
        </div>
    )
}
