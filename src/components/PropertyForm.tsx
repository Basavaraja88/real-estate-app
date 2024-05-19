import React, { useState } from "react";

interface PropertyFormProps {
  onSubmit: (property: any) => void;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const PropertyForm: React.FC<PropertyFormProps> = ({
  onSubmit,
  setShowForm,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [amenities, setAmenities] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [images, setImages] = useState<FileList | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const property = {
      title,
      description,
      area,
      bedrooms,
      bathrooms,
      price,
      location,
      amenities,
      propertyType,
      images,
    };
    onSubmit(property);
    setShowForm(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-orange-100 p-10 rounded-lg max-w-lg mx-auto"
    >
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="area">
          Area (sq ft)
        </label>
        <input
          type="text"
          id="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="bedrooms">
          Bedrooms
        </label>
        <input
          type="text"
          id="bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="bathrooms">
          Bathrooms
        </label>
        <input
          type="text"
          id="bathrooms"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="price">
          Price
        </label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="location">
          Location
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="amenities">
          Nearby Amenities
        </label>
        <input
          type="text"
          id="amenities"
          value={amenities}
          onChange={(e) => setAmenities(e.target.value)}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="propertyType">
          Property Type
        </label>
        <select
          id="propertyType"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="border rounded w-full py-2 px-3"
        >
          <option value="">Select</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Condo">Condo</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="images">
          Images
        </label>
        <input
          type="file"
          id="images"
          onChange={(e) => setImages(e.target.files)}
          multiple
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default PropertyForm;
