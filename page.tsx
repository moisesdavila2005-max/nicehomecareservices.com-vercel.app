'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Content {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
  };
  whyUs: {
    title: string;
    items: string[];
  };
  testimonials: {
    title: string;
    items: Array<{
      quote: string;
      name: string;
      role: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
  };
}

const enContent: Content = {
  hero: {
    title: "Compassionate Care in Your Home",
    subtitle: "Professional home care services in Santa Clara County. 24/7 support for your loved ones in Santa Clara, San Jose, Cupertino, Milpitas & Sunnyvale.",
    cta: "Call Now: (669) 331-4949"
  },
  services: {
    title: "Our Services",
    subtitle: "Personalized care tailored to your family's needs",
    items: [
      {
        title: "Meal Preparation",
        desc: "Nutritious meals prepared fresh according to dietary needs and preferences.",
        icon: "🍲"
      },
      {
        title: "Transportation",
        desc: "Safe driving to medical appointments, errands, and social activities.",
        icon: "🚗"
      },
      {
        title: "Special Needs Care",
        desc: "Compassionate support for seniors with dementia, mobility issues, or other special needs.",
        icon: "❤️"
      },
      {
        title: "Personal Care & Hygiene",
        desc: "Assistance with bathing, grooming, dressing, and daily hygiene.",
        icon: "🛁"
      },
      {
        title: "Housekeeping & Maintenance",
        desc: "Light cleaning, laundry, organization, and home maintenance support.",
        icon: "🧹"
      }
    ]
  },
  whyUs: {
    title: "Why Choose Nice Home Care?",
    items: [
      "24/7 Availability – Always here when you need us",
      "Fully Background-Checked & Trained Caregivers",
      "Compassionate & Culturally Sensitive Care",
      "Licensed & Insured Professionals (License pending)",
      "Serving Santa Clara County Communities",
      "Personalized Care Plans"
    ]
  },
  testimonials: {
    title: "What Our Families Say",
    items: [
      {
        quote: "The caregiver has been a blessing for my mother. Professional, kind, and always on time.",
        name: "Maria R.",
        role: "Daughter, San Jose"
      },
      {
        quote: "Excellent service! They helped my father with transportation and meals. Highly recommend.",
        name: "Carlos M.",
        role: "Son, Cupertino"
      }
    ]
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Ready to discuss how we can help your family?"
  }
};

const esContent: Content = {
  hero: {
    title: "Cuidado Compasivo en su Hogar",
    subtitle: "Servicios profesionales de cuidado en el hogar en el Condado de Santa Clara. Soporte 24/7 para sus seres queridos en Santa Clara, San Jose, Cupertino, Milpitas y Sunnyvale.",
    cta: "Llama Ahora: (669) 331-4949"
  },
  services: {
    title: "Nuestros Servicios",
    subtitle: "Cuidado personalizado adaptado a las necesidades de tu familia",
    items: [
      {
        title: "Preparación de Comidas",
        desc: "Comidas nutritivas preparadas frescas según necesidades y preferencias dietéticas.",
        icon: "🍲"
      },
      {
        title: "Transporte",
        desc: "Conducción segura a citas médicas, mandados y actividades sociales.",
        icon: "🚗"
      },
      {
        title: "Cuidado con Necesidades Especiales",
        desc: "Apoyo compasivo para adultos mayores con demencia, problemas de movilidad u otras necesidades especiales.",
        icon: "❤️"
      },
      {
        title: "Cuidado Personal e Higiene",
        desc: "Asistencia con baño, grooming, vestimenta e higiene diaria.",
        icon: "🛁"
      },
      {
        title: "Limpieza y Mantenimiento del Hogar",
        desc: "Limpieza ligera, lavandería, organización y soporte de mantenimiento del hogar.",
        icon: "🧹"
      }
    ]
  },
  whyUs: {
    title: "¿Por Qué Elegir Nice Home Care?",
    items: [
      "Disponibilidad 24/7 – Siempre aquí cuando nos necesites",
      "Cuidadores Verificados y Capacitados",
      "Cuidado Compasivo y Culturalmente Sensible",
      "Profesionales Licenciados y Asegurados (Licencia pendiente)",
      "Sirviendo Comunidades del Condado de Santa Clara",
      "Planes de Cuidado Personalizados"
    ]
  },
  testimonials: {
    title: "Lo Que Dicen Nuestras Familias",
    items: [
      {
        quote: "La cuidadora ha sido una bendición para mi madre. Profesional, amable y siempre puntual.",
        name: "Maria R.",
        role: "Hija, San Jose"
      },
      {
        quote: "¡Excelente servicio! Ayudaron a mi padre con transporte y comidas. Altamente recomendado.",
        name: "Carlos M.",
        role: "Hijo, Cupertino"
      }
    ]
  },
  contact: {
    title: "Contáctanos",
    subtitle: "¿Listo para hablar sobre cómo podemos ayudar a tu familia?"
  }
};

export default function Home() {
  const [lang, setLang] = useState<'en' | 'es'>('es');
  const content = lang === 'en' ? enContent : esContent;

  // EmailJS initialization (run npm install @emailjs/browser first)
  useEffect(() => {
    // Uncomment and configure after installing package and getting keys from emailjs.com
    /*
    import('@emailjs/browser').then((emailjs) => {
      emailjs.init('YOUR_PUBLIC_KEY_HERE'); // Get from EmailJS dashboard
    });
    */
  }, []);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // EmailJS setup - Replace with your actual keys
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: User needs to run: npm install @emailjs/browser
    // Then initialize in a useEffect with your public key
    // For now, simulate + console (replace with real EmailJS)

    console.log('Form submitted to info@nicehomecareservices.com:', formData);

    // Real EmailJS implementation example:
    /*
    try {
      const emailjs = (await import('@emailjs/browser')).default;
      await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current!, 'YOUR_PUBLIC_KEY');
      setSubmitted(true);
    } catch (error) {
      alert('Error al enviar. Por favor llama al (669) 331-4949');
    }
    */

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 4000);
    setIsSubmitting(false);
  };

  const phone = '+1(669)331-4949';

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image 
              src="/images/logo.png" 
              alt="Nice Home Care Services Logo" 
              width={48} 
              height={48}
              className="rounded-full"
            />
            <div>
              <div className="font-semibold text-xl text-gray-900">Nice Home Care</div>
              <div className="text-xs text-gray-500 -mt-1">Services</div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="px-4 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            >
              {lang === 'en' ? '🇪🇸 Español' : '🇺🇸 English'}
            </button>

            <a href={`tel:${phone}`} className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all">
              📞 {phone}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-bg h-screen flex items-center text-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center z-10">
          <div className="inline-block bg-white/90 text-blue-900 text-sm font-medium px-5 py-2 rounded-full mb-6">
            24/7 • Santa Clara County
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 opacity-90">
            {content.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 font-semibold text-xl px-10 py-5 rounded-2xl transition-all shadow-xl text-center"
            >
              {content.hero.cta}
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold text-xl px-10 py-5 rounded-2xl transition-all"
            >
              {lang === 'en' ? 'Request a Free Consultation' : 'Solicitar Consulta Gratuita'}
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">↓</div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white" id="servicios">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{content.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-md mx-auto">{content.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.items.map((service, index) => (
              <div key={index} className="service-card bg-white border border-gray-100 p-10 rounded-3xl group">
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">{content.whyUs.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {content.whyUs.items.map((item, index) => (
              <div key={index} className="flex gap-4 bg-white p-8 rounded-3xl">
                <div className="text-green-500 text-3xl flex-shrink-0">✓</div>
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-8">
            <Image 
              src="/images/caregiver.jpg" 
              alt="Nuestra cuidadora profesional" 
              width={320} 
              height={320}
              className="rounded-3xl shadow-xl"
            />
          </div>
          <h2 className="text-4xl font-bold text-center mb-12">{content.testimonials.title}</h2>
          <div className="space-y-12">
            {content.testimonials.items.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-10 rounded-3xl border-l-4 border-blue-600">
                <p className="text-2xl italic text-gray-700 mb-8">“{testimonial.quote}”</p>
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-16 bg-white" id="cobertura">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Área de Cobertura</h2>
            <p className="text-xl text-gray-600">Servimos Santa Clara, San José, Cupertino, Milpitas y Sunnyvale con atención rápida 24/7</p>
          </div>

          {/* Interactive Map Placeholder - Google Maps Embed */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-8" style={{ height: '500px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101000!2d-122.05!3d37.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02a1c8e3b5%3A0x9e0b6c5f5f5f5f5f!2sSanta+Clara+County%2C+CA!5e0!3m2!1sen!2sus!4v1720000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Cobertura Santa Clara County"
            ></iframe>
          </div>

          <div className="flex flex-wrap gap-4 justify-center text-lg">
            {['Santa Clara', 'San Jose', 'Cupertino', 'Milpitas', 'Sunnyvale'].map(city => (
              <div key={city} className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-24 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">{content.contact.title}</h2>
            <p className="text-xl opacity-80">{content.contact.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <div className="text-blue-400 text-sm tracking-widest mb-2">LLÁMANOS O ESCRÍBENOS</div>
                <a href={`tel:${phone}`} className="block text-4xl font-semibold hover:text-blue-400 transition-colors">
                  {phone}
                </a>
                <p className="mt-2 text-sm opacity-70">WhatsApp • Llamadas • SMS disponibles</p>
              </div>

              <div>
                <div className="text-blue-400 text-sm tracking-widest mb-2">EMAIL</div>
                <a href="mailto:info@nicehomecareservices.com" className="text-xl hover:text-blue-400">
                  info@nicehomecareservices.com
                </a>
                <p className="text-sm mt-1 opacity-70">Mensajes llegan a Moises y Migdalia (respuesta en < 2 horas)</p>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <p className="text-sm opacity-70">Horario: <span className="font-medium text-white">24 horas al día, 7 días a la semana</span></p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3 bg-white/10 backdrop-blur-lg p-10 rounded-3xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-6">✅</div>
                  <h3 className="text-2xl font-semibold mb-3">¡Gracias!</h3>
                  <p>Nos pondremos en contacto pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm mb-2">Nombre / Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-400"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Teléfono / Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-400"
                      placeholder="(669) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Mensaje / Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={5}
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-400 resize-none"
                      placeholder="Cuéntanos cómo podemos ayudar a tu familia..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 py-5 rounded-2xl font-semibold text-lg transition-all active:scale-[0.985]"
                  >
                    {lang === 'en' ? 'Send Message' : 'Enviar Mensaje'}
                  </button>

                  <p className="text-xs text-center opacity-60">Tus datos están protegidos según la CCPA/CPRA</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/16693314949?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20cuidado%20en%20el%20hogar." 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        💬
        <span>Chatea con nosotros por WhatsApp</span>
      </a>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 text-white mb-6">
              <Image 
                src="/images/logo.png" 
                alt="Nice Home Care Services Logo" 
                width={36} 
                height={36}
                className="rounded-full"
              />
              <span className="font-semibold text-xl">Nice Home Care Services</span>
            </div>
            <p className="text-sm">Cuidado profesional y humano para que tus seres queridos permanezcan en casa.</p>
          </div>

          <div>
            <div className="font-medium text-white mb-4">Enlaces Rápidos</div>
            <div className="space-y-2 text-sm">
              <a href="#servicios" className="block hover:text-white">Servicios</a>
              <a href="#contacto" className="block hover:text-white">Contacto</a>
              <a href="/privacidad" className="block hover:text-white">Política de Privacidad</a>
            </div>
          </div>

          <div>
            <div className="font-medium text-white mb-4">Legal</div>
            <div className="text-xs space-y-1">
              <p>© 2026 Nice Home Care Services. Todos los derechos reservados.</p>
              <p>Licencia HCO pendiente - California Department of Social Services</p>
              <p className="pt-3">
                <a href="/privacidad" className="underline hover:text-white">CCPA / CPRA: No vendemos tus datos</a>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-xs mt-16 opacity-50 border-t border-gray-900 pt-8">
          Este sitio cumple con las regulaciones de California incluyendo CCPA/CPRA.
        </div>
      </footer>
    </div>
  );
}
