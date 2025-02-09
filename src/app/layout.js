import AppProvider from "@/shared/components/hoc/appProvider/AppProvider";
import "./globals.css";
import Header from "@/shared/components/common-layouts/header/header";


export const metadata = {
  title: "WintechPro Admin",
  description: "WintechPro Admin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
