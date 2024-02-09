import { getBusinessBySlug } from "@/utils/getBusinessBySlug";
import { notFound } from "next/navigation";
import { Desplacing } from "./ui/Desplacing";

interface Props {
    params: {
        business: string
    }
}

const BusinessPage = async ({ params }: Props) => {

    const businesPageInfo = getBusinessBySlug(params.business);

    if (!businesPageInfo) notFound();

    return (
        <>
            <div className="flex mt-50 mb-50">
                <div id="beneficios-text">
                    <h2 className="p-10 ph-40 f-size-30 white-text mh-40">BENEFICIOS DE TU MEMBRESÍA</h2>
                </div>
            </div>

            <Desplacing businesPageInfo={businesPageInfo} />
            <p className="center-text mb-50 white-text hide-on-mobile">DESLIZA PARA VER MÁS <i className="fa-solid fa-arrow-right"></i>  </p>
        </>
    )
}

export default BusinessPage;