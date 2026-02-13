'use client'

import { X } from 'lucide-react'

export default function VettingModal() {
  const closeModal = () => {
    const modal = document.getElementById('vettingModal')
    if (modal) {
      modal.classList.add('hidden')
    }
  }

  return (
    <div
      id="vettingModal"
      className="fixed inset-0 z-[100] hidden"
    >
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity"
        onClick={closeModal}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-12 w-full max-w-xl shadow-2xl border-t-8 border-gold-500">
        <div className="flex justify-between items-center mb-10">
          <h3 className="font-serif text-3xl text-onyx">Request Access</h3>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close request access modal"
            className="text-gray-400 hover:text-gold-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 rounded"
          >
            <X className="w-5 h-5" aria-hidden />
          </button>
        </div>
        <p className="text-gray-500 text-sm mb-10 leading-loose font-sans">
          Miwesu is a private sanctuary. To maintain our conservation standards
          and privacy, we vet all prospective guests.
        </p>
        <form className="space-y-6">
          <div>
            <label id="vetting-intent-label" className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-3">
              Primary Intent
            </label>
            <select aria-labelledby="vetting-intent-label" className="w-full bg-gray-50 border-0 border-b border-gray-200 text-onyx p-4 focus:border-gold-500 focus:ring-0 outline-none font-serif focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-0">
              <option>Ethical Hunting (Meat/Trophy)</option>
              <option>Conservation Experience (Green Hunt)</option>
              <option>Observer / Photographic Retreat</option>
              <option>Corporate / Syndicate Inquiry</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label id="vetting-name-label" className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-3">
                Name
              </label>
              <input
                id="vetting-name"
                type="text"
                aria-labelledby="vetting-name-label"
                className="w-full bg-gray-50 border-0 border-b border-gray-200 text-onyx p-4 focus:border-gold-500 outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-0"
              />
            </div>
            <div>
              <label id="vetting-country-label" className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-3">
                Country
              </label>
              <input
                id="vetting-country"
                type="text"
                aria-labelledby="vetting-country-label"
                className="w-full bg-gray-50 border-0 border-b border-gray-200 text-onyx p-4 focus:border-gold-500 outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-0"
              />
            </div>
          </div>
          <div>
            <label id="vetting-email-label" className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-3">
              Email
            </label>
            <input
              id="vetting-email"
              type="email"
              aria-labelledby="vetting-email-label"
              className="w-full bg-gray-50 border-0 border-b border-gray-200 text-onyx p-4 focus:border-gold-500 outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-0"
            />
          </div>
          <div className="flex items-start space-x-4 mt-8">
            <input
              id="vetting-pledge"
              type="checkbox"
              aria-describedby="vetting-pledge-desc"
              className="mt-1 border-gray-300 rounded text-gold-500 focus:ring-gold-500 h-5 w-5 focus-visible:ring-2 focus-visible:ring-gold-500"
            />
            <p id="vetting-pledge-desc" className="text-xs text-gray-400 leading-normal font-sans">
              I agree to the "Guardian's Pledge" and understand that noisy
              behavior or disrespect for wildlife will result in immediate
              eviction.
            </p>
          </div>
          <button
            type="button"
            className="w-full bg-onyx text-white py-5 uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-colors mt-10 shadow-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  )
}

