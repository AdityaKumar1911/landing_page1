import { useEffect, useState } from "react";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (targetDate: Date): CountdownTime => {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return {
    days: days > 0 ? days : 0,
    hours: hours > 0 ? hours : 0,
    minutes: minutes > 0 ? minutes : 0,
    seconds: seconds > 0 ? seconds : 0,
  };
};

export default function FixedCountdownFooter() {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>(() =>
    getTimeLeft(new Date("2025-05-01T23:59:59")) // set your own deadline
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(new Date("2025-05-01T23:59:59")));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full py-2 md:py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-2 md:mb-0 text-center md:text-left">
            <h3 className="text-base md:text-lg font-bold">
              DON'T MISS THE CHANCE TO GET THIS AMAZING OFFER TODAY
            </h3>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="flex space-x-1 md:space-x-2">
              {[ hours, minutes, seconds].map((unit, index) => (
                <div
                  key={index}
                  className="bg-black text-white w-8 h-8 md:w-10 md:h-10 rounded-md flex items-center justify-center text-sm md:text-base font-bold shadow-lg"
                >
                  {unit.toString().padStart(2, "0")}
                </div>
              ))}
            </div>
            <button className="bg-black hover:bg-gray-900 text-white border-0 text-xs md:text-sm px-2 md:px-4 h-8 md:h-10 shadow-lg whitespace-nowrap rounded">
            Register for ₹49 Only
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
