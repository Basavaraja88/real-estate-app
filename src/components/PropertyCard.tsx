import React from "react";
import Button from "./Button";

interface Property {
  id: number;
  title: string;
  description: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
}

interface PropertyCardProps {
  property: Property;
  onInterested: () => void;
  onLike: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onInterested,
  onLike,
}) => {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-bold">{property.title}</h2>
      <p>{property.description}</p>
      <p>Area: {property.area}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Price: ${property.price}</p>
      <Button onClick={onInterested}>I'm Interested</Button>
      <Button onClick={onLike}>Like</Button>
    </div>
  );
};

export default PropertyCard;
