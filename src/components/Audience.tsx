import { Users, Film, Briefcase, Indent as Student, Lightbulb } from 'lucide-react';
import { AnimatedElement } from './AnimatePresence';

const Audience = () => {
  const audiences = [
    {
      icon: <Film className="h-10 w-10 text-purple-500" />,
      title: "Filmmakers & YouTubers",
      description: "Enhance your production quality and speed with AI-powered tools and techniques"
    },
    {
      icon: <Users className="h-10 w-10 text-purple-500" />,
      title: "Content Creators & Influencers",
      description: "Create more engaging video content to grow your audience and increase engagement"
    },
    {
      icon: <Student className="h-10 w-10 text-purple-500" />,
      title: "Students & Creative Professionals",
      description: "Add cutting-edge skills to your portfolio and stay ahead of industry trends"
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-purple-500" />,
      title: "Curious Minds",
      description: "Anyone interested in the intersection of AI and visual storytelling"
    }
  ];

  return (
    <section id="audience" className="py-20 bg-gray-50/5 dark:bg-gray-800/20">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-full text-sm font-medium mb-4">Perfect For You</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Should Attend</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              This workshop is designed for anyone looking to harness the power of AI in video creation, regardless of experience level
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((item, index) => (
            <AnimatedElement key={index} delay={100 * (index + 1)}>
              <div className="bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 hover:bg-white/20 dark:hover:bg-gray-900/70 h-full flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-purple-500/10 rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={600} className="mt-16">
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col items-center text-center">
              <Briefcase className="h-16 w-16 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">No Experience Required</h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
                Whether you're a complete beginner or a seasoned professional, this workshop is designed to meet you where you are. All you need is curiosity and creativity.
              </p>
              <button 
                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition-all shadow-lg hover:shadow-purple-500/20"
              >
                Reserve Your Spot Now
              </button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Audience;