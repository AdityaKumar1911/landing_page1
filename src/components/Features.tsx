import { Check, Film, Lightbulb, Video, Users, Gift, Award } from 'lucide-react';
import { AnimatedElement } from './AnimatePresence';

const Features = () => {
  const features = [
    { 
      icon: <Film className="h-6 w-6 text-purple-500" />,
      title: "What is AI Filmmaking & Why It's the Future",
      description: "Discover how AI is revolutionizing video creation and why it's becoming essential for creators."
    },
    { 
      icon: <Video className="h-6 w-6 text-purple-500" />, 
      title: "Behind the Scenes: Viral Reels Made with AI",
      description: "See the exact process of how viral videos are created using AI tools, step by step."
    },
    { 
      icon: <Lightbulb className="h-6 w-6 text-purple-500" />,
      title: "Tools You Can Start Using Today – FREE & Easy",
      description: "Get hands-on with accessible AI video tools that require no technical expertise."
    },
    { 
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: "Create a Video Live with Us Using AI Tools",
      description: "Follow along as we create a professional-quality video from scratch using AI."
    },
    { 
      icon: <Gift className="h-6 w-6 text-purple-500" />,
      title: "Bonus: Free Prompts e-book for stunning visuals",
      description: "Receive a curated collection of prompts that generate amazing visual results."
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-full text-sm font-medium mb-4">Workshop Curriculum</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Step into the future of filmmaking where creativity meets AI magic in this comprehensive workshop
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedElement key={index} delay={100 * (index + 1)}>
              <div className="bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all hover:bg-white/10 dark:hover:bg-gray-800/80 h-full">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 rounded-lg mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={700} className="mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-4">Meet Your Mentor</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Learn directly from an experienced filmmaker and AI creator who has helped hundreds of creators level up their visual storytelling.
                </p>
                <div className="flex items-center space-x-1 text-yellow-500 mb-4">
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <span className="ml-2 text-gray-600 dark:text-gray-300">5.0 Rating from 200+ Students</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Filmmaker & Educator with 10+ years of experience</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Created over 500 AI-generated videos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Helped 1000+ students master video creation</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="relative overflow-hidden rounded-xl aspect-square">
                  <img 
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Workshop Mentor" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Features;