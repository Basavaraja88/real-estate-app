import React, { useState } from "react";
import Pagination from "../components/pagination";

interface Property {
  id: number;
  title: string;
  description: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
  location: string;
  amenities: string;
  propertyType: string;
  seller_name: string;
  Phone: number;
  gmail: string;
}

// Dummy data for rental properties
const dummyProperties = [
  {
    id: 1,
    title: "Cozy Apartment in Downtown",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    area: "1000 sq ft",
    bedrooms: 2,
    bathrooms: 1,
    price: 1200,
    location: "Downtown",
    amenities: "Swimming Pool, Gym",
    propertyType: "Apartment",
    seller_name: "Basava",
    Phone: 852322,
    gmail: "basava@getMaxListeners.com",
  },
  {
    id: 2,
    title: "Luxury Apartment",
    description: "Spacious luxury apartment with stunning views",
    area: "90 sq ft",
    bedrooms: 3,
    bathrooms: 2,
    price: 2000,
    location: "Downtown",
    amenities: "Swimming Pool,Gym, Parking",
    propertyType: "Apartment",
    seller_name: "raj",
    Phone: 852322,
    gmail: "raj@getMaxListeners.com",
  },
  {
    id: 3,
    title: "Cozy House",
    description: "Beautiful cozy house with a garden",
    area: "800 sq ft",
    bedrooms: 4,
    bathrooms: 3,
    price: 2500,
    location: "Suburbs",
    amenities: "Garden, Garage",
    propertyType: "House",
    seller_name: "deva",
    Phone: 852322,
    gmail: "deva@getMaxListeners.com",
  },
];

const BuyerDashboard: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>(dummyProperties);
  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(properties);
  const [filter, setFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 1; // Total number of pages
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch data for the selected page
  };
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilter(value);
    if (value === "") {
      setFilteredProperties(properties);
    } else {
      const filtered = properties.filter(
        (property) =>
          property.title.toLowerCase().includes(value.toLowerCase()) ||
          property.location.toLowerCase().includes(value.toLowerCase()) ||
          property.propertyType.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProperties(filtered);
    }
  };

  const showSellerDetails = (property: Property) => {
    // Display seller details below the table
    alert(
      `Seller details for ${property.title}: \nSeller Name: ${property.seller_name} \nContact: ${property.Phone}`
    );
  };

  return (
    <div className="container mx-auto p-10 bg-teal-300 h-screen overflow-auto">
      <input
        type="text"
        placeholder="Search by title, location, or property type"
        value={filter}
        onChange={handleFilterChange}
        className="border border-gray-300 px-3 py-2 mb-10 float-right rounded-md"
      />
      <table className="bg-indigo-50 table-auto w-full border border-collapse border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Area (sq ft)</th>
            <th className="border px-4 py-2">Bedrooms</th>
            <th className="border px-4 py-2">Bathrooms</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Amenities</th>
            <th className="border px-4 py-2">Property Type</th>
            <th className="border px-4 py-2">Seller Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredProperties.map((property) => (
            <tr key={property.id}>
              <td className="border px-4 py-2">{property.title}</td>
              <td className="border px-4 py-2">{property.description}</td>
              <td className="border px-4 py-2">{property.area}</td>
              <td className="border px-4 py-2">{property.bedrooms}</td>
              <td className="border px-4 py-2">{property.bathrooms}</td>
              <td className="border px-4 py-2">${property.price}</td>
              <td className="border px-4 py-2">{property.location}</td>
              <td className="border px-4 py-2">{property.amenities}</td>
              <td className="border px-4 py-2">{property.propertyType}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => showSellerDetails(property)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  I'm Interested
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {properties?.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default BuyerDashboard;
