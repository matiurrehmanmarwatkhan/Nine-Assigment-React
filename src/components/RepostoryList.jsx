import React from "react";
import RepoCard from "./RepoCard";

const RepositoryList = ({ repositories }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-3 border-b border-cyan-500/30 pb-3">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <i className="fas fa-database text-cyan-400"></i>
          <span className="bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Repository Hub
          </span>
        </h2>
        <span className="text-xs bg-cyan-950/50 px-3 py-1 rounded-full text-cyan-400 border border-cyan-400/40">
          <i className="fas fa-cubes"></i> {repositories.length} active repos
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {repositories.map((repo) => (
          <RepoCard
            key={repo.id}
            repoName={repo.repoName}
            description={repo.description}
            language={repo.language}
            stars={repo.stars}
          >
            {repo.childrenContent}
          </RepoCard>
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;
