// components/RepositoryList.jsx
import React from "react";
import RepoCard from "./RepoCard";

// Task 8: RepositoryList component - renders RepoCard components dynamically from array
const RepositoryList = ({ repositories }) => {
  return (
    <div className="space-y-4">
      {/* Header with neon styling */}
      <div className="flex items-center justify-between mb-3 border-b border-cyan-500/30 pb-3">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <i className="fas fa-database text-cyan-400"></i>
          <span className="bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Repository Hub
          </span>
        </h2>
        <span className="text-xs bg-cyan-950/50 px-3 py-1 rounded-full text-white border border-cyan-400/40">
          <i className="fas fa-cubes"></i> {repositories.length} active repos
        </span>
      </div>

      {/* Grid of RepoCards - dynamically rendered from array (Task 8) */}
      <div className="grid grid-cols-1 gap-4">
        {repositories.map((repo) => (
          <RepoCard
            key={repo.id}
            repoName={repo.repoName}
            description={repo.description}
            language={repo.language}
            stars={repo.stars}
          >
            {/* Task 7: Children prop being passed to RepoCard */}
            {repo.childrenContent}
          </RepoCard>
        ))}
      </div>

      {/* Footer note */}
      <div className="text-center text-[11px] text-gray-500 mt-6 flex justify-center gap-3">
        <i className="fas fa-shield-haltered"></i>
        dynamic array render · {repositories.length} cards with children props
        <i className="fas fa-gem text-cyan-400/60"></i>
      </div>
    </div>
  );
};

export default RepositoryList;
