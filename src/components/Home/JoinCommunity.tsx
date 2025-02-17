import Image from "next/image";
import ButtonComponent from "../ButtonComponent";

// Component: JoinCommunity.tsx
export default function JoinCommunity() {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] bg-black/20">
      <Image
        src="/Images/UnsamLcdComunidad.png" // Ruta correcta (sin `/public`)
        alt="image_comunidad_lcd"
        layout="fill" // Hace que la imagen ocupe todo el espacio disponible
        objectFit="cover" // Para que la imagen cubra todo el contenedor sin distorsión
        className="object-center absolute z-0" // Se asegura de que la imagen no se distorsione
      />
      <div className="absolute z-10 w-full h-full bg-black/25">
        <div className="w-full h-full p-[30px] flex flex-col justify-center items-center gap-[20px]">
          <h2 className="w-auto font-rubik text-3xl sm:text-5xl font-medium text-white">Únete a DATA SAM</h2>
          <h3 className="font-rubik text-lg sm:text-2xl font-normal text-white text-center">Sé parte de una comunidad apasionada por la ciencia de datos y la innovación.</h3>
          <ButtonComponent text="Unirse a la comunidad" href="/comunidad"/>
        </div>
      </div>
    </section>
  );
}