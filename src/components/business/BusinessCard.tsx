import Image from "next/image"
import Link from "next/link";
import { FC } from "react";
import { CallToActionButton } from "./CallToActionButton";

interface Props {
    company: {
        id: number,
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

            <CallToActionButton phone={company.phoneNumber} fromBusinessId={1} toBusinessId={company.id} />
        </div>
    )
}
