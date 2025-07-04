import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gamepad2, Gift, Globe, TrendingUp, Network, ArrowRight, Zap, Send, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Gamepad2,
      title: 'Zyrocraft',
      subtitle: 'Game Studio · Retention & Growth',
      description: 'Cutting-edge casual games built to retain users and fuel consistent engagement through strategic ad monetization.',
      features: ['Casual Game Development', 'Ad Monetization', 'Brand Partnerships', 'Performance Campaigns'],
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      link: 'https://zyrocraft.com/',
    },
    {
      icon: Gift,
      title: 'Coinflow',
      subtitle: 'Offer Wall App · Bulk Installs Fast',
      description: 'Reward-based platform engineered for driving high-volume installs in minimal time using targeted incentivization.',
      features: ['User Rewards System', 'App Downloads', 'Service Registrations', 'Targeted Offers'],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      link: 'https://coinflow.in/',
    },
    {
      icon: Globe,
      title: 'GamezHub',
      subtitle: 'HTML5 Gaming Platform · Repeat Usage Engine',
      description: 'Attractive game library where users return again and again to play—driving high retention and repeat sessions.',
      features: ['HTML5 Games', 'Google Ads Integration', 'WebView Technology', 'Revenue Sharing'],
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      link: 'https://gamezhub.in/',
    },
    {
      icon: TrendingUp,
      title: 'Traffhit',
      subtitle: 'Content & Ad Network · Trust Through Content',
      description: 'Delivers valuable and reliable content to earn user trust, then monetizes effectively through premium ad formats.',
      features: ['Native Discovery Ads', 'Banner Advertising', 'Video Ads', 'Targeted Campaigns'],
      gradient: 'from-green-500 to-blue-500',
      bgGradient: 'from-green-50 to-blue-50',
      link: 'https://traffhit.com/',
    },
    {
      icon: Send,
      title: 'EngageX',
      subtitle: 'Campaign Suite · User Acquisition Hub',
      description: 'Complete platform for advertisers to create, manage, and optimize campaigns to promote their apps and services.',
      features: ['Campaign Creation', 'User Acquisition', 'Analytics Dashboard', 'Custom Targeting'],
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-50 to-indigo-50',
      link: 'https://engagex.in/',
    },
    {
      icon: Rocket,
      title: 'Mobtions',
      subtitle: 'Affiliate Marketing · Monetization Engine',
      description: 'A full-scale affiliate marketing engine connecting advertisers with high-performing publishers for scalable results.',
      features: ['Affiliate Network', 'Media Buying', 'Lead Generation', 'CPC & CPA Optimization'],
      gradient: 'from-pink-500 to-red-500',
      bgGradient: 'from-pink-50 to-red-50',
      link: 'https://mobtions.com/',
    },
  ];

  const randomLink = () => (Math.random() < 0.5 ? '#contact' : 'https://mobtions.affise.com/v2/sign/up');

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200 rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-bold text-gray-800">OUR BUSINESS ECOSYSTEM</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900">
            Our <span className="gradient-text">Business Verticals</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
            Six focused verticals designed to{' '}
            <a href={randomLink()} className="text-blue-600 font-bold hover:underline">
              supercharge your growth
            </a>{' '}
            across entertainment and{' '}
            <a href={randomLink()} className="text-orange-500 font-bold hover:underline">
              marketing
            </a>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <Card
              key={service.title}
              className={`card-hover bg-gradient-to-br ${service.bgGradient} border-2 border-gray-200 shadow-xl hover:shadow-2xl overflow-hidden group relative`}
            >
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <CardHeader className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold flex items-center gap-3 text-gray-900 mb-2">
                  {service.title}
                  <span className="text-base font-semibold text-gray-600 bg-white/80 px-3 py-1 rounded-full">
                    {service.subtitle}
                  </span>
                </CardTitle>
                <CardDescription className="text-lg text-gray-700 font-medium leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-base text-gray-700 font-medium">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={service.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-white border-2 border-gray-300 text-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-orange-500 hover:text-white hover:border-transparent group-hover:scale-105 transition-all duration-300 font-bold py-3">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Affiliate Network Section */}
        {/* <Card className="bg-gradient-to-r from-blue-50 via-white to-orange-50 border-2 border-blue-200 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 shimmer"></div>
          <CardHeader className="text-center pb-6 relative z-10">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-pulse-scale">
              <Network className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
              <span className="gradient-text">Affiliate Ad Network</span>
            </CardTitle>
            <CardDescription className="text-xl md:text-2xl text-gray-700 font-medium">
              Bridging advertisers and publishers with our{' '}
              <a href={randomLink()} className="text-blue-600 font-bold hover:underline">
                extensive network
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center relative z-10">
            <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Our affiliate ad network serves as the backbone connecting advertisers with over{' '}
              <a href={randomLink()} className="text-orange-600 font-bold hover:underline">
                5,000 registered affiliates
              </a>
              , creating mutually beneficial partnerships while optimizing revenue streams for all stakeholders.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                className="btn-gradient text-white text-lg px-8 py-4 rounded-full font-bold shadow-lg"
                onClick={() => {
                  const contact = document.getElementById('contact');
                  if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Zap className="mr-2 h-5 w-5" />
                Join as Advertiser
              </Button>

              <a
                href="https://mobtions.affise.com/v2/sign/up"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-2 border-orange-400 text-orange-700 hover:bg-orange-500 hover:text-white text-lg px-8 py-4 rounded-full font-bold transition-all duration-300"
                >
                  Become an Affiliate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
};

export default Services;
