import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Trophy, Users, Rocket } from 'lucide-react';

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const partnerUrl = 'https://mobtions.affise.com/v2/sign/up';

  const stats = [
    {
      value: '10,000+',
      title: 'Global Partners',
      subtitle: 'Across 50+ Countries',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      value: '14+',
      title: 'Years in Business',
      subtitle: 'Since Gen 1',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      value: '24/7',
      title: 'Global Support',
      subtitle: 'Always Available',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      value: '10,000+',
      title: 'Daily Conversions',
      subtitle: 'Across Campaigns',
      gradient: 'from-green-500 to-green-600',
    },
    {
      value: '5M+',
      title: 'Daily Clicks',
      subtitle: 'Performance Driven',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      value: '50+',
      title: 'Active Advertisers',
      subtitle: 'Cross-vertical Partners',
      gradient: 'from-yellow-500 to-yellow-600',
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%2394a3b8%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M0%2020h40v1H0zM20%200v40h1V0z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      <div className="container mx-auto px-4 z-20 relative">
        <div className="text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-full px-6 py-3 mb-8 shadow-lg">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="text-sm font-semibold text-slate-700">Industry Leader</span>
            </div>
            <div className="w-px h-4 bg-slate-300" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500 fill-blue-500" />
              <span className="text-sm font-semibold text-slate-700">10,000+ Partners</span>
            </div>
            <div className="w-px h-4 bg-slate-300" />
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
              <span className="text-sm font-semibold text-slate-700">Trusted Globally</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
            <div className="mb-2">
              <a href="#contact" className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent hover:underline">
                Digital Entertainment
              </a>
            </div>
            <div className="mb-2">
              <a
                href={partnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent hover:underline"
              >
                &amp; Marketing
              </a>
            </div>
            <div>
              <a href="#contact" className="bg-gradient-to-r from-orange-500 via-orange-400 to-red-500 bg-clip-text text-transparent hover:underline">
                Powerhouse
              </a>
            </div>
          </h1>

          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-4">
              Transform your digital presence with our comprehensive ecosystem of
              <a
                href={partnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline mx-1"
              >
                gaming platforms
              </a>
              ,
              <a href="#contact" className="text-orange-500 font-semibold hover:underline mx-1">
                reward systems
              </a>
              , and
              <a
                href={partnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-semibold hover:underline mx-1"
              >
                marketing solutions
              </a>
              .
            </p>
            <p className="text-lg text-slate-500 font-normal">
              Join thousands of successful partners in the next generation of digital entertainment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-12 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0">
              <Rocket className="mr-3 h-6 w-6" />
              Start Partnership
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowVideo(true)}
              className="text-lg px-12 py-4 rounded-full border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 font-bold hover:bg-blue-50 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <Play className="mr-3 h-6 w-6" />
              Watch Overview
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-12 border-t border-slate-200/60">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-slate-200/40 hover:bg-white/60 hover:border-slate-300/60 transition-all duration-300"
              >
                <div className={`text-5xl md:text-6xl font-black bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-slate-700 font-bold text-lg mb-1">{stat.title}</div>
                <div className="text-slate-500 text-sm">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative w-full max-w-4xl mx-4 bg-white rounded-xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-4 text-gray-800 hover:text-red-600 text-4xl font-bold z-50"
            >
              &times;
            </button>
            <video controls autoPlay className="w-full h-full max-h-[90vh]">
              <source src="/videos/overview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
