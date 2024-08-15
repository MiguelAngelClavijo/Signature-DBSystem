import logo from "./assets/DBSystem.svg";

export default function Header() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center lg:gap-8">
      <img className="w-64 lg:w-80" src={logo} alt="logo"></img>
      <h1 className="text-center text-DBSystem px-8 lg:text-lg xl:w-1/2">
        Complete los datos a continuación para previsualizar su firma digital.
        Para copiarla y usarla en su correo corporativo haga clic en el botón
        <span className="font-bold"> "Copiar Firma"</span>. Luego puede
        insertarla en su correo. Si cuenta con número de celular corporativo
        seleccione <span className="font-bold"> "Anadir Telefono"</span> y si no
        seleccione <span className="font-bold"> "Quitar Telefono"</span>
      </h1>
    </div>
  );
}
