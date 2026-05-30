import React, { useState, useEffect } from 'react';
import { X, Heart, Users, Building2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DonationPopup = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

   const blockedRoutes = ["/admin","/blogs/"];

  const isBlockedRoute = blockedRoutes.some((route) =>
    location.pathname.startsWith(route)
  );



  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem('aimskills-popup-shown');
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
        sessionStorage.setItem('aimskills-popup-shown', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleDonate = () => {
    navigate('/donate');
    handleClose();
  };

  const handlePartner = () => {
    navigate('/partner');
    handleClose();
  };

  if (!isVisible) return null;
if (isBlockedRoute) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      <div className={`relative bg-white rounded-2xl shadow-2xl w-[92%] max-w-[340px] mx-auto transform transition-all duration-300 ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-2 text-white bg-black/30 hover:bg-black/50 rounded-full z-20"
        >
          <X size={18} />
        </button>

        <div className="relative bg-gradient-to-br from-[#0D2B6B] via-[#1A4DA8] to-[#2E6FD9] text-white p-4 rounded-t-2xl overflow-hidden">
          <img
            src="/Gemini_Generated_Image_wzb9imwzb9imwzb9.png"
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
          <div className="absolute bottom-0 left-0 w-14 h-14 bg-white/10 rounded-full translate-y-8 -translate-x-8" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-white/20 p-2 rounded-full">
                <Heart className="w-5 h-5 text-[#F5E8C0] fill-current" />
              </div>
              <h2 className="text-base sm:text-lg font-semibold">Empower Youth Through Skills</h2>
            </div>
            <p className="text-[#B8CCF0] text-xs sm:text-sm">
              Help underprivileged youth gain employable skills and build brighter futures.
            </p>
          </div>
        </div>

        <div className="p-3 sm:p-4">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
            <div className="text-center p-2 bg-[#EEF3FC] rounded-lg border border-[#B8CCF0]">
              <Users className="w-4 h-4 text-[#1A4DA8] mx-auto mb-1" />
              <div className="text-base font-bold text-[#0D2B6B]">10,000+</div>
              <div className="text-xs text-gray-600">Youth Trained</div>
            </div>
            <div className="text-center p-2 bg-[#F5E8C0]/30 rounded-lg border border-[#D4AF55]/30">
              <Building2 className="w-4 h-4 text-[#B8952A] mx-auto mb-1" />
              <div className="text-base font-bold text-[#0D2B6B]">200+</div>
              <div className="text-xs text-gray-600">Placement Partners</div>
            </div>
          </div>

          <div className="text-center mb-4">
            <p className="text-gray-700 text-xs sm:text-sm mb-3">
              Your small contribution can make a difference!
            </p>
            <div className="flex gap-2 justify-center mb-3">
              {['₹100', '₹500', '₹1000'].map((amount) => (
                <button
                  key={amount}
                  onClick={handleDonate}
                  className="px-3 py-1 sm:py-2 bg-[#EEF3FC] text-[#1A4DA8] rounded-lg text-xs sm:text-sm font-medium hover:bg-[#B8CCF0] transition-colors border border-[#B8CCF0]"
                >
                  {amount}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleDonate}
            className="w-full bg-gradient-to-r from-[#B8952A] to-[#D4AF55] text-white py-2.5 rounded-xl font-semibold text-sm sm:text-base hover:from-[#D4AF55] hover:to-[#B8952A] transition-transform transform hover:scale-[1.02] shadow-md flex items-center justify-center gap-2"
          >
            ❤️ Donate Now
            <ArrowRight size={16} />
          </button>

          <button
            onClick={handlePartner}
            className="w-full mt-3 bg-white text-[#1A4DA8] py-2.5 rounded-xl font-semibold text-sm hover:bg-[#EEF3FC] transition-all border-2 border-[#B8CCF0] flex items-center justify-center gap-2"
          >
            <Building2 size={16} />
            Become a Training Partner
          </button>

          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center justify-center gap-1 text-[10px] sm:text-xs text-gray-500">
              <Heart className="w-3 h-3 text-[#B8952A] fill-current" />
              Transforming lives through skill development
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPopup;