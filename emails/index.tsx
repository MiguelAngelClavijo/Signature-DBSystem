import { Button, Heading, Html } from "@react-email/components";
import { Img } from "@react-email/components";
import imagen from "../src/assets/Img_Firma.png";

export default function Email(prop: { name: string }) {
  return (
    <Html>
      <Heading>{prop.name}</Heading>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
      <Img src={imagen} alt="Cat" width="300" height="300" />
    </Html>
  );
}
