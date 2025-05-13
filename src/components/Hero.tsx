import { CalendarIcon, Clock } from 'lucide-react';
import { AnimatedElement } from './AnimatePresence';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900/40 to-black/20 dark:from-purple-900/40 dark:via-gray-900/60 dark:to-black/40"></div>
      
      {/* Animated orbs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement delay={100}>
            <span className="inline-block px-4 py-1 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-full text-sm font-medium mb-4"> 2-Hour Live Workshop</span>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 p-[10px]">
              AI-Powered Filmmaking
            </h1>
          </AnimatedElement>
          
          <AnimatedElement delay={300}>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
              Create Stunning AI Videos Without Prior Experience
            </p>
          </AnimatedElement>
          
          <AnimatedElement delay={400}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
              <div className="flex items-center px-4 py-2 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg">
                <CalendarIcon className="h-5 w-5 text-purple-500 mr-2" />
                <span>[Insert Date]</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg">
                <Clock className="h-5 w-5 text-purple-500 mr-2" />
                <span>Duration: 2 Hours</span>
              </div>
              <div className="px-4 py-2 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg">
                Live & Interactive on Zoom / Google Meet
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement delay={500}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                // onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full text-white font-medium text-lg transition-all shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1"
              >
                <a 
  href="https://rzp.io/rzp/wzSQUTG"
  target="_blank"
  rel="noopener noreferrer"
  
>
Register for ₹49 Only
</a>

              
              </button>
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-800/50 rounded-full font-medium text-lg transition-all"
              >
                Learn More
              </button>
            </div>
          </AnimatedElement>
        </div>
      </div>
      
      {/* Video preview placeholder */}
      <AnimatedElement delay={600} className="mt-16 max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video bg-gray-800 flex items-center justify-center">
          <img 
            src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="AI Filmmaking Workshop" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 flex items-center justify-center bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-all transform hover:scale-105">
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
            </button>
          </div>
        </div>
      </AnimatedElement>
    </section>
  );
};

export default Hero;