import Image from 'next/image'
import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <div className="f-info">
                <h6>SALUD EN CONEXIÓN</h6>
                <p>
                    ES UNA INCIATIVA DE EMPRESAS DEDICADAS A LA SALUD QUE SE ESFUERZAN
                    EN REALIZAR UNA DINAMICA INTEGRAL PARA OFRECER UNA OPCION ECONOMICA
                    Y DE LA MEJOR CALIDAD AL ALCANCE DE TODOS SUS PACIENTES
                </p>
            </div>
            <Image
                src="/img/logo_salud_en_conexion.png"
                alt="logo salud en conexión"
                width={180}
                height={180}
            />
        </footer>
    )
}
