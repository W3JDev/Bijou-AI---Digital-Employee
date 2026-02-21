import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5 bg-dark-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6 tracking-tight">
          Ready to Stop Losing Leads?
        </h2>
        <p className="text-xl text-gray-300 mb-10 font-light">
          14-day free trial. No credit card. Cancel anytime.
        </p>
        
        <button 
          onClick={onOpenModal}
          className="bg-emerald-500 hover:bg-emerald-400 text-dark-900 font-bold py-5 px-12 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] transition-all transform hover:scale-[1.02] flex items-center gap-3 mx-auto text-xl mb-16"
        >
          Start Free Trial
          <ArrowRight className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-12">
          <div>
            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              What happens after the trial?
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              It's RM149/month. You can cancel anytime with one click. No long-term contracts.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Do I need technical skills?
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              No. If you can scan a QR code and upload a PDF, you can set up Bijou in 5 minutes.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Can I switch back to manual?
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Yes, anytime. You can pause Bijou or jump into any conversation to take over manually.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
