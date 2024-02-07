import { business } from "@/data"

export const getBusinessBySlug = (slug: string) => {
    return business.find((company) => company.slug === slug);
}