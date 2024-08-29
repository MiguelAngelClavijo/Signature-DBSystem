import logo from "./assets/DBSystem.svg";

export default function Header() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center lg:gap-8">
      <img className="w-64 lg:w-80" src={logo} alt="logo"></img>
      <h1 className="text-center text-DBSystem px-8 lg:text-lg xl:w-10/12">
        Para generar su firma digital, complete sus datos: (nombre, cargo,
        celular corporativo y extensión). Si cuenta con celular corporativo o
        extensión de oficina, marque las casillas correspondientes. Cuando haya
        terminado, haga clic en “Copiar Firma” y luego péguela en la
        configuración de su correo electrónico en la sección de firma. Así podrá
        usar su firma en todos sus correos corporativos.
      </h1>
    </div>
  );
}
