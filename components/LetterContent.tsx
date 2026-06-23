"use client";

export default function LetterContent() {
  return (
    <div className="font-serif text-gray-200 leading-[1.9] space-y-7 text-[1.05rem]">

      {/* Greeting */}
      <p className="text-white text-xl font-bold tracking-tight">
        Dear Piyusha,
      </p>

      {/* Opening */}
      <p>
        Welcome to the highest-rated show on Piyusha+.
      </p>
      <p className="text-gray-400 text-sm italic">
        Genre: Romance • Comedy • Drama • Occasional Anger Management Sessions
      </p>

      {/* Thank you paragraphs */}
      <p>
        Thank you for being the person I call first when something good happens.
      </p>
      <p>
        Thank you for listening to my endless stories about interviews, recruiters,
        Walmart, Google, AWS certifications, Spark jobs, Kafka topics — and things
        that should honestly require a warning label.
      </p>
      <p>
        Thank you for somehow making every achievement feel more meaningful,
        and every difficult day feel a little lighter.
      </p>
      <p>
        Also — congratulations on being the only person who can win an argument
        before it even starts.
      </p>

      {/* Stats block */}
      <div className="my-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-5 space-y-2 text-sm font-mono">
        <p className="text-red-400 text-xs uppercase tracking-widest font-sans font-semibold mb-3">
          Official Relationship Analytics
        </p>
        <div className="flex justify-between text-gray-300">
          <span>Arguments Won By Bhushan</span>
          <span className="text-white font-semibold">0</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Arguments Won By Piyusha</span>
          <span className="text-white font-semibold">100%</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>System Uptime</span>
          <span className="text-green-400 font-semibold">Excellent</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Love Status</span>
          <span className="text-green-400 font-semibold">Running in Production</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Future Road Trips</span>
          <span className="text-yellow-400 font-semibold">Loading...</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Future Adventures</span>
          <span className="text-yellow-400 font-semibold">Loading...</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Future Memories</span>
          <span className="text-yellow-400 font-semibold">Loading...</span>
        </div>
      </div>

      {/* Closing */}
      <p>
        Thank you for being my favourite person, my favourite notification,
        and my favourite chapter.
      </p>

      {/* Sign-off */}
      <div className="pt-4 border-t border-white/10 space-y-1">
        <p className="text-white font-semibold text-lg">
          Happy Birthday, Birthday Girl ❤️
        </p>
        <p className="text-gray-400">Love, Bhushan</p>
        <p className="text-gray-600 text-xs italic">Watching since Season 1</p>
      </div>

    </div>
  );
}
