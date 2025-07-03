
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Lightbulb, Trophy, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'We leverage data-driven insights to optimize performance across all verticals.',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Partner-Centric',
      description: 'Building lasting relationships through transparent and mutually beneficial partnerships.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly evolving our technologies and approaches to stay ahead of industry trends.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results and maximizing ROI for all stakeholders.',
      gradient: 'from-green-500 to-blue-500',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200 rounded-full px-6 py-2 mb-6">
              <Zap className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-bold text-gray-800">WHO WE ARE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-gray-900 leading-tight">
              About <span className="gradient-text">Mobtions</span>
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed font-medium">
              Mobtions represents the convergence of <span className="text-blue-600 font-bold">entertainment</span>, <span className="text-orange-600 font-bold">technology</span>, and strategic marketing. 
              As a diversified digital conglomerate, we've built a comprehensive ecosystem that spans 
              game development, user rewards, content platforms, and affiliate marketing.
            </p>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
              Our integrated approach allows us to create synergies across all business verticals, 
              <span className="text-green-600 font-bold"> maximizing value for our partners</span> while delivering engaging experiences for end users.
            </p>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-3">5,000+</div>
                <div className="text-gray-700 font-bold text-lg">Active Affiliates</div>
                <div className="text-gray-500 text-sm mt-1">Worldwide network</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-3">Multi-Million</div>
                <div className="text-gray-700 font-bold text-lg">Ad Impressions</div>
                <div className="text-gray-500 text-sm mt-1">Monthly reach</div>
              </div>
            </div>
          </div>

          {/* Enhanced Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="card-hover bg-white border-2 border-gray-200 shadow-xl hover:shadow-2xl group overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">{value.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed font-medium relative z-10">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
