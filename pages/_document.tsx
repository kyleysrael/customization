import { Html, Head, Main, NextScript } from "next/document";
import { COLORS } from "@/constant/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ margin: "0", boxSizing: "border-box", background: COLORS.black }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
