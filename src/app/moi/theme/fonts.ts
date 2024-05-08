import Regular from "../assets/fonts/GraphikLCG-Regular.ttf";
import Medium from "../assets/fonts/GraphikLCG-Medium.ttf";
import SemiBold from "../assets/fonts/GraphikLCG-Semibold.ttf";
import Bold from "../assets/fonts/GraphikLCG-Bold.ttf";

export const fontList = [`GraphikLCG, sans-serif`, "Roboto"].join(",");
export const fontFaceOverrides = `
@font-face {
  font-family: 'GraphikLCG';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local('GraphikLCG'), local('GraphikLCG-Regular'), url(${Regular}) format('truetype');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}
@font-face {
  font-family: 'GraphikLCG';
  font-style: medium;
  font-display: swap;
  font-weight: 500;
  src: local('GraphikLCG'), local('GraphikLCG-Medium'), url(${Medium}) format('truetype');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}
@font-face {
  font-family: 'GraphikLCG';
  font-style: semibold;
  font-display: swap;
  font-weight: 600;
  src: local('GraphikLCG'), local('GraphikLCG-SemiBold'), url(${SemiBold}) format('truetype');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}
@font-face {
  font-family: 'GraphikLCG';
  font-style: bold;
  font-display: swap;
  font-weight: 700;
  src: local('GraphikLCG'), local('GraphikLCG-Bold'), url(${Bold}) format('truetype');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}
`;
