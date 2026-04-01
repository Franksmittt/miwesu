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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 sm:p-10 lg:p-12 w-[calc(100%-2rem)] sm:w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl border-t-8 border-gold-500 mx-4 sm:mx-6">
        <div className="flex justify-between items-center mb-6 sm:mb-10">
          <h3 className="font-serif text-2xl sm:text-3xl text-onyx pr-2">Request Access</h3>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close request access modal"
            className="flex items-center justify-center min-h-[44px] min-w-[44px] p-2 -m-2 text-gray-400 hover:text-gold-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 rounded"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
          </button>
        </div>
        <p className="text-gray-500 text-sm mb-6 sm:mb-10 leading-loose font-sans">
          Miwesu is a private sanctuary. To maintain our conservation standards
          and privacy, we vet all prospective guests.
        </p>
        <form className="space-y-6">
          <div>
            <label id="vetting-intent-label" className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-3">
              Primary Intent
            </label>
            <select aria-labelledby="vetting-intent-label" className="w-full bg-gray-50 border-0 border-b border-gray-200 text-onyx p-4 min-h-[48px] focus:border-gold-500 focus:ring-0 outline-none font-serif focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-0">
              <option>Ethical Hunting (Meat/Trophy)</option>
              <option>Non-hunting visit / observer</option>
              <option>Observer / wildlife viewing</option>
              <option>Corporate / Syndicate Inquiry</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label id="vetting-name-label" className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-3">
                Name
              </label>
              <input
                id="vetting-name"
                type="text"
                aria-labelledby="vetting-name-label"
                className="w-full bg-gray-50 border-0 border-b border-gray-200 text-onyx p-4 min-h-[48px] focus:border-gold-500 outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-0"
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
                className="w-full bg-gray-50 border-0 border-b border-gray-200 text-onyx p-4 min-h-[48px] focus:border-gold-500 outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-0"
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
              className="w-full bg-gray-50 border-0 border-b border-gray-200 text-onyx p-4 min-h-[48px] focus:border-gold-500 outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-0"
            />
          </div>
          <div className="flex items-start gap-4 mt-6 sm:mt-8">
            <input
              id="vetting-pledge"
              type="checkbox"
              aria-describedby="vetting-pledge-desc"
              className="mt-1.5 flex-shrink-0 border-gray-300 rounded text-gold-500 focus:ring-gold-500 h-5 w-5 min-h-[24px] min-w-[24px] focus-visible:ring-2 focus-visible:ring-gold-500"
            />
            <p id="vetting-pledge-desc" className="text-xs text-gray-400 leading-normal font-sans">
              I agree to the "Guardian's Pledge" and understand that noisy
              behavior or disrespect for wildlife will result in immediate
              eviction.
            </p>
          </div>
          <button
            type="button"
            className="w-full bg-onyx text-white py-4 sm:py-5 min-h-[48px] uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-colors mt-8 sm:mt-10 shadow-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  )
}

