import { useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import Preview from "./Preview";
import { typeForm } from "./types/formTypes";

function App() {
  const [valorForm, setValorForm] = useState<typeForm>({
    nombre: "Miguel Angel Clavijo",
    cargo: "Diseñador Grafico",
    celular: 3052670670,
    telefono: 0,
    ext: 126,
  });

  const [checkValue, setCheckValue] = useState<boolean>(true);
  const [checkValuePhone, setCheckValuePhone] = useState<boolean>(true);

  return (
    <div className="flex flex-col gap-5 py-8 lg:gap-10">
      <Header />
      <div className="flex flex-col gap-10 lg:flex-row-reverse lg:justify-center lg:gap-10 lg:items-center">
        <Preview
          valorForm={valorForm}
          checkValue={checkValue}
          checkValuePhone={checkValuePhone}
          setCheckValue={setCheckValue}
          setCheckValuePhone={setCheckValuePhone}
        />
        <Form
          name={setValorForm}
          valorForm={valorForm}
          checkValue={checkValue}
          checkValuePhone={checkValuePhone}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
