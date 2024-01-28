import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <div className="info">
    <h1>
      SALUD EN <br /> CONEXIÓN
    </h1>
    <Image
      src="/img/logo_salud_en_conexion.png"
      alt="logo salud en conexión"
      width={180}
      height={180}
    />
    <h2 className="membresia">MEMBRESÍA</h2>
    <h3 className="beneficios">BENEFICIOS</h3>
  </div>
  )
}
