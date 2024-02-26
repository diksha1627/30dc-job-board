// components/SearchInput.tsx
import React, { useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi'; // Import the location icon

interface SearchInputProps {
  cities: string[];
  countries: string[];
}

const SearchInput: React.FC<SearchInputProps> = ({ cities, countries }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  const handleSearch = () => {
    // Implement your search logic here
    console.log(`Searching for job title: ${jobTitle}, location: ${location}`);
  };

  const handleLocationSelect = (value: string) => {
    setLocation(value);
    setIsLocationDropdownOpen(false); // Close the dropdown when an item is selected
  };

  return (
    <div className="flex items-center relative">
      <input
        type="text"
        placeholder="Enter job title"
        className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <div className="relative">
        <input
          type="text"
          placeholder="Enter location"
          className="mr-2 px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={location}
          onFocus={() => setIsLocationDropdownOpen(true)}
          onChange={(e) => setLocation(e.target.value)}
        />
        <HiOutlineLocationMarker className="absolute top-3 left-3 text-gray-400" /> {/* Location icon */}
        {isLocationDropdownOpen && (
          <div className="absolute top-full z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            {cities.map((city, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleLocationSelect(city)}
              >
                {city}
              </div>
            ))}
            {countries.map((country, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleLocationSelect(country)}
              >
                {country}
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
