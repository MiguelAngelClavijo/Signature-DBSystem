import { Dispatch, SetStateAction } from "react";
import { typeForm } from "./types/formTypes";
import MyTemplate from "../emails/index.tsx";
import { render } from "@react-email/render";

export default function Form(props: {
  name: Dispatch<SetStateAction<typeForm>>;
  valorForm: typeForm;
  checkValue: boolean;
  checkValuePhone: boolean;
}) {
  const html = render(
    <MyTemplate
      name={props.valorForm.nombre}
      cargo={props.valorForm.cargo}
      celular={props.valorForm.celular}
      ext={props.valorForm.ext}
      checkValue={props.checkValue}
      checkValuePhone={props.checkValuePhone}
    />,
    {
      pretty: true,
    }
  );
  console.log(props.checkValuePhone);
  return (
    <form
      className="flex flex-col justify-center gap-5 px-8 lg:w-96 lg:px-0"
      onSubmit={(e) => {
        e.preventDefault();
        let Blobi = new Blob([html], { type: "text/html" });
        const data = [new ClipboardItem({ ["text/html"]: Blobi })];
        navigator.clipboard.write(data);
      }}
    >
      <div className="flex flex-col gap-2">
        <label className="font-bold text-DBSystem">Nombre</label>
        <input
          type="text"
          placeholder="Miguel Ángel Clavijo"
          className="border rounded h-10 pl-3 focus:outline-DBSystem"
          onChange={(e) => {
            props.name({ ...props.valorForm, nombre: e.target.value });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold text-DBSystem">Cargo</label>
        <input
          type="text"
          placeholder="Diseñador Grafico"
          className="border rounded h-10 pl-3 focus:outline-DBSystem"
          onChange={(e) => {
            props.name({ ...props.valorForm, cargo: e.target.value });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold text-DBSystem">Celular Corporativo</label>
        <input
          type="number"
          placeholder="305 267 0670"
          className="border rounded h-10 pl-3 focus:outline-DBSystem appearance-none"
          onChange={(e) => {
            const numValue = e.target.value ? parseInt(e.target.value) : null;
            props.name({ ...props.valorForm, celular: numValue });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold text-DBSystem">Extension</label>
        <input
          type="number"
          placeholder="126"
          className="border rounded h-10 pl-3 focus:outline-DBSystem"
          onChange={(e) => {
            const extValue = e.target.value ? parseInt(e.target.value) : null;
            props.name({ ...props.valorForm, ext: extValue });
          }}
        />
      </div>
      <button className="py-2 border border-DBSystem px-8 text-DBSystem font-bold rounded">
        Copiar Firma
      </button>
    </form>
  );
}
