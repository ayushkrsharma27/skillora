import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { NAV_ITEMS } from "../../constants/navigation";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-80 flex-col bg-white p-6 shadow-2xl"
            initial={{ x: 320 }}
            animate={{ x: 0 }}
            exit={{ x: 320 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mb-8 flex justify-end">
              <button onClick={onClose}>
                <X />
              </button>
            </div>

            <nav className="flex flex-col gap-5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={onClose}
                  className="text-lg font-medium hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto space-y-3">
              <Button variant="outline" className="w-full">
                Login
              </Button>

              <Button className="w-full">
                Get Started
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}