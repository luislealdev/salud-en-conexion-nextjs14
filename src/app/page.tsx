import { BusinessCard } from "@/components";
import { business } from "@/data";

export default function Home() {
  return (
    <>
      <div className="flex mt-50 mb-50">
        <div id="beneficios-text">
          <h2 className="p-10 ph-40 f-size-30 white-text mh-40">BENEFICIOS DE TU MEMBRESÍA</h2>
        </div>
      </div>

      <div className="flex p-40" style={{ gap: 50 }} id="business">
        {business.map((company) =>
          <BusinessCard key={company.name} company={company} />
        )};
      </div>
      <p className="center-text mb-50 white-text">DESLIZA PARA VER MÁS <i className="fa-solid fa-arrow-right"></i>  </p>
    </>
  );
}
