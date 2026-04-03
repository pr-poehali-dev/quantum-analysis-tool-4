import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";
import AddPlaceModal from "./AddPlaceModal";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/b5186852-b8c2-48b9-b29f-5637c23a4deb/files/e7b267da-efec-4414-992b-3e5e384f3dd2.jpg"
          alt="Nizhny Novgorod Kremlin"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)", marginTop: "3cm" }}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-[#ffffff] text-center">   ПИТАНИЕ 
ДЛЯ НИЩИХ
</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">Находи вкусные места рядом с тобой — без переплат. Сотни точек с едой за копейки тут.
</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="bg-white text-black py-3 uppercase tracking-wide text-sm font-medium hover:bg-neutral-200 transition-colors duration-300 cursor-pointer px-8">
            Найти еду рядом
          </button>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-white text-black px-8 py-3 uppercase tracking-wide text-sm font-medium hover:bg-neutral-200 transition-colors duration-300 cursor-pointer"
          >
            Добавить точку
          </button>
        </div>
      </div>

      <AddPlaceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}