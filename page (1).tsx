'use client';

import { useState } from 'react';

export default function Privacidad() {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Política de Privacidad</h1>
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="px-5 py-2 border rounded-full text-sm"
          >
            {lang === 'es' ? 'English' : 'Español'}
          </button>
        </div>

        <div className="prose prose-lg max-w-none">
          {lang === 'es' ? (
            <div>
              <p className="text-xl">Última actualización: Junio 2026</p>
              
              <h2>Introducción</h2>
              <p>Nice Home Care Services respeta tu privacidad y se compromete a protegerla de acuerdo con la California Consumer Privacy Act (CCPA/CPRA) y otras leyes aplicables.</p>

              <h2>Información que Recolectamos</h2>
              <p>Recopilamos información de contacto (nombre, teléfono, email) únicamente para responder a tus consultas y proporcionar servicios de cuidado. No vendemos datos personales.</p>

              <h2>Tus Derechos bajo CCPA/CPRA</h2>
              <ul>
                <li>Derecho a saber qué datos tenemos</li>
                <li>Derecho a eliminar tus datos</li>
                <li>Derecho a corregir información inexacta</li>
                <li>Derecho a limitar el uso de datos sensibles</li>
              </ul>

              <p>Para ejercer tus derechos, contacta a info@nicehomecareservices.com</p>

              <h2>Contacta con Nosotros</h2>
              <p>info@nicehomecareservices.com</p>
              <p>Tel: (669) 331-4949</p>
            </div>
          ) : (
            <div>
              <p className="text-xl">Last updated: June 2026</p>
              
              <h2>Introduction</h2>
              <p>Nice Home Care Services respects your privacy and is committed to protecting it in accordance with the California Consumer Privacy Act (CCPA/CPRA) and other applicable laws.</p>

              <h2>Information We Collect</h2>
              <p>We collect contact information (name, phone, email) solely to respond to your inquiries and provide care services. We do not sell personal data.</p>

              <h2>Your Rights under CCPA/CPRA</h2>
              <ul>
                <li>Right to know what data we have</li>
                <li>Right to delete your data</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to limit use of sensitive data</li>
              </ul>

              <p>To exercise your rights, contact info@nicehomecareservices.com</p>

              <h2>Contact Us</h2>
              <p>info@nicehomecareservices.com</p>
              <p>Tel: (669) 331-4949</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
