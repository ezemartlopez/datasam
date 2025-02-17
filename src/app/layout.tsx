// app/layout.tsx (o RootLayout.tsx)
import { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { rubikFont } from "@/ui/Fonts";


export const metadata: Metadata = {
  title: "DATA SAM",
  description: "DATA SAM una comunidad de estudiantes de licenciatura en ciencia de datos de la UNSAM, donde el conocimiento se comparte y la comunidad se fortalece",
  icons: {
    icon: "/Svg/DataSamLogo.svg",  // Ruta del ícono en la carpeta 'public'
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* Next.js automáticamente maneja el <head> basado en la metadata */}
      <head />
      <body className={`${rubikFont.variable} antialiased`}>
        <div className="relative w-full min-h-screen font-rubik flex flex-col">
          <Header/>
          <main className="w-full flex-1">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
