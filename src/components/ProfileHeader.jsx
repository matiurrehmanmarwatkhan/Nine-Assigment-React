import React from "react";

const ProfileHeader = ({ avatar, name, username, bio }) => {
  return (
    <div className="bg-[rgba(12,20,30,0.65)] backdrop-blur-[10px] rounded-2xl p-5 md:p-6 border border-cyan-400/30 shadow-[0_0_5px_rgba(0,255,255,0.3),0_0_12px_rgba(0,255,255,0.2)] transition-all duration-300 hover:shadow-[0_0_12px_rgba(0,255,255,0.6),0_0_22px_rgba(0,255,255,0.3)] hover:border-cyan-400">
      <div className="flex items-center gap-5 flex-wrap md:flex-nowrap">
        <div className="relative">
          <img
            src={avatar}
            alt={name}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.5)] object-cover"
          />
          <div className="absolute -bottom-1 -right-1 bg-cyan-500 rounded-full p-1.5 border border-black">
            <i className="fas fa-code text-[10px] text-black"></i>
          </div>
        </div>

        <div className="space-y-1.5">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            {name}
          </h1>
          <p className="text-cyan-300/80 font-mono text-sm flex items-center gap-2">
            <i className="fab fa-github"></i> {username}
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
