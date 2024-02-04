'use server';
import prisma from "@/lib/prisma"

export const createClick = async (fromBusinessId: number, toBusinessId: number) => {

    try {
        await prisma.click.create({
            data: {
                fromBusinessId,
                toBusinessId
            }
        });

        return {
            ok: true
        }
    } catch (error) {
        console.log(error);

        return {
            ok: false,
            error: error
        }
    }

}