import React from "react";

const RepoCard = ({ repoName, description, language, stars, children }) => {
  const langColors = {
    "C++": "bg-blue-500",
    TypeScript: "bg-sky-500",
    Rust: "bg-orange-500",
    Python: "bg-emerald-500",
    Vue: "bg-green-500",
    default: "bg-purple-500",
  };

  const langColorClass = langColors[language] || langColors.default;

  return (
    <div className="bg-[rgba(12,20,30,0.65)] backdrop-blur-[10px] rounded-xl p-5 transition-all duration-300 hover:scale-[1.01] border border-cyan-400/30 shadow-[0_0_5px_rgba(0,255,255,0.2)] hover:shadow-[0_0_12px_rgba(0,255,255,0.5)] hover:border-cyan-400">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2 mb-2">
          <i className="fab fa-github-alt text-cyan-400 text-xl"></i>
          <h3 className="text-xl font-bold tracking-tight text-white transition">
            {repoName}
          </h3>
        </div>
        <div className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded-full text-amber-300 text-sm">
          <i className="fas fa-star text-yellow-400 text-xs"></i>
          <span className="font-mono font-semibold">{stars}</span>
        </div>
      </div>

      <p className="text-gray-300 text-sm mt-2 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap justify-between items-center mt-4 pt-2">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full ${langColorClass.replace("bg", "bg-opacity-60")} opacity-75`}
            ></span>
            <span
              className={`relative inline-flex rounded-full h-3 w-3 ${langColorClass}`}
            ></span>
          </span>
          <span className="text-xs font-mono text-gray-300">{language}</span>
        </div>
        <i className="fas fa-code-branch text-gray-500 text-xs"></i>
      </div>

      <div className="mt-4 pt-3 border-t border-cyan-500/20 text-xs text-cyan-300/80 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <i className="fas fa-microchip text-[10px]"></i>
          <span className="font-mono">contribution:</span>
        </div>
        <div className="font-medium text-cyan-200 text-right">
          {children || "✨ Open Source Project"}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
