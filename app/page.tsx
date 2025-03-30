import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={`${
                process.env.NODE_ENV === "production" ? "/datilbyhelen" : ""
              }/images/logo.png`}
              alt="Dàtil Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
            <span className="font-serif text-xl font-bold text-datil-brown">
              DÀTIL
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="#about"
              className="font-medium transition-colors hover:text-datil-yellow"
            >
              Qui som
            </Link>
            <Link
              href="#products"
              className="font-medium transition-colors hover:text-datil-yellow"
            >
              Productes
            </Link>
            <Link
              href="#order"
              className="font-medium transition-colors hover:text-datil-yellow"
            >
              Encàrrecs
            </Link>
            <Link
              href="#contact"
              className="font-medium transition-colors hover:text-datil-yellow"
            >
              Contacte
            </Link>
          </nav>
          <Link href="/cakes/" className="group">
            <Button className="bg-datil-yellow hover:bg-datil-yellow/90 text-white">
              Demana el teu pastís
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-white">
          <div className="container px-4 py-12 md:py-24 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <h1 className="font-serif text-4xl font-bold tracking-tighter text-datil-brown sm:text-5xl md:text-6xl">
                  Rebosteria Orgànica
                </h1>
                <p className="mt-4 text-xl text-datil-yellow font-serif italic">
                  Feta per encàrrec per a tota la família
                </p>
                <p className="mt-6 text-muted-foreground md:text-lg">
                  Dolços ecològics i sense sucre, elaborats amb ingredients
                  naturals i molt d&apos;amor.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-datil-yellow hover:bg-datil-yellow/90 text-white"
                    size="lg"
                  >
                    Veure productes
                  </Button>
                  <Button
                    variant="outline"
                    className="border-datil-yellow text-datil-yellow hover:bg-datil-yellow/10"
                    size="lg"
                  >
                    Contactar
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={`${
                    process.env.NODE_ENV === "production" ? "/datilbyhelen" : ""
                  }/images/hero-banner.png`}
                  alt="Dàtil Rebosteria Orgànica"
                  width={600}
                  height={600}
                  className="mx-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-datil-beige/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative">
                <Image
                  src={`${
                    process.env.NODE_ENV === "production" ? "/datilbyhelen" : ""
                  }/images/illustrations.png`}
                  alt="Dàtil illustrations"
                  width={600}
                  height={600}
                  className="mx-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-datil-brown">
                  Qui som
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  A Dàtil elaborem dolços ecològics i sense sucre, pensats per a
                  tothom qui vol gaudir d&apos;un plaer dolç sense renunciar a
                  una alimentació saludable.
                </p>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Tots els nostres productes estan fets amb ingredients 100%
                  naturals i orgànics, seleccionats amb cura per oferir el
                  millor sabor i qualitat.
                </p>
                <p className="mt-4 text-muted-foreground md:text-lg flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-datil-orange" />
                  Fet amb amor, per a tu i els teus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-datil-brown">
                Els nostres productes
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-lg">
                Dolços ecològics i sense sucre, elaborats amb ingredients
                naturals
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-[250px] w-full">
                  <Image
                    src={`${
                      process.env.NODE_ENV === "production"
                        ? "/datilbyhelen"
                        : ""
                    }/images/products.png`}
                    alt="Dolços ecològics i sense sucre"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-datil-brown mb-2">
                    Dolços variats
                  </h3>
                  <p className="text-muted-foreground">
                    Donuts, cookies i muffins elaborats amb ingredients
                    ecològics i endolcits de forma natural.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-[250px] w-full">
                  <Image
                    src={`${
                      process.env.NODE_ENV === "production"
                        ? "/datilbyhelen"
                        : ""
                    }/images/pantone.png`}
                    alt="Pa de pessic de carbassó i cacau"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-datil-brown mb-2">
                    Pastissos
                  </h3>
                  <p className="text-muted-foreground">
                    Pastissos fets amb diferents masses i productes ecològica,
                    perfecte per a celebrar.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-[250px] w-full bg-datil-beige/30 flex items-center justify-center">
                  <Image
                    src={`${
                      process.env.NODE_ENV === "production"
                        ? "/datilbyhelen"
                        : ""
                    }/images/treballem.png`}
                    alt="Treballem per encàrrec"
                    fill
                    className="object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-datil-brown mb-2">
                    Personalitzats
                  </h3>
                  <p className="text-muted-foreground">
                    Pastissos i dolços personalitzats per a celebracions
                    especials, adaptats a les teves necessitats.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Order Process Section */}
        <section id="order" className="py-16 md:py-24 bg-datil-beige/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-datil-brown">
                Com fer un encàrrec
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-lg">
                Treballem per encàrrec per garantir la màxima frescor i qualitat
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-datil-yellow text-white mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-datil-brown">
                  Contacta&apos;ns
                </h3>
                <p className="text-muted-foreground">
                  Envia&apos;ns un missatge a través d&apos;Instagram o per
                  correu electrònic explicant què necessites.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-datil-orange text-white mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-datil-brown">
                  Personalització
                </h3>
                <p className="text-muted-foreground">
                  Parlarem sobre els teus gustos, necessitats dietètiques i la
                  data de lliurament.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-datil-blue text-white mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-datil-brown">
                  Recollida
                </h3>
                <p className="text-muted-foreground">
                  Un cop confirmat l&apos;encàrrec, podràs recollir els teus
                  dolços en la data acordada.
                </p>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/cakes/" className="group">
                <Button className="bg-datil-yellow hover:bg-datil-yellow/90 text-white">
                  Demana el teu pastís
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-datil-brown">
                Segueix-nos a Instagram
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-lg">
                <span className="font-medium">@datilbyhelen</span> - Descobreix
                les nostres creacions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-md">
                <Image
                  src={`${
                    process.env.NODE_ENV === "production" ? "/datilbyhelen" : ""
                  }/images/products.png`}
                  alt="Instagram post"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-md">
                <Image
                  src={`${
                    process.env.NODE_ENV === "production" ? "/datilbyhelen" : ""
                  }/images/pantone.png`}
                  alt="Instagram post"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-md">
                <Image
                  src={`${
                    process.env.NODE_ENV === "production" ? "/datilbyhelen" : ""
                  }/images/illustrations.png`}
                  alt="Instagram post"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-md">
                <Image
                  src={`${
                    process.env.NODE_ENV === "production" ? "/datilbyhelen" : ""
                  }/images/reels-cover.png`}
                  alt="Instagram post"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="https://www.instagram.com/datilbyhelen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-datil-orange hover:text-datil-orange/90"
              >
                <Instagram className="h-5 w-5" />
                <span className="font-medium">Segueix-nos a Instagram</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-datil-beige/30 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-datil-brown">
                Què diuen els nostres clients
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Marta A.",
                  quote:
                    "Els dolços de Dàtil són increïbles! No es nota gens que no porten sucre, i són perfectes per a la meva dieta.",
                },
                {
                  name: "Elena G.",
                  quote:
                    "Vaig encarregar un pastís per l'aniversari del meu fill i va ser tot un èxit. Tothom va quedar sorprès quan vam dir que era sense sucre!",
                },
                {
                  name: "Bioalella",
                  quote:
                    "La millor rebosteria ecològica que hem provat. Ingredients de primera qualitat i un sabor excepcional.",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="text-center p-6 border-none shadow-md"
                >
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-datil-yellow"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="mb-4 italic text-muted-foreground">
                      {testimonial.quote}
                    </p>
                    <p className="font-medium text-datil-brown">
                      {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-datil-brown mb-6">
                  Contacta&apos;ns
                </h2>
                <p className="text-muted-foreground mb-8">
                  Si tens alguna pregunta o vols fer un encàrrec, no dubtis en
                  contactar-nos. Estarem encantats d&apos;ajudar-te!
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-datil-yellow mt-0.5" />
                    <div>
                      <h3 className="font-medium">Ubicació</h3>
                      <p className="text-muted-foreground">Tiana, Catalunya</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-datil-yellow mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">
                        datilbyhelen@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Instagram className="h-5 w-5 text-datil-yellow mt-0.5" />
                    <div>
                      <h3 className="font-medium">Instagram</h3>
                      <p className="text-muted-foreground">@datilbyhelen</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-datil-beige/30 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-datil-brown">
                  Envia&apos;ns un missatge
                </h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        placeholder="El teu nom"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        placeholder="El teu email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Missatge
                    </label>
                    <textarea
                      id="message"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 min-h-[120px]"
                      placeholder="Explica'ns què necessites"
                    />
                  </div>
                  <Button className="w-full bg-datil-yellow hover:bg-datil-yellow/90 text-white">
                    Enviar missatge
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={`${
                  process.env.NODE_ENV === "production" ? "/datilbyhelen" : ""
                }/images/logo.png`}
                alt="Dàtil Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
              <span className="font-serif text-xl font-bold text-datil-brown">
                DÀTIL
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Rebosteria orgànica - Dolços ecològics i sense sucre
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/datilbyhelen"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-datil-beige/30 p-2 text-datil-yellow hover:bg-datil-yellow/20"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2025 Dàtil by Helen. Tots els drets reservats.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:underline">
                Política de privacitat
              </Link>
              <Link href="#" className="hover:underline">
                Termes i condicions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
