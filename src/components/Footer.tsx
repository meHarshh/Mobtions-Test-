
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const businessVerticals = [
    { name: 'Zyrocraft', description: 'Game Studio' },
    { name: 'Coinflow', description: 'Offer Wall App' },
    { name: 'GamezHub', description: 'Gaming Platform' },
    { name: 'Traffhit', description: 'Content Network' },
  ];

  const quickLinks = [
    'About Us',
    'Services',
    'Partnership',
    'Contact',
    'Privacy Policy',
    'Terms of Service',
  ];

  const contactInfo = [
    'mediabuyer@mobtions.com',
    '+91 88807 79916',
    'Bangalore, India',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/34daace0-d3a1-4a82-b4bd-6d25ccaf02b5.png" 
                alt="Mobtions Logo" 
                className="h-15 w-auto max-w-[195px] object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              A diversified digital entertainment and marketing conglomerate powering the future of online engagement.
            </p>
            <div className="text-sm text-gray-300">
              <div className="gradient-text font-semibold">5,000+ Active Affiliates</div>
              <div>Trusted Partner Network</div>
            </div>
          </div>

          {/* Business Verticals */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Business Verticals</h3>
            <ul className="space-y-2">
              {businessVerticals.map((vertical) => (
                <li key={vertical.name} className="text-sm">
                  <span className="font-medium text-white">{vertical.name}</span>
                  <span className="text-gray-400"> - {vertical.description}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-2">
              {contactInfo.map((info) => (
                <li key={info} className="text-sm text-gray-300">
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <div>
            © 2024 Mobtions. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            Empowering digital growth through innovative partnerships
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
