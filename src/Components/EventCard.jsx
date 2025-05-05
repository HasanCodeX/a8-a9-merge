import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
      {/* Event Thumbnail */}
      <img
        src={event.thumbnail}
        alt={event.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        {/* Event Title */}
        <h3 className="text-xl font-semibold text-gray-800">{event.name}</h3>

        {/* Event Category */}
        <p className="text-sm text-gray-500 mt-2">{event.category}</p>

        {/* Event Date */}
        <p className="text-md text-gray-700 mt-4">
          <strong>Date:</strong> {event.date}
        </p>

        {/* Event Location */}
        <p className="text-md text-gray-700 mt-2">
          <strong>Location:</strong> {event.location}
        </p>

        {/* Event Entry Fee */}
        <p className="text-md text-gray-700 mt-2">
          <strong>Entry Fee:</strong> {event.entryFee}
        </p>

        {/* View More Button */}
        <div className="mt-4">
          <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
