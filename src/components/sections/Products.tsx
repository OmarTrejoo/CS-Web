"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { fadeUp, stagger } from "@/lib/animations";

/** Mini placeholder para `placeholder="blur"` (sin estirar layout mientras llega la foto) */
const IMAGE_BLUR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8/J+xHgAGgwJ/l4Pg6QAAAABJRU5ErkJggg==";

export default function Products() {
  return (
    <section id="productos" className="bg-white py-18 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mb-4"
        >
          <h2 className="text-[clamp(34px,4.8vw,54px)] font-bold leading-[0.95] text-[var(--color-text)]">
            Accesorios y componentes
            <br />
            <span className="text-[var(--color-brand)]">para tu equipo.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-[clamp(16px,2.1vw,21px)] leading-[1.25] text-[var(--color-text-2)]">
            Estas son algunas opciones. Si buscas algo en específico, te lo
            cotizamos.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="mb-1 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3"
        >
          {PRODUCT_CATEGORIES.map((cat) => (
            <motion.article
              key={cat.title}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative min-w-[82%] snap-start overflow-hidden rounded-xl bg-[var(--color-bg)] transition-shadow duration-300 hover:shadow-[0_14px_38px_rgba(9,13,9,0.12)] sm:min-w-0"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[var(--color-bg-alt)]">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width:640px) 85vw, (max-width:1024px) 45vw, 28vw"
                  quality={78}
                  placeholder="blur"
                  blurDataURL={IMAGE_BLUR}
                  fetchPriority="low"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/60 via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-[16px] font-semibold text-[var(--color-text)]">
                  {cat.title}
                </h3>
                <p className="mt-1 text-[12px] leading-relaxed text-[var(--color-text-2)]">
                  {cat.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
