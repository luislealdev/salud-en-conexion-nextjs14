import { business } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <div className="info">
          <h1>
            SALUD EN <br /> CONEXIÓN
          </h1>
          <Image
            src="/img/logo_salud_en_conexion.png"
            alt="logo salud en conexión"
            width={180}
            height={180}
          />
          <h2 className="membresia">MEMBRESÍA</h2>
          <h3 className="beneficios">BENEFICIOS</h3>
        </div>

        {business.map((company, index) => (
          <div
            key={index}
            style={{
              display: index % 2 === 0 ? "flex-end" : "flex-start",
              width: "95%",
              marginLeft: index % 2 === 0 ? "5%" : "0%",
              marginRight: index % 2 === 0 ? "0%" : "5%",
            }}
            className={index % 2 === 0 ? "item-1 item" : "item-2 item"}
          >
            <Image
              src={company.logoSrc}
              alt={`logo ${company.name}`}
              className="logo"
              width={200}
              height={200}
            />
            <div
              className="item-info"
              style={{
                border: "5px dotted #81A969",
                borderLeft: index % 2 === 0 ? "none" : "5px solid #81A969",
                borderRight: index % 2 === 0 ? "5px solid #81A969" : "none",
                margin: "25px 0",
                paddingLeft: index % 2 === 0 ? "30px" : "15px",
                paddingRight: index % 2 === 0 ? "15px" : "30px",
              }}
            >
              <h4>{company.promotion}</h4>
              <h5>{company.field}</h5>
              <p>{company.description}</p>
              <Link
                href={`https://api.whatsapp.com/send?phone=${company.phoneNumber}&text=¡Hola!,%20Me%20gustaría%20aprovechar%20la%20promoción%20que%20ofrece.`}
              >
                <div className="whatsapp-btn">
                  <p>Solicitar descuento</p>
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </main>
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
    </>
  );
}
