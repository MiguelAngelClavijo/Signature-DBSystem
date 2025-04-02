import {
  Tailwind,
  Img,
  Container,
  Text,
  Row,
  Link,
  Column,
} from "@react-email/components";

/*import Imagen from "../src/assets/Img_Firma.png";
import IconCel from "../src/assets/cel.svg";
import IconTel from "../src/assets/telephone.svg";
import IconLinkedin from "../src/assets/linkedin.svg";
import IconWeb from "../src/assets/web.svg";*/

export default function Email(props: {
  name: string;
  cargo: string;
  celular: number | null;
  ext: number | null;
  checkValue: boolean;
  checkValuePhone: boolean;
}) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {},
          },
        },
      }}
    >
      <Container className="p-1 align-baseline" style={{ margin: "0",maxWidth: "100%", textAlign: 'left'}} >
        <table style={{ borderCollapse: "collapse", width: "auto" }}>
          <tr>
            <td style={{ verticalAlign: "center", paddingRight: "10px" }}>
              <Img src="https://i.imgur.com/1gGmMgN.gif" alt="Logo" width="300" />
            </td>
            <td style={{ verticalAlign: "center" }}>
              <Text
                className="text-lg font-bold m-0"
                style={{ color: "#203463" }}
              >
                {props.name}
              </Text>
              <Text className="font-semibold m-0" style={{ color: "#203463" }}>
                {props.cargo}
              </Text>
              {props.checkValuePhone && (
                <Row style={{ marginBottom: "4px" }}> {/* Espacio debajo si es necesario */}
                {/* Columna para el icono del celular */}
                <Column
                  style={{
                    width: "20px", // Ancho fijo
                    paddingRight: "4px", // Espacio entre icono y texto
                    verticalAlign: "middle", // Alineación vertical de la celda
                  }}
                >
                  <Img
                    src="https://i.imgur.com/K6F5nEJ.png" 
                    alt="Celular"
                    height="18"
                  />
                </Column>
            
                {/* Columna para el número de celular */}
                <Column style={{ verticalAlign: "middle" }}> {/* Alineación vertical de la celda */}
                  <Text
                    className="m-0" // Por si acaso
                    style={{
                      color: "#203463",
                      margin: 0, // Sin márgenes extra
                      lineHeight: "1", // Ayuda a la consistencia
                    }}
                  >
                    {props.celular}
                  </Text>
                </Column>
              </Row>
              )}
              <Row style={{ marginBottom: "4px" }}>
  <Column
    style={{
      width: "20px", // Ancho fijo
      paddingRight: "4px", // Espacio
      verticalAlign: "middle", // <-- Alineación en la CELDA
    }}
  >
    <Img
      src="https://i.imgur.com/fM8nx4V.png" // URL directa
      alt="Teléfono"
      height="18"
    />
  </Column>

  {/* Columna para el texto */}
  <Column style={{ verticalAlign: "middle" }}> {/* <-- Alineación en la CELDA */}
    <Text
      className="m-0"
      style={{
        color: "#203463",
        margin: 0,
        lineHeight: "1", // Ayuda a consistencia
      }}
    >
      (601) 690 7013 {props.checkValue && `Ext. ${props.ext}`}
    </Text>
  </Column>
</Row>
              <Text className="m-0" style={{ color: "#203463" }}>
                Calle 97A N° 53 - 01
              </Text >
                <Row className="table-cell align-bottom">
                  <Column className="pr-[8px]">
                    <Link href="https://www.linkedin.com/company/dbsystemcol">
                      <Img
                        alt="Linkedin"
                        height="18"
                        src="https://imgur.com/ZukQo4q.png"
                      />
                    </Link>
                  </Column>
                  <Column className="pr-[8px]">
                    <Link href="https://www.db-system.com">
                      <Img
                        alt="Web"
                        height="18"
                        src="https://imgur.com/ih3U76Y.png"
                      />
                    </Link>
                  </Column>
                </Row>
            </td>
          </tr>
        </table>
        <table
  align="left" // Asegura alineación izquierda de la tabla misma
  border={0}
  cellPadding={0}
  cellSpacing={0}
  style={{
    width: "700px", // <-- Aplica el ancho a la TABLA
    marginTop: "20px", // Espacio sobre el footer
    borderCollapse: "collapse",
    // Si quisieras centrar la tabla: align="center", marginLeft:"auto", marginRight:"auto"
    // Pero para alinear a la izquierda, align="left" y/o margin:0 es suficiente
    marginLeft: 0, // Asegura que no haya margen izquierdo automático
    marginRight: "auto", // Permite que ocupe espacio a la derecha
  }}
>
  {/* Fila para el primer texto */}
  <tr>
    <td>
      <Text
        className="m-0"
        style={{
          color: "#203463",
          fontSize: "11px",
          fontWeight: "bold",
          lineHeight: "1.4",
          // width: "500px", // Ya no es estrictamente necesario aquí si la tabla lo controla
        }}
      >
        Comprometidos con el cuidado del medio ambiente. No imprimas este
        correo si no es necesario.
      </Text>
    </td>
  </tr>
  {/* Fila para el segundo texto */}
  <tr>
    <td>
      <Text
        className="m-0"
        style={{
          color: "#203463",
          fontSize: "11px",
          fontWeight: "normal",
          lineHeight: "1.4",
          marginTop: "4px", // Espacio entre los dos textos
          // width: "500px", // Ya no es estrictamente necesario aquí si la tabla lo controla
        }}
      >
        DB SYSTEM SAS. TODOS LOS DERECHOS RESERVADOS. La información
        contenida en este mensaje es exclusiva de su autor. Está prohibida la
        divulgación de la información contenida en él a personas externas o
        diferentes al destinatario, así como reproducir total o parcialmente
        este documento. La compañía no asume responsabilidad sobre opiniones,
        criterios e información contenida en él. En caso de recibir este
        mensaje por error, le solicitamos reenviarlo a la dirección de correo
        de origen y borrarlo de sus archivos electrónicos o destruirlo.
      </Text>
    </td>
  </tr>
</table>
      </Container>
    </Tailwind>
  );
}
