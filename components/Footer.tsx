import React, { useState } from 'react';
import { Zap, Twitter, Linkedin, Instagram, Mail, Github } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { InfoModal } from './InfoModal';
import { EnterpriseContactForm } from './EnterpriseContactForm';
import { PartnershipForm } from './PartnershipForm';
import { IntegrationForm } from './IntegrationForm';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'about' | 'careers' | 'privacy' | 'terms' | 'enterprise' | 'partnership' | 'integration' | null>(null);

  return (
    <>
      <footer className="bg-black border-t border-deep-green-500/20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://w3jdev.github.io/bijou-ai-assets/assets/logos/bijouai-logo-transparent.png" 
                  alt="Bijou AI" 
                  className="w-8 h-8"
                />
                <span className="font-bold text-xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-200">Bijou</span>
                  <span className="text-white font-extrabold">AI</span>
                </span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                The Digital Employee that understands your local customers. No apps, no friction, just results.
              </p>
              
              {/* Contact Information */}
              <div className="mb-6 space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gold-400" />
                  <a href="mailto:hello@mybijou.xyz" className="hover:text-gold-400 transition-colors">hello@mybijou.xyz</a>
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>
                    Sales: <a href="mailto:mrj@mybijou.xyz" className="hover:text-gold-400 transition-colors">mrj@mybijou.xyz</a>
                  </p>
                  <p>
                    Support: <a href="mailto:support@mybijou.xyz" className="hover:text-gold-400 transition-colors">support@mybijou.xyz</a>
                  </p>
                  <p>
                    Founder: <a href="mailto:jewel@mybijou.xyz" className="hover:text-gold-400 transition-colors">jewel@mybijou.xyz</a>
                  </p>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="flex gap-4 mb-6">
                <a href="https://www.x.com/meetbijou" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors" aria-label="Twitter/X">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/mybijou/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/mybijouai/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://github.com/w3jdev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              
              {/* W3J LLC Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img 
                  src="https://www.w3jdev.com/w3j-logo-gold.png" 
                  alt="W3J LLC" 
                  className="h-6 w-auto"
                />
                <div className="text-xs text-gray-500">
                  <p>A production of <a href="https://www.w3jdev.com" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 transition-colors font-semibold">W3J LLC</a></p>
                  <p className="text-gray-600">Wyoming, USA • Operations: Kuala Lumpur, Malaysia</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-gold-400 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-gold-400 transition-colors">Pricing</a></li>
                <li><button onClick={() => setActiveModal('integration')} className="hover:text-gold-400 transition-colors">Integrations</button></li>
                <li><a href="#case-studies" className="hover:text-gold-400 transition-colors">Case Studies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => setActiveModal('about')} className="hover:text-gold-400 transition-colors">About Us</button></li>
                <li><button onClick={() => setActiveModal('careers')} className="hover:text-gold-400 transition-colors">Careers</button></li>
                <li><button onClick={() => setActiveModal('privacy')} className="hover:text-gold-400 transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => setActiveModal('terms')} className="hover:text-gold-400 transition-colors">Terms of Service</button></li>
              </ul>
              <h4 className="font-bold text-white mb-4 mt-6">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => setActiveModal('enterprise')} className="hover:text-gold-400 transition-colors">Enterprise Inquiries</button></li>
                <li><button onClick={() => setActiveModal('partnership')} className="hover:text-gold-400 transition-colors">Partnerships</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 text-center space-y-2">
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Bijou AI. All rights reserved.</p>
            <p className="text-xs text-gray-700">
              Made with 🤍 by <a href="https://www.w3jdev.com" target="_blank" rel="noopener noreferrer" className="text-gold-400/60 hover:text-gold-400 transition-colors">W3J LLC</a> • 
              <a href="https://github.com/w3jdev" target="_blank" rel="noopener noreferrer" className="text-gold-400/60 hover:text-gold-400 transition-colors ml-1">GitHub</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AnimatePresence>
        {activeModal === 'about' && <InfoModal type="about" onClose={() => setActiveModal(null)} />}
        {activeModal === 'careers' && <InfoModal type="careers" onClose={() => setActiveModal(null)} />}
        {activeModal === 'privacy' && <InfoModal type="privacy" onClose={() => setActiveModal(null)} />}
        {activeModal === 'terms' && <InfoModal type="terms" onClose={() => setActiveModal(null)} />}
        {activeModal === 'enterprise' && <EnterpriseContactForm onClose={() => setActiveModal(null)} />}
        {activeModal === 'partnership' && <PartnershipForm onClose={() => setActiveModal(null)} />}
        {activeModal === 'integration' && <IntegrationForm onClose={() => setActiveModal(null)} />}
      </AnimatePresence>
    </>
  );
};
