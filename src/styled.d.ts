import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white1: "rgba(255, 255, 255, 1)";
      white05: "rgba(255, 255, 255, 0.5)";
      white025: "rgba(255, 255, 255, 0.25)";
    };
    borders: {
      slimFull: "2px solid rgba(255, 255, 255, 1)";
      slimTranslucent: "2px solid rgba(255, 255, 255, 0.5)";
    };
  }
}
