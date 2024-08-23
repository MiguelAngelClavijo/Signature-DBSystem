import Image from "./assets/Img_Firma.png";
import Linkedin from "./assets/linkedin.svg";
import Web from "./assets/web.svg";
import Celular from "./assets/cel.svg";
import Telefono from "./assets/telephone.svg";
import { typeForm } from "./types/formTypes";
import { Dispatch, SetStateAction } from "react";

export default function Preview(props: {
  valorForm: typeForm;
  checkValue: boolean;
  checkValuePhone: boolean;
  setCheckValue: Dispatch<SetStateAction<boolean>>;
  setCheckValuePhone: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col px-8 gap-5 lg:px-0">
      <section className="flex border border-DBSystem rounded justify-center items-center gap-3 px-0 py-2 lg:w-96">
        <img src={Image} alt="Imagen_Logo" className="h-36 justify-start" />
        <div className="flex flex-col gap-2">
          <p className="text-DBSystem text-sm font-bold">
            {props.valorForm.nombre}
          </p>
          <p className="text-DBSystem text-sm font-semibold">
            {props.valorForm.cargo}
          </p>
          <div
            className={`justify-start gap-2 ${
              props.checkValuePhone ? "flex" : "hidden"
            }`}
          >
            <img src={Celular} alt="Icono_Celular" className="w-4" />
            <p className="text-DBSystem text-xs">{props.valorForm.celular}</p>
          </div>
          <div className="flex justify-start gap-2">
            <img src={Telefono} alt="Icono_Celular" className="w-4"></img>
            <p className="text-DBSystem text-xs">
              690 7013 {props.checkValue && `Ext. ${props.valorForm.ext}`}
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/company/dbsystemcol/"
              target="_blank"
            >
              <img src={Linkedin} alt="Icono Linkedin"></img>
            </a>
            <a href="https://www.db-system.com" target="_blank">
              <img src={Web} alt="Icono WEB"></img>
            </a>
          </div>
          <p className="text-DBSystem text-xs">Direccion: Calle 97A N° 53-01</p>
        </div>
      </section>
      <div className="flex gap-5 justify-center">
        <label>Extension</label>
        <input
          type="checkbox"
          className="border border-DBSystem py-2 rounded px-2 text-DBSystem font-bold"
          onChange={(e) => {
            props.setCheckValue(e.target.checked);
          }}
          checked={props.checkValue}
        ></input>
        <label>Celular</label>
        <input
          type="checkbox"
          className="border border-DBSystem py-2 rounded px-2 text-DBSystem font-bold"
          onChange={(e) => {
            props.setCheckValuePhone(e.target.checked);
          }}
          checked={props.checkValuePhone}
        ></input>
      </div>
    </div>
  );
}
