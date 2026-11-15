import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { RedocStandalone } from "redoc";
import { lightTheme, darkTheme } from "../css/redocTheme";

interface ApiReferenceProps {
  spec: string;
  color: string;
}

const RedocConfig = (props: ApiReferenceProps) => {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === "dark";

  return (
    <RedocStandalone
      specUrl={props.spec}
      options={{
        scrollYOffset: ".navbar", // makes the fixed sidebar and scrolling play nicey with docusaurus navbar
        pathInMiddlePanel: true,
        expandSingleSchemaField: true,
        expandResponses: "200,201,202,204",
        menuToggle: true,
        theme: isDarkTheme ? darkTheme(props.color) : lightTheme(props.color),
      }}
    />
  );
};

export default function ApiReference(props: ApiReferenceProps) {
  return (
    <main>
      <div className="RedocStandalone">
        <RedocConfig spec={props.spec} color={props.color} />
      </div>
    </main>
  );
}
