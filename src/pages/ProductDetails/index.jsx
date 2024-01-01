import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Text, Img } from "components";
import "../detailpage.css";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [addToCartDetails, setAddToCartDetails] = useState(null);

  useEffect(() => {
    // Fetch details of the selected product
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );

    // Fetch "Add to Cart" details
    fetch(`https://fakestoreapi.com/carts/${productId}`)
      .then((response) => response.json())
      .then((data) => setAddToCartDetails(data))
      .catch((error) =>
        console.error("Error fetching add to cart details:", error)
      );
  }, [productId]);

  if (!product || !addToCartDetails) {
    return <div>Loading...</div>; // You can show a loader while fetching data
  }

  return (
    <div className="product-details-container">
      <h2 className="product-title">{product.title}</h2>
      <Img className="product-image" src={product.image} alt={product.title} />
      <Text className="product-price">{`Price: $${product.price?.toFixed(
        2
      )}`}</Text>

      {/* Add more details as needed */}

      <div className="add-to-cart-details">
        <h3>Add to Cart Details</h3>
        <Text>{`Quantity: ${addToCartDetails.quantity || 0}`}</Text>
        <Text>{`Total Price: $${
          addToCartDetails.total?.toFixed(2) || 0
        }`}</Text>
        {/* Add more details from the add to cart API response */}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
