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
            playing <span className="text-blue-600 font-medium">mario kart</span>
          </p>
     
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
