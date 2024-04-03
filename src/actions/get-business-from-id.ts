'use server';
import prisma from "@/lib/prisma"

export const getBusinessFromId = async (id: number) => {
    try {
        const business = await prisma.business.findUnique({
            where: {
                businessId: id
            }
        });

        return {
            ok: true,
            business: business
        }

    } catch (error) {
        console.log(error);

        return {
            ok: false,
            error: error
        }
    }
}