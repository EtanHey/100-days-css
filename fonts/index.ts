import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";

const courierNew = localFont({
  src: "../public/fonts/day-1/courier_new.ttf",
  variable: "--font-courier-new",
});
const courierNewBold = localFont({
  src: "../public/fonts/day-1/courier_new_bold.ttf",
  variable: "--font-courier-new-bold",
});
// "Open Sans", Helvetica, sans-serif;
const openSans = Open_Sans({
  preload: true,
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "600"],
});
export { courierNew, courierNewBold, openSans };
