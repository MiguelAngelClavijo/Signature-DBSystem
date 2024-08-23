import { Tailwind, Img, Container, Text } from "@react-email/components";
import Imagen from "../src/assets/Img_Firma.png";
import IconCel from "../src/assets/cel.svg";
import IconTel from "../src/assets/telephone.svg";

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
      <Container className="p-1">
        <table>
          <tr>
            <td style={{ verticalAlign: "center", paddingRight: "10px" }}>
              <Img src={Imagen} alt="Logo" width="120" />
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
                  <img src={IconCel}></img>
                  {props.celular}
                </Text>
              )}
              <Text
                className="m-0 flex items-center justify-start gap-2"
                style={{ color: "#203463" }}
              >
                <img src={IconTel}></img>(601) 690 7013{" "}
                {props.checkValue && `Ext. ${props.ext}`}
              </Text>
              <Text className="m-0" style={{ color: "#203463" }}>
                Dirección: Calle 97A N° 53-01
              </Text>
            </td>
          </tr>
        </table>
      </Container>
    </Tailwind>
  );
}
