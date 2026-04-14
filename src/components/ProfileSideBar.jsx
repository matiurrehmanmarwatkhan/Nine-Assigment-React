import React from "react";

const ProfileSidebar = ({ followers, following, location, website }) => {
  return (
    <div className="bg-[rgba(8,14,22,0.7)] backdrop-blur-[12px] rounded-2xl p-5 border border-cyan-400/30 shadow-[0_0_5px_rgba(0,255,255,0.3)] transition-all duration-300 hover:shadow-[0_0_12px_rgba(0,255,255,0.4)] hover:border-cyan-400">
      <div className="border-b border-cyan-500/30 pb-3 mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2 text-cyan-300">
          <i className="fas fa-user-astronaut"></i> Profile Info
        </h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-gray-300 flex items-center gap-2">
            <i className="fas fa-users text-cyan-400"></i> Followers
          </span>
          <span className="font-mono font-bold text-cyan-300 glow-text">
            {followers}
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-gray-300 flex items-center gap-2">
            <i className="fas fa-user-plus text-cyan-400"></i> Following
          </span>
          <span className="font-mono font-bold text-cyan-300">{following}</span>
        </div>

        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-gray-300 flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-cyan-400"></i> Location
          </span>
          <span className="font-mono text-sm text-gray-200">{location}</span>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
          <span className="text-gray-300 flex items-center gap-2">
            <i className="fas fa-link text-cyan-400"></i> Website
          </span>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-cyan-200 text-sm font-mono truncate max-w-[160px] transition underline-offset-2 hover:underline"
          >
            {website.replace("https://", "")}
          </a>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-cyan-500/20 text-center text-xs text-gray-400">
        <i className="fas fa-shield-alt"></i> profile sidebar · dynamic props
        rendering
      </div>
    </div>
  );
};

export default ProfileSidebar;
