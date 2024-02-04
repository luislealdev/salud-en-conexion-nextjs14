'use client';

import { createClick } from "@/actions";

export const CallToActionButton = ({ phone, fromBusinessId, toBusinessId }: { phone: string, fromBusinessId: number, toBusinessId: number }) => {

    const handleClick = async () => {
        await createClick(fromBusinessId, toBusinessId);
    }

    return (
        <p onClick={handleClick} className="f-size-18 p-20 bg-gray white-text radius-30" style={{ cursor: 'pointer' }}>SOLICITAR AHORA</p>
    )
}
