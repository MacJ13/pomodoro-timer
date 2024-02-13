import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: "rgba(255, 255, 255, 1)";
      white05: "rgba(255, 255, 255, 0.5)";
      white0375: "rgba(255, 255, 255, 0.375)";
      white025: "rgba(255, 255, 255, 0.25)";
      lightGrey: "rgb(241, 241, 241)";
      black0375: "rgba(0, 0, 0, 0.375)";
      black05: "rgba(0, 0, 0, 0.5)";
      black025: "rgba(0, 0, 0, 0.25)";
      lightGreen: "#81ea44";
    };
    borders: {
      slimFull: "2px solid rgba(255, 255, 255, 1)";
      slimTranslucent: "2px solid rgba(255, 255, 255, 0.5)";
      greySlim: "1px solid rgba(0, 0, 0, 0.125)";
      volumeSlider: "1px solid rgba(235, 235, 235)";
    };
  }
}
