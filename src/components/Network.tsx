
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, DollarSign, Users, Zap, Star } from 'lucide-react';

const Network = () => {
  const networkStats = [
    {
      icon: Users,
      title: '5,000+',
      subtitle: 'Registered Affiliates',
      description: 'Growing network of trusted partners worldwide',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: DollarSign,
      title: 'CPC & CPM',
      subtitle: 'Revenue Models',
      description: 'Flexible monetization options for maximum ROI',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: BarChart3,
      title: 'Real-time',
      subtitle: 'Analytics & Reporting',
      description: 'Comprehensive insights for data-driven decisions',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Zap,
      title: 'Instant',
      subtitle: 'Campaign Activation',
      description: 'Quick setup and deployment across all verticals',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="network" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
            <span className="text-sm font-bold text-gray-800">PARTNER ECOSYSTEM</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900">
            Our <span className="gradient-text">Partner Network</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
            Join <span className="text-blue-600 font-bold">thousands of successful partners</span> in our comprehensive advertising ecosystem
          </p>
        </div>

        {/* Enhanced Network Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {networkStats.map((stat, index) => (
            <Card key={stat.title} className="card-hover bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-xl hover:shadow-2xl text-center group overflow-hidden">
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="pb-4 relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-extrabold gradient-text mb-2">{stat.title}</CardTitle>
                <p className="text-base font-bold text-gray-800">{stat.subtitle}</p>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-700 font-medium leading-relaxed">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Partnership Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 shadow-xl hover:shadow-2xl group overflow-hidden">
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-3">For Advertisers</CardTitle>
              <p className="text-gray-700 text-lg font-medium">
                Reach your target audience across our <span className="text-blue-600 font-bold">diversified platform ecosystem</span>
              </p>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-base text-gray-800 font-medium">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4"></div>
                  Access to 5,000+ verified affiliates
                </li>
                <li className="flex items-center text-base text-gray-800 font-medium">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4"></div>
                  Multi-vertical campaign distribution
                </li>
                <li className="flex items-center text-base text-gray-800 font-medium">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4"></div>
                  Performance-based pricing (CPC/CPM/CPA/CPL/CPI/CPS/CPD)
                </li>
                <li className="flex items-center text-base text-gray-800 font-medium">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4"></div>
                  Real-time analytics and optimization
                </li>
              </ul>
              <Button className="w-full btn-gradient text-white font-bold py-4 text-lg rounded-full shadow-lg">
                <Zap className="mr-2 h-5 w-5" />
                Start Advertising
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 shadow-xl hover:shadow-2xl group overflow-hidden">
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-3">For Publishers</CardTitle>
              <p className="text-gray-700 text-lg font-medium">
                Monetize your traffic with our <span className="text-orange-600 font-bold">high-converting campaigns</span>
              </p>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-base text-gray-800 font-medium">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4"></div>
                  Premium campaign selection
                </li>
                <li className="flex items-center text-base text-gray-800 font-medium">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4"></div>
                  Competitive payout rates
                </li>
                <li className="flex items-center text-base text-gray-800 font-medium">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4"></div>
                  Multiple ad formats and placements
                </li>
                <li className="flex items-center text-base text-gray-800 font-medium">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4"></div>
                  Dedicated account management
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105">
                <Star className="mr-2 h-5 w-5 fill-white" />
                Join as Publisher
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Network;
