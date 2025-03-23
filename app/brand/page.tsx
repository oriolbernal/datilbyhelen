import { ColorPalette } from "@/components/color-palette"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-datil-brown hover:text-datil-yellow mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Tornar a l&apos;inici</span>
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-datil-brown mb-8">Identitat de marca Dàtil</h1>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-datil-brown mb-4">Colors principals</h2>
          <p className="text-muted-foreground mb-6">
            Aquesta és la paleta de colors oficial de Dàtil. Utilitzem aquests colors en totes les nostres comunicacions
            i materials de marca.
          </p>
          <ColorPalette />
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-datil-brown mb-4">Tipografia</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-datil-beige/30 p-6 rounded-lg">
              <h3 className="font-medium mb-2">Archia</h3>
              <p className="text-muted-foreground mb-4">
                Utilitzem Archia com a tipografia principal per a tot el contingut del lloc web i materials de marca.
              </p>
              <div className="space-y-2">
                <p className="text-4xl">Archia Regular</p>
                <p className="text-2xl">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="text-xl">abcdefghijklmnopqrstuvwxyz</p>
                <p className="text-lg">0123456789</p>
              </div>
            </div>

            <div className="bg-datil-beige/30 p-6 rounded-lg">
              <h3 className="font-medium mb-2">Serif</h3>
              <p className="text-muted-foreground mb-4">
                Utilitzem una tipografia serif per als títols principals per crear contrast i destacar.
              </p>
              <div className="space-y-2">
                <p className="text-4xl font-serif">Serif</p>
                <p className="text-2xl font-serif">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="text-xl font-serif">abcdefghijklmnopqrstuvwxyz</p>
                <p className="text-lg font-serif">0123456789</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-datil-brown mb-4">Ús dels colors</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-datil-brown p-4 text-white">
                <h3 className="font-medium">Color primari</h3>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground">
                  El marró s&apos;utilitza per a títols principals i text destacat.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-datil-yellow p-4 text-white">
                <h3 className="font-medium">Color d&apos;accent</h3>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground">
                  El groc s&apos;utilitza per a botons, enllaços i elements interactius.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-datil-beige p-4 text-datil-brown">
                <h3 className="font-medium">Color de fons</h3>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground">
                  El beix s&apos;utilitza per a fons de seccions i per crear contrast.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 flex justify-center">
          <Button className="bg-datil-orange hover:bg-datil-orange/90 text-white">Descarregar guia de marca</Button>
        </div>
      </div>
    </div>
  )
}

