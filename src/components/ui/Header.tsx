import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <header className='flex justify-content align-center gap-15 white-text bg-black p-40' id='header'>
      <Image src='/img/logo_salud_en_conexion.png' alt='' className='auto-width' width={150} height={150} />
      <h1 className='f-size-50'>SALUD EN<br />CONEXIÓN</h1>
    </header>
  )
}
