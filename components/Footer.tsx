import React from 'react';
import { Zap, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
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
               <span className="font-bold text-lg">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-200">Bijou</span>
                 <span className="text-white">AI</span>
               </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-6">
              The Digital Employee that understands your local customers. No apps, no friction, just results.
            </p>
            
            {/* Contact Information */}
            <div className="mb-6 space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400" />
                <a href="mailto:hello@mybijou.xyz" className="hover:text-gold-400 transition-colors">hello@mybijou.xyz</a>
              </p>
              <div className="text-xs text-gray-600 space-y-1">
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
            <div className="flex gap-4">
              <a href="https://www.x.com/meetbijou" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors" aria-label="Twitter/X">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/mybijou/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/mybijouai/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Bijou AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};