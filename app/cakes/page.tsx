import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import cakes2 from "@/data/cakes.json";

export default function CakesPage() {
  // This would normally come from a database or CMS
  const cakes = [
    {
      id: 1,
      name: "Pastís Fluffy de Xocolata",
      slug: "pastis-fluffy-xocolata",
      price: "45,00€",
      image: "/images/products.png",
    },
    {
      id: 2,
      name: "Pastís de Carbassó i Cacau",
      slug: "pastis-carbasso-cacau",
      price: "40,00€",
      image: "/images/pantone.png",
    },
    {
      id: 3,
      name: "Pastís Personalitzat",
      slug: "pastis-personalitzat",
      price: "Des de 50,00€",
      image: "/images/treballem.png",
    },
    {
      id: 4,
      name: "Pastís de Fruites",
      slug: "pastis-fruites",
      price: "35,00€",
      image: "/images/products.png",
    },
    {
      id: 5,
      name: "Pastís de Vainilla",
      slug: "pastis-vainilla",
      price: "40,00€",
      image: "/images/pantone.png",
    },
    {
      id: 6,
      name: "Pastís d'Aniversari",
      slug: "pastis-aniversari",
      price: "45,00€",
      image: "/images/products.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container px-4 py-8 mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-datil-brown hover:text-datil-yellow mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Tornar a l&apos;inici</span>
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-datil-brown mb-6">
          Els nostres pastissos
        </h1>
        <p className="text-muted-foreground max-w-3xl mb-10">
          Tots els nostres pastissos estan elaborats amb ingredients 100%
          ecològics i sense sucre refinat. Perfectes per a celebracions
          especials, aniversaris o simplement per gaudir d&apos;un dolç
          saludable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes2.map((cake) => (
            <Link key={cake.id} href={`/cakes/${cake.slug}`} className="group">
              <div className="overflow-hidden rounded-lg border shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src={cake.images[0] || "/placeholder.svg"}
                    alt={cake.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-serif text-xl font-bold text-datil-brown group-hover:text-datil-yellow">
                    {cake.name}
                  </h2>
                  <p className="mt-1 text-datil-yellow">{cake.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
