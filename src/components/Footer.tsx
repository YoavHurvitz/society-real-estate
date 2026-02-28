import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="relative bg-gray-900 pt-24 pb-12 px-8 md:px-16 lg:px-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Home Night"
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              תיווך מקצועי <br /> בלב תל אביב
            </h2>
            <p className="text-white/70 text-lg max-w-md">
              מאז 1983 אנו מספקים חווית שירות בוטיק מותאמת אישית לצרכים שלכם, ושמים דגש על אמינות ושקיפות במרכז וצפון תל אביב.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-right flex flex-col gap-4"
          >
            <div className="flex items-center justify-end gap-3 text-white/80 hover:text-white transition-colors">
              <span className="text-lg" dir="ltr">050-5697969</span>
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <a href="mailto:allon@society4u.co.il" className="flex items-center justify-end gap-3 text-white/80 hover:text-white transition-colors">
              <span className="text-lg">allon@society4u.co.il</span>
              <Mail className="w-5 h-5 text-accent" />
            </a>
            <div className="flex items-center justify-end gap-3 text-white/80 hover:text-white transition-colors">
              <span className="text-lg">דיזנגוף 214, תל אביב</span>
              <MapPin className="w-5 h-5 text-accent" />
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="relative z-10 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-white tracking-tight">
            <img src="https://society4u.co.il/RealEstate/assets/images/header.svg" alt="סוסייטי נכסים" className="h-8 object-contain" />
          </div>

          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors cursor-pointer">תנאי שימוש</a>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">פרטיות</a>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">עוגיות</a>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">נגישות</a>
          </div>

          <div className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} כל הזכויות שמורות לסוסייטי נכסים.
          </div>
        </div>
      </div>
    </footer>
  );
}
