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
    <section id="productos" className="bg-white py-14 lg:py-18">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mb-6"
        >
          <h2 className="text-[clamp(28px,4vw,46px)] font-bold leading-[0.95] text-[var(--color-text)]">
            Accesorios y componentes
            <br />
            <span className="text-[var(--color-brand)]">para tu equipo.</span>
          </h2>
          <p className="mt-2 max-w-2xl text-[15px] leading-[1.3] text-[var(--color-text-2)]">
            Estas son algunas opciones. Si buscas algo en específico, te lo
            cotizamos.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 lg:grid-cols-6"
        >
          {PRODUCT_CATEGORIES.map((cat) => (
            <motion.article
              key={cat.title}
              variants={fadeUp}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group min-w-[52%] snap-start overflow-hidden rounded-xl bg-[var(--color-bg)] transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(9,13,9,0.10)] sm:min-w-0"
            >
              <div className="relative h-32 w-full overflow-hidden bg-[var(--color-bg-alt)]">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width:640px) 55vw, (max-width:1024px) 30vw, 16vw"
                  quality={75}
                  placeholder="blur"
                  blurDataURL={IMAGE_BLUR}
                  fetchPriority="low"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/55 via-transparent to-transparent" />
              </div>
              <div className="p-3">
                <h3 className="text-[13px] font-semibold leading-tight text-[var(--color-text)]">
                  {cat.title}
                </h3>
                <p className="mt-1 text-[11px] leading-relaxed text-[var(--color-text-2)]">
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
