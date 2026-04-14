import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import RepositoryList from "./components/RepositoryList";
import { repositories } from "./constant/repositories";
import { profileData } from "./constant/profileData";
import ProfileSidebar from "./components/ProfileSideBar";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1e] via-[#0a0c15] to-[#020408] p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <ProfileHeader
          avatar={profileData.avatar}
          name={profileData.name}
          username={profileData.username}
          bio={profileData.bio}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 md:gap-8 mt-6">
          <ProfileSidebar
            followers={profileData.followers}
            following={profileData.following}
            location={profileData.location}
            website={profileData.website}
          />

          <RepositoryList repositories={repositories} />
        </div>
      </div>
    </div>
  );
}

export default App;
