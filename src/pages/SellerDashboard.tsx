import React, { useState } from "react";
import PropertyForm from "../components/PropertyForm";
import Pagination from "../components/pagination";

const SellerDashboard: React.FC = () => {
  const [properties, setProperties] = useState<any[]>([]);

  const handlePropertySubmit = (property: any) => {
    setProperties([...properties, property]);
    // Here you would also send the property to the server
  };

  const [showForm, setShowForm] = useState(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 1; // Total number of pages
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch data for the selected page
  };
  return (
    <div className="p-4 bg-emerald-50 h-screen overflow-auto  ">
      <h1 className="text-2xl font-bold mb-4">Seller Dashboard</h1>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => setShowForm(true)}
      >
        Add Property
      </button>
      {showForm && (
        <PropertyForm
          setShowForm={setShowForm}
          onSubmit={handlePropertySubmit}
        />
      )}
      {/* <PropertyForm onSubmit={handlePropertySubmit} /> */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Your Properties</h2>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Properties</h2>
          <table className=" bg-indigo-50 table-auto w-full border border-collapse border-gray-300">
            <thead className="text-left">
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
              </tr>
            </thead>
            <tbody>
              {properties.map((property, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{property.title}</td>
                  <td className="border px-4 py-2">{property.description}</td>
                  <td className="border px-4 py-2">{property.area}</td>
                  <td className="border px-4 py-2">{property.bedrooms}</td>
                  <td className="border px-4 py-2">{property.bathrooms}</td>
                  <td className="border px-4 py-2">{property.price}</td>
                  <td className="border px-4 py-2">{property.location}</td>
                  <td className="border px-4 py-2">{property.amenities}</td>
                  <td className="border px-4 py-2">{property.propertyType}</td>
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
      </div>
    </div>
  );
};

export default SellerDashboard;
