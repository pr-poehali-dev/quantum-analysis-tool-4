import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";

interface AddPlaceModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AddPlaceModal({ open, onClose }: AddPlaceModalProps) {
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    cuisine: "",
    avgPrice: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setForm({ name: "", address: "", city: "", cuisine: "", avgPrice: "", description: "" });
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full max-w-lg p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors"
            >
              <Icon name="X" size={20} />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <Icon name="CheckCircle" size={48} className="mx-auto mb-4 text-green-500" />
                <h2 className="text-2xl font-bold mb-2">Спасибо!</h2>
                <p className="text-neutral-600">Заведение отправлено на проверку и скоро появится на карте.</p>
                <button
                  onClick={handleClose}
                  className="mt-6 bg-black text-white px-8 py-3 uppercase tracking-wide text-sm hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight">Добавить заведение</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wide text-neutral-500 mb-1 block">Название *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Столовая №1"
                      className="w-full border border-neutral-300 px-4 py-2 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="text-xs uppercase tracking-wide text-neutral-500 mb-1 block">Город *</label>
                      <input
                        required
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        placeholder="Москва"
                        className="w-full border border-neutral-300 px-4 py-2 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-xs uppercase tracking-wide text-neutral-500 mb-1 block">Цена за нищеду (₽) *</label>
                      <input
                        required
                        type="number"
                        value={form.avgPrice}
                        onChange={(e) => setForm({ ...form, avgPrice: e.target.value })}
                        placeholder="200"
                        className="w-full border border-neutral-300 px-4 py-2 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-neutral-500 mb-1 block">Адрес *</label>
                    <input
                      required
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      placeholder="ул. Ленина, 10"
                      className="w-full border border-neutral-300 px-4 py-2 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-neutral-500 mb-1 block">Самая дешёвая и сытная позиция</label>
                    <input
                      value={form.cuisine}
                      onChange={(e) => setForm({ ...form, cuisine: e.target.value })}
                      placeholder="Например: борщ + хлеб за 90₽"
                      className="w-full border border-neutral-300 px-4 py-2 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-neutral-500 mb-1 block">Описание</label>
                    <textarea
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      placeholder="Расскажи почему это место стоит посетить..."
                      rows={3}
                      className="w-full border border-neutral-300 px-4 py-2 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-3 uppercase tracking-wide text-sm font-medium hover:bg-neutral-800 transition-colors cursor-pointer mt-2"
                  >
                    Отправить на проверку
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}