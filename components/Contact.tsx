
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    rgpd: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.rgpd) {
      alert("Veuillez accepter le traitement de vos données (RGPD).");
      return;
    }
    
    const subject = encodeURIComponent(`Nouveau contact Portfolio - ${formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Téléphone: ${formData.phone || 'Non renseigné'}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:Anaelle.franoux@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-5xl mx-auto bg-provence-beige/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <div className="md:w-1/3 bg-provence-earth p-8 md:p-10 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-serif mb-6">Contactez-moi</h3>
            <p className="opacity-80 leading-relaxed mb-8">
              Prête à discuter de vos futurs projets ou d'une opportunité au sein de votre agence. Je suis mobile dans toute la France.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-provence-yellow mt-1">●</span>
              <div>
                <p className="font-bold">Localisation</p>
                <p className="text-sm opacity-80">Béthune, Pas-de-Calais</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-provence-yellow mt-1">●</span>
              <div>
                <p className="font-bold">Mobilité</p>
                <p className="text-sm opacity-80">Toute la France (Déplacement & Télétravail)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-provence-yellow mt-1">●</span>
              <div>
                <p className="font-bold">Email</p>
                <p className="text-sm opacity-80 break-all">Anaelle.franoux@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 p-8 md:p-10 bg-white">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Nom Complet</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Votre nom" 
                  className="w-full border-b border-gray-200 py-3 focus:border-provence-yellow outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="votre@email.com" 
                  className="w-full border-b border-gray-200 py-3 focus:border-provence-yellow outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Numéro de téléphone (Optionnel)</label>
              <input 
                type="tel" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="06 00 00 00 00" 
                className="w-full border-b border-gray-200 py-3 focus:border-provence-yellow outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Votre Message</label>
              <textarea 
                rows={4} 
                required 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Discutons de votre projet ou d'une opportunité..." 
                className="w-full border-b border-gray-200 py-3 focus:border-provence-yellow outline-none transition-colors resize-none"
              />
            </div>

            <div className="flex items-start gap-3 py-2">
              <input 
                type="checkbox" 
                id="rgpd" 
                required 
                checked={formData.rgpd}
                onChange={(e) => setFormData({...formData, rgpd: e.target.checked})}
                className="mt-1 w-4 h-4 accent-provence-yellow"
              />
              <label htmlFor="rgpd" className="text-sm text-gray-500 cursor-pointer select-none">
                J'accepte que mes données soient traitées dans le but de répondre à ma demande de contact.
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-provence-yellow hover:bg-provence-yellow/90 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95 text-lg"
            >
              Envoyer ma demande
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Ou contactez-moi directement : <br />
              <a href="mailto:Anaelle.franoux@gmail.com" className="text-provence-muted-purple font-bold hover:underline">Anaelle.franoux@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
