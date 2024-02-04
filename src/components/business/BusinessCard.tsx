import Image from "next/image"
import Link from "next/link";
import { FC } from "react";

interface Props {
    company: {
        name: string;
        logoSrc: string;
        promotion: string;
        description: string;
        phoneNumber: string;
    }
}

export const BusinessCard: FC<Props> = ({ company }) => {
    return (
        <div className="center-text p-20 flex column gap-15 bg-white radius-30 align-center business-card space-between">
            <Image height={200} width={200} className="max-width mt-20" src={company.logoSrc} alt={company.name} />
            <div className="info">
                <h3 className="f-size-70 gray-text">{company.promotion}</h3>
                <p className="bold gray-text">{company.description}</p>
            </div>
            <Link href='' className="f-size-18 p-20 bg-gray white-text radius-30">SOLICITAR AHORA</Link>
        </div>
    )
}
