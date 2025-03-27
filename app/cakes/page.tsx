import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import cakes from "@/data/cakes.json";

export default function CakesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F6F0] to-[#F5F3F0]">
      {/* Header con efecto de cristal */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/70 border-b border-datil-beige/30 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="group flex items-center text-datil-brown hover:text-datil-yellow transition-colors"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Tornar a l&apos;inici</span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-2xl bg-datil-beige/20 p-2 rounded-full">
              🍰
            </span>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8 mx-auto">
        {/* Breadcrumbs */}
        <div className="text-sm text-datil-brown/60 mb-6">
          <Link href="/" className="hover:text-datil-yellow transition-colors">
            Inici
          </Link>
          <span className="mx-2">›</span>
          <span className="text-datil-brown">Pastissos</span>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-datil-brown mb-6">
          Els nostres pastissos
        </h1>
        <p className="text-gray-700 max-w-3xl mb-10">
          Tots els nostres pastissos estan elaborats amb ingredients 100%
          ecològics i sense sucre refinat. Perfectes per a celebracions
          especials, aniversaris o simplement per gaudir d&apos;un dolç
          saludable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake) => (
            <Link key={cake.id} href={`/cakes/${cake.slug}`} className="group">
              <div className="overflow-hidden rounded-xl border shadow-sm bg-white/80 backdrop-blur-sm hover:shadow-md transition-all">
                <div className="relative aspect-square">
                  {cake.images && cake.images[0] && (
                    <Image
                      src={`${
                        process.env.NODE_ENV === "production"
                          ? "/datilbyhelen"
                          : ""
                      }${cake.images[0]}`}
                      alt={cake.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md">
                      <span className="text-xl">{cake.icon || "🍰"}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="font-serif text-xl font-bold text-datil-brown group-hover:text-datil-yellow transition-colors">
                    {cake.name}
                  </h2>
                  <p className="mt-1 text-datil-yellow font-medium">
                    {cake.price}
                  </p>
                  <p className="mt-2 text-gray-600 line-clamp-2">
                    {Array.isArray(cake.description)
                      ? cake.description[0]
                      : cake.description}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-datil-brown/70">
                      {cake.allergens && Array.isArray(cake.allergens)
                        ? `Al·lèrgens: ${cake.allergens.join(", ")}`
                        : ""}
                    </span>
                    <span className="inline-flex items-center justify-center bg-datil-beige/30 hover:bg-datil-beige/50 text-datil-brown px-3 py-1 rounded-full text-sm font-medium transition-colors">
                      Veure detalls
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Sección de información adicional */}
        <div className="mt-16 bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-datil-beige/20">
          <h2 className="text-2xl font-serif font-bold text-datil-brown mb-6">
            Per què escollir els nostres pastissos?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-datil-yellow/10 text-datil-yellow p-3 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-datil-brown mb-2">
                Elaborats amb amor
              </h3>
              <p className="text-gray-700">
                Cada pastís està fet a mà amb dedicació i cura, pensant en cada
                detall.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-datil-orange/10 text-datil-orange p-3 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM15.42 15.42l6.37-6.37a4.5 4.5 0 0 0-6.37-6.36L9.06 9.05"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-datil-brown mb-2">
                100% Ecològics
              </h3>
              <p className="text-gray-700">
                Utilitzem només ingredients orgànics i de proximitat per cuidar
                la teva salut i el planeta.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-datil-blue/10 text-datil-blue p-3 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
                  <path d="M8 9a2 2 0 1 1 4 0c0 1.5-.5 2-2 3"></path>
                  <path d="M12 18h.01"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-datil-brown mb-2">
                Personalitzables
              </h3>
              <p className="text-gray-700">
                Adaptem cada pastís a les teves necessitats dietètiques i
                preferències.
              </p>
            </div>
          </div>
        </div>

        {/* Sección de proceso de pedido */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-datil-brown mb-6">
            Com fer un encàrrec
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-datil-beige/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-datil-yellow text-white mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-medium text-datil-brown mb-2">
                Escull el teu pastís
              </h3>
              <p className="text-gray-700">
                Navega pel nostre catàleg i tria el pastís que més t'agradi.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-datil-beige/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-datil-orange text-white mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-medium text-datil-brown mb-2">
                Personalitza'l
              </h3>
              <p className="text-gray-700">
                Escull la forma, el farcit i la decoració que més t'agradi.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-datil-beige/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-datil-blue text-white mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-medium text-datil-brown mb-2">
                Contacta'ns
              </h3>
              <p className="text-gray-700">
                Envia'ns un missatge per confirmar disponibilitat i detalls.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-datil-beige/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-datil-brown text-white mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-medium text-datil-brown mb-2">
                Recull el teu encàrrec
              </h3>
              <p className="text-gray-700">
                Vine a buscar el teu pastís en la data acordada.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer con información de contacto */}
      <footer className="mt-16 bg-white border-t border-datil-beige/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-datil-brown font-medium">
                ¿Vols fer un encàrrec o tens alguna pregunta?
              </p>
              <p className="text-datil-brown/70">
                Contacta'ns i t'ajudarem amb el teu pastís
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/datilbyhelen"
                className="bg-datil-beige/20 hover:bg-datil-beige/40 text-datil-brown p-3 rounded-full transition-colors flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="hidden md:inline">Instagram</span>
              </Link>
              <Link
                href="mailto:datilbyhelen@gmail.com?subject=Consulta sobre pastissos - Dàtil&body=Hola, m'agradaria obtenir més informació sobre els vostres pastissos..."
                className="bg-datil-beige/20 hover:bg-datil-beige/40 text-datil-brown p-3 rounded-full transition-colors flex items-center gap-2"
                aria-label="Enviar correu electrònic"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="hidden md:inline">Email</span>
              </Link>
              <Link
                href="tel:+34600000000"
                className="bg-datil-beige/20 hover:bg-datil-beige/40 text-datil-brown p-3 rounded-full transition-colors flex items-center gap-2"
                aria-label="Trucar per telèfon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="hidden md:inline">Telèfon</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
