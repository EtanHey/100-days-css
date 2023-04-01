import "./globals.scss";
import Header from "./Header";
export const metadata = {
  title: "Etan's 100 Days of css",
  description: "As seen on https://100dayscss.com/",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`place-items-center text-center`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
