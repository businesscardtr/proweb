"use client";

import { motion, type Variants } from "framer-motion";
import { Leaf, Ruler, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ClothingRailHero,
  type RailGarment,
} from "@/components/ui/product-rail-gallery";

const RAIL_ITEMS: RailGarment[] = [
  {
    id: "bone-tee",
    name: "Ağır Örgü Tişört · Bej",
    kind: "tee",
    color: "#EFEBE2",
    tag: "₺980",
    description: "240 gr organik pamuk, göğüste ton tonuna nakış detayı.",
    details: ["240 gr", "Normal kesim", "Nakış detay"],
    image:
      "https://cdn.21st.dev/assets/mirror/14/1485bf44725b18fcdba71bfae54d67d648ab3bff4b24215a042c0cc4c895a2e6.webp",
    backImage:
      "https://cdn.21st.dev/assets/mirror/69/69937e656430ae33d950303e0d53051273e5b02189750ef1e7429ec4bbf95e20.webp",
    sideImage:
      "https://cdn.21st.dev/assets/mirror/83/838468c32f16b4acba62e4601276737411156052444712ff2534fefe994a7bed.webp",
  },
  {
    id: "cc-graphic",
    name: "Baskılı Tişört · Siyah",
    kind: "tee",
    color: "#101214",
    tag: "₺1.050",
    description: "Ön ve arkada Eray Butik işlemeli siyah tişört.",
    details: ["240 gr", "Normal kesim", "Serigrafi baskı"],
    image:
      "https://cdn.21st.dev/assets/mirror/d7/d769f183472d0fd98a7aff2a643593748cd36ef9da1497d9bf6f0d87d1025a9b.webp",
    backImage:
      "https://cdn.21st.dev/assets/mirror/fe/fec6f7e96b198cc5b9aad333ca2c4c10968a746d87f6dc11d9c118607b509058.webp",
    sideImage:
      "https://cdn.21st.dev/assets/mirror/b3/b3b6984ea94b8b8cd19fb15387e89dca457ac0f947115c2a54a33217e4fb4571.webp",
  },
  {
    id: "oxford-sky",
    name: "Oxford Gömlek · Gök Mavisi",
    kind: "shirt",
    color: "#A3D3EB",
    tag: "₺1.450",
    description: "Düğmeli yaka, cebinde ince Eray Butik nakışı.",
    details: ["Oxford pamuk", "Düğmeli yaka", "Cep detayı"],
    image:
      "https://cdn.21st.dev/assets/mirror/47/470a7723cef068f81e8a4c09d1ab3f8630c61b734c2168b10f3858e45efbf31f.webp",
    backImage:
      "https://cdn.21st.dev/assets/mirror/9b/9be14e5dce879756775677e2d82dadc2ad9a1690b7df2f82de360cb3600d0ee5.webp",
    sideImage:
      "https://cdn.21st.dev/assets/mirror/59/5984d5ca60fd1aeee7e688ec33c2219a1c537fcde90d2accab813c13985f8632.webp",
  },
  {
    id: "cardigan-olive",
    name: "Örgü Hırka · Zeytin Yeşili",
    kind: "knit",
    color: "#758151",
    tag: "₺1.890",
    description: "Ahşap düğmeli, kaba dokulu yün hırka.",
    details: ["Lambswool", "Ahşap düğme", "V yaka"],
    image:
      "https://cdn.21st.dev/assets/mirror/58/581b13c5ca241c653dc94d2c8048c92a60f022cfbaaf153261076d3a6655827e.webp",
    backImage:
      "https://cdn.21st.dev/assets/mirror/d9/d9178d906d37268565cf10af3431aee543aacfc73610f7fa7b0fa4758c498cb3.webp",
    sideImage:
      "https://cdn.21st.dev/assets/mirror/de/dee1c529600e0460413f1a9b07a29bedb7ea7dc96181fce5d9d6501231e6e45d.webp",
  },
  {
    id: "hoodie-heather",
    name: "Kapüşonlu Sweat · Gri Melanj",
    kind: "hoodie",
    color: "#A0A5AB",
    tag: "₺1.650",
    description: "Göğüste Eray Butik logosu, kanguru cep.",
    details: ["400 gr şardonlu", "Kanguru cep", "Göğüs baskı"],
    image:
      "https://cdn.21st.dev/assets/mirror/51/51750ba098dd622df46695bca781b3f0ec336a36b93b070e638cc04455def6d6.webp",
    backImage:
      "https://cdn.21st.dev/assets/mirror/e7/e75c4ac8fb7f14caae756338a31f81f1437bb312b78e0d7d906e9f956e7968fa.webp",
    sideImage:
      "https://cdn.21st.dev/assets/mirror/a2/a2eb2463d52146c341ede6bb9f6067e917a23eb29b7b1d1d4c40ac084a01c7ce.webp",
  },
  {
    id: "sweat-lilac",
    name: "Sweatshirt · Lila",
    kind: "knit",
    color: "#CCB2E0",
    tag: "₺1.390",
    description: "Kabartma baskılı, 400 gr şardonlu lila sweatshirt.",
    details: ["400 gr şardonlu", "Fitilli yaka", "Kabartma baskı"],
    image:
      "https://cdn.21st.dev/assets/mirror/8e/8e38660e2add9637c27846d9b8d620f2abb228a5a153ccfd7b1c808b6845e1f8.webp",
    backImage:
      "https://cdn.21st.dev/assets/mirror/b9/b9214a6e009ce4b3044595a51ea010c299135bab5b26775c43d7175c86e77898.webp",
    sideImage:
      "https://cdn.21st.dev/assets/mirror/59/591872e42b483c43c1cd08a3ac4d7d40c0b5fa2bc585a36096faded2e696e84e.webp",
  },
  {
    id: "polo-forest",
    name: "Pike Polo · Orman Yeşili",
    kind: "tee",
    color: "#185B37",
    tag: "₺1.190",
    description: "Göğüste bej Eray Butik nakışlı pike polo.",
    details: ["Pike örgü", "İki düğme", "Nakış detay"],
    image:
      "https://cdn.21st.dev/assets/mirror/19/19fe43cb681195ae227e3164088d86a07a1b6e33cc54c6e35637374736a16894.webp",
    backImage:
      "https://cdn.21st.dev/assets/mirror/e0/e095182b1a7f04e600c5662aa871b4c055c294b152586817d84e312c22f744cf.webp",
    sideImage:
      "https://cdn.21st.dev/assets/mirror/00/005a8e10be234bc40917f3153208b8196ba1610c53c987e39942da1f4a7cd808.webp",
  },
  {
    id: "henley-brick",
    name: "Henley · Kiremit",
    kind: "knit",
    color: "#B05139",
    tag: "₺1.050",
    description: "Üç düğmeli, uzun kollu toprak tonu henley.",
    details: ["Şardonlu pamuk", "Üç düğme", "Uzun kol"],
    image:
      "https://cdn.21st.dev/assets/mirror/84/84aa4b0e21ed11fcbc083647a607b94ee3a6c21cb66c114cfb1dad0792c15499.webp",
    backImage:
      "https://cdn.21st.dev/assets/mirror/01/01c299df56a29afca8dad4a64858bd506667338bfbd0435118e6c3698c7881b3.webp",
    sideImage:
      "https://cdn.21st.dev/assets/mirror/9c/9ca38eeb156aae7d199d3c1ffb7947e395f77d1f094eea006c1b5fbb22352b4e.webp",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const FEATURES = [
  {
    icon: Leaf,
    title: "Seçilmiş Kumaşlar",
    body: "Her parça; doğal elyaf ve uzun ömürlü dokumalardan, elle seçilerek üretime giriyor.",
  },
  {
    icon: Ruler,
    title: "Zamansız Kesim",
    body: "Sezonluk trendler değil, yıllarca dolabınızda kalacak siluetler tasarlıyoruz.",
  },
  {
    icon: Truck,
    title: "Türkiye'ye Ücretsiz Kargo",
    body: "750₺ üzeri siparişlerde kargo bizden, 2 iş günü içinde adresinizde.",
  },
];

export default function Home() {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="font-heading text-xl font-semibold tracking-[0.08em]"
          >
            ERAY BUTİK
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#koleksiyon" className="transition-colors hover:text-foreground">
              Koleksiyon
            </a>
            <a href="#hikaye" className="transition-colors hover:text-foreground">
              Hikayemiz
            </a>
            <a href="#iletisim" className="transition-colors hover:text-foreground">
              İletişim
            </a>
          </nav>
          <Button
            size="sm"
            className="rounded-full px-4"
            nativeButton={false}
            render={<a href="#koleksiyon" />}
          >
            Mağazayı Gör
          </Button>
        </div>
      </motion.header>

      <main id="top" className="flex-1">
        <section className="relative overflow-hidden px-6 pt-14 pb-4 text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="mx-auto flex max-w-2xl flex-col items-center gap-5"
          >
            <motion.p
              variants={item}
              className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold"
            >
              Yeni Sezon · El İşçiliği Koleksiyonu
            </motion.p>
            <motion.h1
              variants={item}
              className="font-heading text-4xl font-medium tracking-tight sm:text-5xl"
            >
              Zamansız parçalar,
              <br className="hidden sm:block" /> güncel siluetler.
            </motion.h1>
            <motion.p
              variants={item}
              className="max-w-[46ch] text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              Eray Butik; özenle seçilmiş kumaşlar ve ustalıkla işlenmiş
              detaylarla hazırlanan modern bir gardırop sunar. Askıdaki her
              parçayı çevirerek önünü, arkasını ve dokusunu inceleyin.
            </motion.p>
            <motion.div variants={item} className="mt-1 flex gap-3">
              <Button size="lg" className="rounded-full bg-gold px-6 text-gold-foreground hover:bg-gold/90">
                Koleksiyonu İncele
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-6">
                Randevu Al
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <section id="koleksiyon">
          <ClothingRailHero
            items={RAIL_ITEMS}
            hanger="wood"
            eyebrow="Askıda Dokuz Parça"
            heading="Dolaşın, çevirin, hissedin."
            caption="Raydan bir parça seçin; önünü, arkasını ve kumaş dokusunu yakından görün."
            autoplay
            action={
              <Button className="rounded-full bg-gold px-6 text-gold-foreground hover:bg-gold/90">
                Tüm Koleksiyonu Gör
              </Button>
            }
          />
        </section>

        <section className="px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3"
          >
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={item}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border/70 bg-card px-6 py-8 text-center"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-muted text-gold">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="font-heading text-lg font-medium">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="hikaye" className="px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
              Hikayemiz
            </p>
            <h2 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
              Küçük atölyeden, özenli bir butiğe.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Eray Butik, kumaş seçiminden dikişine kadar her adımın elden
              geçtiği küçük bir atölyede hayat buldu. Bugün her koleksiyon,
              aynı titizlikle ve sınırlı sayıda üretiliyor.
            </p>
          </motion.div>
        </section>

        <section className="px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground"
          >
            <h2 className="font-heading text-2xl font-medium sm:text-3xl">
              Yeni koleksiyondan ilk haberdar olun.
            </h2>
            <p className="max-w-[42ch] text-sm text-primary-foreground/80">
              E-posta listemize katılın; sınırlı üretim parçaları ve özel
              davetler için ilk sırada olun.
            </p>
            <form
              className="mt-2 flex w-full max-w-md flex-col gap-2 sm:flex-row"
              onSubmit={(event) => event.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                E-posta adresi
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="e-posta adresiniz"
                className="h-10 flex-1 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus-visible:ring-2 focus-visible:ring-gold"
              />
              <Button type="submit" className="h-10 rounded-full bg-gold px-6 text-gold-foreground hover:bg-gold/90">
                Katıl
              </Button>
            </form>
          </motion.div>
        </section>
      </main>

      <footer id="iletisim" className="border-t border-border/70 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p className="font-heading text-base tracking-[0.06em] text-foreground">
            ERAY BUTİK
          </p>
          <p>Rumeli Cd. No:14, Nişantaşı, İstanbul · info@eraybutik.com</p>
          <a
            href="https://instagram.com"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
            @eraybutik
          </a>
        </div>
      </footer>
    </>
  );
}
