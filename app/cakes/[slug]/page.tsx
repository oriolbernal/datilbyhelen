import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Suspense } from "react";
import cakes from "@/data/cakes.json";
import { CakeDetailClient } from "./client-component";

// Generamos rutas estáticas para todos los pasteles
export function generateStaticParams() {
  return cakes.map((cake) => ({
    slug: cake.slug,
  }));
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CakeDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const cakeDetails = cakes.find((cake) => cake.slug === slug);

  if (!cakeDetails) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-datil-brown mb-4">
          Pastís no trobat
        </h1>
        <Link
          href="/cakes"
          className="inline-flex items-center text-datil-yellow hover:underline"
        >
          <ArrowLeft className="mr-2" />
          Tornar a pastissos
        </Link>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-datil-yellow border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Carregant...
              </span>
            </div>
            <p className="mt-4 text-datil-brown">
              Carregant detalls del pastís...
            </p>
          </div>
        </div>
      }
    >
      <CakeDetailClient cakeDetails={cakeDetails} />
    </Suspense>
  );
}
