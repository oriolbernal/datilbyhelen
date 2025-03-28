"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Heart, ShoppingBag, Star } from "lucide-react";
import fillings from "@/data/fillings.json";
import shapes from "@/data/shapes.json";
import cakes from "@/data/cakes.json";

type CakeDetails = (typeof cakes)[0];

export function CakeDetailClient({
  cakeDetails,
}: {
  cakeDetails: CakeDetails;
}) {
  // Envolvemos el uso de useSearchParams en un useEffect para evitar errores durante la hidratación
  const [imageIndex, setImageIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();
  const slug = cakeDetails.slug;

  const images = Array.isArray(cakeDetails.images) ? cakeDetails.images : [];
  const [selectedImage, setSelectedImage] = useState<string>(images[0] || "");

  // Detectar cuando estamos en el cliente
  useEffect(() => {
    setIsClient(true);

    // Procesar los parámetros de búsqueda solo en el cliente
    const imageParam = searchParams.get("image");
    if (imageParam) {
      const index = Number.parseInt(imageParam, 10);
      setImageIndex(index);
      setSelectedImage(images[index] || images[0] || "");
    }
  }, [searchParams, images]);

  const description = Array.isArray(cakeDetails.description)
    ? cakeDetails.description
    : [cakeDetails.description || ""];
  const allergens = Array.isArray(cakeDetails.allergens)
    ? cakeDetails.allergens.join(", ")
    : cakeDetails.allergens || "";
  const nutritionalInfo = cakeDetails.nutritionalInfo || "";

  const decorationOptions = [
    { id: 1, name: "Fruits vermells" },
    { id: 2, name: "Maduixes" },
  ];

  const aspectOptions = [
    { id: 1, name: "Cobert" },
    { id: 2, name: "Descobert" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F6F0] to-[#F5F3F0]">
      {/* Header con efecto de cristal */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/70 border-b border-datil-beige/30 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/cakes"
            className="group flex items-center text-datil-brown hover:text-datil-yellow transition-colors"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Tornar a pastissos</span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-2xl bg-datil-beige/20 p-2 rounded-full">
              {cakeDetails.icon || "🍰"}
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="text-sm text-datil-brown/60 mb-6">
          <Link href="/" className="hover:text-datil-yellow transition-colors">
            Inici
          </Link>
          <span className="mx-2">›</span>
          <Link
            href="/cakes"
            className="hover:text-datil-yellow transition-colors"
          >
            Pastissos
          </Link>
          <span className="mx-2">›</span>
          <span className="text-datil-brown">{cakeDetails.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Galería de imágenes con diseño mejorado */}
          <div className="space-y-6">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
              {selectedImage && (
                <Image
                  src={`${
                    process.env.NODE_ENV === "production" ? "/datilbyhelen" : ""
                  }${selectedImage}`}
                  alt={cakeDetails.name || "Imagen del pastel"}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-700"
                  priority
                />
              )}
              <div className="absolute top-4 right-4">
                <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors">
                  <Heart className="h-5 w-5 text-datil-orange" />
                </button>
              </div>
            </div>

            {/* Modificar la parte de la galería de imágenes para corregir la navegación */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <Link
                  key={index}
                  href={
                    isClient
                      ? `/cakes/${slug}${index === 0 ? "" : `?image=${index}`}`
                      : "#"
                  }
                  className={`relative aspect-square rounded-2xl overflow-hidden block transition-all duration-300
                    ${
                      selectedImage === image
                        ? "ring-2 ring-datil-yellow scale-95 shadow-md"
                        : "ring-1 ring-datil-beige/30 hover:ring-datil-yellow/50 hover:scale-95"
                    }`}
                  scroll={false}
                  onClick={(e) => {
                    if (!isClient) {
                      e.preventDefault();
                      setSelectedImage(image);
                    } else {
                      // Asegurarse de que la selección de imagen funcione correctamente
                      setSelectedImage(image);
                      setImageIndex(index);
                    }
                  }}
                >
                  <Image
                    src={`${
                      process.env.NODE_ENV === "production"
                        ? "/datilbyhelen"
                        : ""
                    }${image}`}
                    alt={`Detalle ${index + 1}`}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      selectedImage === image ? "scale-110" : "hover:scale-110"
                    }`}
                  />
                  {selectedImage === image && (
                    <div className="absolute inset-0 border-2 border-datil-yellow rounded-2xl"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Resto del componente permanece igual */}
          {/* Información del producto con diseño mejorado */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-datil-yellow text-datil-yellow"
                    />
                  ))}
                </div>
                <span className="text-sm text-datil-brown/70 ml-2">
                  23 valoracions
                </span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl font-bold text-datil-brown">
                {cakeDetails.name || "Pastel"}
              </h1>

              <p className="text-2xl font-semibold text-datil-yellow mt-2">
                {cakeDetails.price || ""}
              </p>
            </div>

            <div className="prose prose-datil max-w-none">
              {description.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Separador decorativo */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-datil-beige/50"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#F5F3F0] px-4 text-sm text-datil-brown/60">
                  Personalitza el teu pastís
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Forma con diseño mejorado */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-datil-beige/20">
                <h3 className="text-lg font-semibold text-datil-brown mb-4 flex items-center">
                  <span className="bg-datil-yellow/10 text-datil-yellow p-1.5 rounded-lg mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3a9 9 0 1 0 9 9"></path>
                      <path d="M12 3v9l9 9"></path>
                      <path d="M12 12h.01"></path>
                    </svg>
                  </span>
                  Forma
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {shapes.map((shape, index) => (
                    <label key={index} className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="shape"
                        className="hidden peer"
                        defaultChecked={index === 0}
                      />
                      <div
                        className="border-2 rounded-xl p-4 text-center transition-all duration-300 ease-in-out
                          peer-checked:border-datil-yellow peer-checked:bg-datil-yellow/10 peer-checked:shadow-md
                          border-transparent bg-white hover:border-datil-yellow/50 hover:shadow-sm"
                      >
                        <span className="text-md font-medium text-datil-brown">
                          {shape.name}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Farcit con diseño mejorado */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-datil-beige/20">
                <h3 className="text-lg font-semibold text-datil-brown mb-4 flex items-center">
                  <span className="bg-datil-orange/10 text-datil-orange p-1.5 rounded-lg mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 3v3a2 2 0 0 1-2 2H3"></path>
                      <path d="M21 8h-3a2 2 0 0 1-2-2V3"></path>
                      <path d="M3 16h3a2 2 0 0 1 2 2v3"></path>
                      <path d="M16 21v-3a2 2 0 0 1 2-2h3"></path>
                    </svg>
                  </span>
                  Farcit
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {fillings.map((filling, index) => (
                    <label key={index} className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="filling"
                        className="hidden peer"
                        defaultChecked={index === 0}
                      />
                      <div
                        className="border-2 rounded-xl p-4 text-center transition-all duration-300 ease-in-out
                          peer-checked:border-datil-orange peer-checked:bg-datil-orange/10 peer-checked:shadow-md
                          border-transparent bg-white hover:border-datil-orange/50 hover:shadow-sm"
                      >
                        <span className="text-md font-medium text-datil-brown">
                          {filling.name}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Decoració con diseño mejorado */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-datil-beige/20">
                <h3 className="text-lg font-semibold text-datil-brown mb-4 flex items-center">
                  <span className="bg-datil-blue/10 text-datil-blue p-1.5 rounded-lg mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
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
                  </span>
                  Decoració
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {decorationOptions.map((option, index) => (
                    <label key={index} className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="decoration"
                        className="hidden peer"
                        defaultChecked={index === 0}
                      />
                      <div
                        className="border-2 rounded-xl p-4 text-center transition-all duration-300 ease-in-out
                          peer-checked:border-datil-blue peer-checked:bg-datil-blue/10 peer-checked:shadow-md
                          border-transparent bg-white hover:border-datil-blue/50 hover:shadow-sm"
                      >
                        <span className="text-md font-medium text-datil-brown">
                          {option.name}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Aspecte con diseño mejorado */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-datil-beige/20">
                <h3 className="text-lg font-semibold text-datil-brown mb-4 flex items-center">
                  <span className="bg-datil-brown/10 text-datil-brown p-1.5 rounded-lg mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </span>
                  Aspecte
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {aspectOptions.map((option, index) => (
                    <label key={index} className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="aspect"
                        className="hidden peer"
                        defaultChecked={index === 0}
                      />
                      <div
                        className="border-2 rounded-xl p-4 text-center transition-all duration-300 ease-in-out
                          peer-checked:border-datil-brown peer-checked:bg-datil-brown/10 peer-checked:shadow-md
                          border-transparent bg-white hover:border-datil-brown/50 hover:shadow-sm"
                      >
                        <span className="text-md font-medium text-datil-brown">
                          {option.name}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="w-full bg-datil-yellow hover:bg-datil-yellow/90 text-white py-4 px-6 rounded-xl font-medium transition-all hover:shadow-lg flex items-center justify-center">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Afegir a l&apos;encàrrec
              </button>
              <p className="text-center text-sm text-datil-brown/60 mt-3">
                Entrega en 2-3 dies laborables
              </p>
            </div>
          </div>
        </div>

        {/* Información adicional con diseño mejorado */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-datil-brown mb-6">
            Informació del producte
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-datil-beige/20">
              <h4 className="font-semibold text-datil-brown mb-4 flex items-center">
                <span className="bg-datil-orange/10 text-datil-orange p-1.5 rounded-lg mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </span>
                Al·lèrgens
              </h4>
              <p className="text-gray-700">{allergens}</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-datil-beige/20">
              <h4 className="font-semibold text-datil-brown mb-4 flex items-center">
                <span className="bg-datil-blue/10 text-datil-blue p-1.5 rounded-lg mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM15.42 15.42l6.37-6.37a4.5 4.5 0 0 0-6.37-6.36L9.06 9.05"></path>
                  </svg>
                </span>
                Informació nutricional
              </h4>
              <p className="text-gray-700">{nutritionalInfo}</p>
            </div>
          </div>
        </div>

        {/* Sección de valoraciones */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-datil-brown mb-6">
            Valoracions dels clients
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Maria G.",
                date: "15/03/2025",
                rating: 5,
                comment:
                  "Increïble pastís! Tota la família va quedar encantada amb el sabor i la presentació.",
              },
              {
                name: "Jordi P.",
                date: "02/02/2025",
                rating: 5,
                comment:
                  "Perfecte per a la celebració. El vaig demanar sense gluten i estava deliciós.",
              },
              {
                name: "Laura S.",
                date: "20/01/2025",
                rating: 4,
                comment:
                  "Molt bo i saludable. La decoració era preciosa, tal com es veu a les fotos.",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-datil-beige/20"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-medium text-datil-brown">
                      {review.name}
                    </p>
                    <p className="text-sm text-datil-brown/60">{review.date}</p>
                  </div>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-datil-yellow text-datil-yellow"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pasteles relacionados */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-datil-brown mb-6">
            També et pot interessar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cakes
              .filter((cake) => cake.slug !== slug)
              .slice(0, 3)
              .map((cake) => (
                <Link
                  key={cake.id}
                  href={`/cakes/${cake.slug}`}
                  className="group"
                >
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
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-bold text-datil-brown group-hover:text-datil-yellow">
                        {cake.name}
                      </h3>
                      <p className="mt-1 text-datil-yellow">{cake.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Preguntas frecuentes */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-datil-brown mb-6">
            Preguntes freqüents
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "Quant temps abans he de fer l'encàrrec?",
                answer:
                  "Recomanem fer l'encàrrec amb almenys 3-4 dies d'antelació per garantir disponibilitat.",
              },
              {
                question: "Es poden personalitzar els ingredients?",
                answer:
                  "Sí, tots els nostres pastissos es poden adaptar a les teves necessitats dietètiques o preferències.",
              },
              {
                question: "Com es conserva el pastís?",
                answer:
                  "Es recomana conservar el pastís a la nevera i consumir-lo en un termini de 3-4 dies per gaudir de la màxima frescor.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-datil-beige/20"
              >
                <h4 className="font-semibold text-datil-brown mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer con información de contacto */}
      <footer className="mt-16 bg-white border-t border-datil-beige/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-datil-brown font-medium">
                ¿Tens alguna pregunta sobre aquest pastís?
              </p>
              <p className="text-datil-brown/70">
                Contacta'ns i t'ajudarem amb el teu encàrrec
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
                href={`mailto:datilbyhelen@gmail.com?subject=Consulta sobre ${cakeDetails.name}&body=Hola, m'agradaria obtenir més informació sobre el pastís ${cakeDetails.name}...`}
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
