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
              <Img src="https://i.imgur.com/YprFRo1.gif" alt="Logo" width="300" />
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
                <Text
                  className="m-0 flex items-center justify-start gap-2"
                  style={{ color: "#203463" }}
                >
                  <img className="mr-1" src="https://imgur.com/K6F5nEJ.png" height="18"></img>
                  {props.celular}
                </Text>
              )}
              <Text
                className="m-0 flex items-center justify-start gap-2"
                style={{ color: "#203463" }}
              >
                <img className="mr-1" src="https://imgur.com/fM8nx4V.png" height="18"></img>(601) 690 7013{" "}
                {props.checkValue && `Ext. ${props.ext}`}
              </Text>
              <Text className="m-0" style={{ color: "#203463" }}>
                Dirección: Calle 97A N° 53 - 01
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
        <table>
          <Text className="m-0" style={{color: "#203463", fontSize: "11px", fontWeight: "bold", lineHeight: "1.4", marginTop: "20px",}}>
          Comprometidos con el cuidado del medio ambiente. No imprimas este correo si no es necesario.
          </Text>
        <Text className="m-0" style={{color: "#203463", fontSize: "11px", fontWeight: "normal", lineHeight: "1.4", marginTop: "4px",}}>
        DB SYSTEM SAS. TODOS LOS DERECHOS RESERVADOS. La información contenida en este mensaje es exclusiva de su autor. Está prohibida la divulgación de la información contenida en él a personas externas o diferentes al destinatario, así como reproducir total o parcialmente este documento.  La compañía no asume responsabilidad sobre opiniones, criterios e información contenida en él. En caso de recibir este mensaje por error, le solicitamos reenviarlo a la dirección de correo de origen y borrarlo de sus archivos electrónicos o destruirlo.
        </Text>
        </table>
      </Container>
    </Tailwind>
  );
}
