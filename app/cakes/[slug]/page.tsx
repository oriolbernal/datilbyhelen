import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import cakes from "@/data/cakes.json";

export function generateStaticParams(): { slug: string }[] {
  return cakes.map((cake) => ({
    slug: cake.slug,
  }));
}

export default async function CakeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cakeDetails = cakes.find((cake) => cake.slug === slug);
  if (!cakeDetails) {
    return <div>Pastís no trobat</div>;
  }
  return (
    <div className="min-h-screen bg-white">
      <div className="container px-4 py-8 mx-auto">
        <Link
          href="/cakes"
          className="inline-flex items-center gap-2 text-datil-brown hover:text-datil-yellow mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Tornar a pastissos</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border bg-white">
              <Image
                src={cakeDetails.images[0] || "/placeholder.svg"}
                alt={cakeDetails.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {cakeDetails.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-md border bg-white"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${cakeDetails.name} - Vista ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-3xl font-bold text-datil-brown">
              {cakeDetails.name}
            </h1>
            <p className="text-2xl font-medium text-datil-yellow mt-2">
              {cakeDetails.price}
            </p>
            <p className="mt-4 text-muted-foreground">
              {cakeDetails.description}
            </p>

            <Separator className="my-6" />

            {/* Size Selection */}
            <div className="space-y-4">
              <h3 className="font-medium text-datil-brown">Mida</h3>
              <div className="grid gap-3">
                {cakeDetails.sizes.map((size, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border rounded-md p-3 cursor-pointer hover:border-datil-yellow"
                  >
                    <label
                      htmlFor={`size-${index}`}
                      className="flex items-center cursor-pointer w-full"
                    >
                      <input
                        type="radio"
                        id={`size-${index}`}
                        name="size"
                        className="mr-2 accent-datil-yellow"
                        defaultChecked={index === 0}
                      />
                      <span>{size.name}</span>
                    </label>
                    <span className="font-medium">{size.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="font-medium text-datil-brown">Sabor</h3>
              <div className="grid grid-cols-2 gap-3">
                {cakeDetails.flavors.map((flavor, index) => (
                  <div
                    key={index}
                    className="flex items-center border rounded-md p-3 cursor-pointer hover:border-datil-yellow"
                  >
                    <label
                      htmlFor={`flavor-${index}`}
                      className="flex items-center cursor-pointer w-full"
                    >
                      <input
                        type="radio"
                        id={`flavor-${index}`}
                        name="flavor"
                        className="mr-2 accent-datil-yellow"
                        defaultChecked={index === 0}
                      />
                      <span>{flavor}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="font-medium text-datil-brown">Quantitat</h3>
              <div className="flex items-center border rounded-md w-fit">
                <button
                  className="p-2 border-r"
                  aria-label="Disminuir quantitat"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4">1</span>
                <button
                  className="p-2 border-l"
                  aria-label="Augmentar quantitat"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-datil-yellow hover:bg-datil-yellow/90 text-white"
                size="lg"
              >
                Afegir a l&apos;encàrrec
              </Button>
              <Button
                variant="outline"
                className="border-datil-yellow text-datil-yellow hover:bg-datil-yellow/10"
                size="lg"
              >
                Consultar disponibilitat
              </Button>
            </div>

            <Separator className="my-6" />

            {/* Additional Info */}
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-datil-brown">Al·lèrgens</h3>
                <p className="text-muted-foreground mt-1">
                  {cakeDetails.allergens.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="font-medium text-datil-brown">
                  Informació nutricional
                </h3>
                <p className="text-muted-foreground mt-1">
                  {cakeDetails.nutritionalInfo}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-datil-brown mb-4">
            Descripció del producte
          </h2>
          <div className="prose max-w-none text-muted-foreground">
            {cakeDetails.longDescription.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-datil-brown mb-6">
            També et pot interessar
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <Link key={item} href="#" className="group">
                <div className="relative aspect-square overflow-hidden rounded-md bg-gray-100 mb-2">
                  <Image
                    src="/images/products.png"
                    alt="Pastís relacionat"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-datil-brown group-hover:text-datil-yellow">
                  Pastís de Fruites
                </h3>
                <p className="text-sm text-datil-yellow">35,00€</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
