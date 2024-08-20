import { Tailwind, Img, Container, Text } from "@react-email/components";
import imagen from "../src/assets/Img_Firma.png";

export default function Email(props: {
  name: string;
  cargo: string;
  celular: number | null;
  ext: number | null;
}) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              DBSystem: "#203463",
            },
          },
        },
      }}
    >
      <Container className="p-4">
        <table>
          <tr>
            <td style={{ verticalAlign: "top", paddingRight: "10px" }}>
              <Img src={imagen} alt="Logo" width="150" />
            </td>
            <td style={{ verticalAlign: "top" }}>
              <Text className="text-DBSystem text-lg font-bold">
                {props.name}
              </Text>
              <Text className="text-DBSystem text-sm">{props.cargo}</Text>
              <Text className="text-DBSystem text-sm">{props.celular}</Text>
              <Text className="text-DBSystem text-sm">
                (601) 690 7013 Ext.{props.ext}
              </Text>
              <Text className="text-DBSystem text-sm mt-1">
                Dirección: Calle 97A N° 53-01
              </Text>
            </td>
          </tr>
        </table>
      </Container>
    </Tailwind>
  );
}
