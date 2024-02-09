'use client'
import React, { useState, useRef, MouseEvent } from 'react';
import { BusinessCard } from "@/components";
import { business } from "@/data"; // Asegúrate de importar el tipo correcto para "business"

const Home: React.FC = () => {
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
    <>
      <div className="flex mt-50 mb-50">
        <div id="beneficios-text">
          <h2 className="p-10 ph-40 f-size-30 white-text mh-40">BENEFICIOS DE TU MEMBRESÍA</h2>
        </div>
      </div>

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
        {business.map((company) => (
          <BusinessCard from={1} key={company.name} company={company} />
        ))}
      </div>
      <p className="center-text mb-50 white-text hide-on-mobile">
        DESLIZA PARA VER MÁS <i className="fa-solid fa-arrow-right"></i>
      </p>
    </>
  )
};

export default Home;
