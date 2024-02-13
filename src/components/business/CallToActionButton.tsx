'use client';

import { createClick } from "@/actions";
import { useRouter } from "next/navigation";

export const CallToActionButton = ({ phone, fromBusinessId, toBusinessId }: { phone: string, fromBusinessId: number, toBusinessId: number }) => {

    const router = useRouter();

    const handleClick = async () => {
        await createClick(fromBusinessId, toBusinessId);

        // Send to whatsapp and add the text 'Me gustaría tomar '
        router.push(`https://api.whatsapp.com/send?phone=${phone}&text=¡Hola!,%20me%20gustaría%20la%20promoción%20que%20ofrece.`);
    }

    return (
        <p onClick={handleClick} className="f-size-18 p-20 bg-gray white-text radius-30" style={{ cursor: 'pointer' }}>SOLICITAR AHORA</p>
    )
}
