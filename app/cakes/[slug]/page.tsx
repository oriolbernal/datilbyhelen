import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";
import cakes from "@/data/cakes.json";
import fillings from "@/data/fillings.json";
import shapes from "@/data/shapes.json";

export function generateStaticParams(): { slug: string }[] {
  return cakes.map((cake) => ({
    slug: cake.slug,
  }));
}

export default async function CakeDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const cakeDetails = cakes.find((cake) => cake.slug === slug);

  if (!cakeDetails) return <div>Pastís no trobat</div>;

  return (
    <div className="bg-[#F5F3F0] min-h-screen flex flex-col">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link
          href="/cakes"
          className="group flex items-center text-datil-brown hover:text-datil-yellow transition-colors"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Tornar a pastissos
        </Link>
        <div className="flex items-center space-x-4">
          <button className="text-datil-brown hover:text-datil-yellow transition-colors">
            {cakeDetails.icon}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 grid md:grid-cols-2 gap-12 flex-grow">
        {/* Galeria de Imágenes */}
        <div className="space-y-6">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={`${
                process.env.NODE_ENV === "production" ? "/datilbyhelen" : ""
              }${cakeDetails.images[0]}`}
              alt={cakeDetails.name}
              fill
              className="object-cover transition-transform hover:scale-105 duration-500"
              priority
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {cakeDetails.images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden border-2 border-transparent hover:border-datil-yellow transition-all"
              >
                <Image
                  src={`${
                    process.env.NODE_ENV === "production" ? "/datilbyhelen" : ""
                  }${image}`}
                  alt={`Detalle ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Información del Producto */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-datil-brown">
              {cakeDetails.name}
            </h1>

            <p className="text-2xl font-semibold text-datil-yellow">
              {cakeDetails.price}
            </p>
          </div>

          {cakeDetails.description.map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-datil-brown mb-3">
                Forma
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {shapes.map((shape, index) => (
                  <label key={index} className="relative cursor-pointer">
                    <input type="radio" name="shape" className="hidden peer" />
                    <div
                      className="border-2 rounded-xl p-4 text-center transition-all duration-300 ease-in-out
        peer-checked:border-datil-yellow peer-checked:bg-datil-yellow/20 peer-checked:shadow-md
        border-gray-300 hover:border-datil-yellow hover:scale-105"
                    >
                      <span className="text-md font-medium text-datil-brown">
                        {shape.name}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-datil-brown mb-3">
                Farcit
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {fillings.map((filling, index) => (
                  <label key={index} className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="filling"
                      className="hidden peer"
                    />
                    <div
                      className="border-2 rounded-xl p-4 text-center transition-all duration-300 ease-in-out
        peer-checked:border-datil-yellow peer-checked:bg-datil-yellow/20 peer-checked:shadow-md
        border-gray-300 hover:border-datil-yellow"
                    >
                      <span className="text-md font-medium text-datil-brown">
                        {filling.name}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Descripción Expandida */}
      <section className="container mx-auto px-4 mt-12 mb-12">
        {/* Alérgenos e Información Nutricional */}
        <div className="mt-8 space-y-4">
          <div>
            <h4 className="font-semibold text-datil-brown mb-2">Al·lèrgens</h4>
            <p className="text-sm text-gray-600">
              {cakeDetails.allergens.join(", ")}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-datil-brown mb-2">
              Informació nutricional
            </h4>
            <p className="text-sm text-gray-600">
              {cakeDetails.nutritionalInfo}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
