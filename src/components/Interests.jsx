import React from "react";

const Interests = () => {
  // These would be replaced with actual imported images

  return (
    <div id="interests" className="section">
      <h2 className="text-2xl mb-4">things i'm passionate about</h2>

      <div className="space-y-4">
        <div className="p-4 border-l-2 border-gray-700">
          <p className="text-gray-600">
            there's something magical about building <span className="text-blue-600 font-medium">systems from scratch</span> and
            watching them come to life. i'm a passionate <span className="text-blue-600 font-medium">creator</span>, i love to
            build anything and everything that could simplify life and make me
            lazier.
          </p>
          <p className="text-gray-600 mt-3">
            i'm also a varsity <span className="text-blue-600 font-medium">squash athlete</span>, and I spend a lot of time
            playing, training and getting better at the sport. i also love
            playing <span className="text-blue-600 font-medium">chess</span>, but i'm really bad (1200 elo).
          </p>
          <p className="text-gray-600 mt-3">
            currently, i've even got into <span className="text-blue-600 font-medium">vibe coding</span> video games using rosebud ai (takes me 15 mins to create a game). here's a demo
          </p>
          
          <div className="mt-4 bg-gray-900 rounded-lg overflow-hidden" style={{ maxWidth: "800px", height: "500px", margin: "0 auto" }}>
            <iframe 
              src="https://rosebud.ai/p/87e3e2e5-f736-4110-87b4-de1ac505d45b"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated"
              sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-pointer-lock allow-top-navigation"
              className="w-full h-full"
              title="Santa Sleigh - Rosebud AI Game"
            ></iframe>
          </div>
        </div>
      </div>

      {/* <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="overflow-hidden h-48">
              <img
                src={photo}
                alt={`Interest ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Interests;
