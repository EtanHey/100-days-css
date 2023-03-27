import localFont from "next/font/local";

const courierNew = localFont({
  src: "../public/fonts/courier_new.ttf",
  variable: "--font-courier-new",
});
const courierNewBold = localFont({
  src: "../public/fonts/courier_new_bold.ttf",
  variable: "--font-courier-new-bold",
});

export { courierNew, courierNewBold };
