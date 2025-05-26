import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../styles/AllServices.css";
import Header from "@/components/Navbar";
import { useCart } from "../../pages/context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WaterPurifierServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [services, setServices] = useState([]);
  const { addToCart, removeFromCart, cartItems } = useCart();

  useEffect(() => {
    const fetchALL = async () => {
      try {
        const response = await fetch("http://localhost:3000/waterPurifier");
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await response.json();
        console.log("Fetched services:", data); // Debug API response
        setServices(data);
      } catch (error) {
        console.error("Fetch error:", error);
        toast.error("Failed to load services. Please try again later.");
      }
    };
    fetchALL();
  }, []);

  const categories = ["All", ...new Set(services.map((s) => s.category))];
  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  const handleCartAction = (service) => {
    const isInCart = cartItems.some((item) => item.title === service.title);
    if (isInCart) {
      removeFromCart(service.title);
      // toast.success(`${service.title} removed from cart`);
    } else {
      addToCart(service);
      // toast.success(`${service.title} added to cart`);
    }
    setSelectedService(null);
  };

  const isInCart = (title) => cartItems.some((item) => item.title === title);

  return (
    <>
      <Header />
      <div className="container pt-0 pb-5">
        <ToastContainer position="bottom-right" style={{ padding: 0 }} />
        <div className="mb-4 d-flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn btn btn-sm ${
                selectedCategory === category ? "active" : "btn-outline-primary"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row">
          {filteredServices.map((service) => (
            <div
              key={service.id || service.title} // Use title as fallback if id is missing
              className="col-12 col-md-6 col-lg-4 mb-4"
              onClick={() => setSelectedService(service)}
              style={{ cursor: "pointer" }}
            >
              <div className="card h-100 text-center shadow-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-img-top"
                  style={{ height: "280px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="text-muted">
                    {service.description.slice(0, 60)}...
                  </p>
                  <p>
                    <strong>₹{service.starts_at_price}</strong>
                  </p>
                  {/* <span className="text-dark fw-semibold">
                    {service.view_details || "View Details"}
                  </span> */}
                </div>
              </div>
            </div>
          ))}

          {filteredServices.length === 0 && (
            <div className="col-12">
              <p className="text-muted text-center">
                No services found in this category.
              </p>
            </div>
          )}
        </div>

        {selectedService && (
          <div
            className="modal d-block"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 1050,
              width: "100%",
              height: "100%",
              overflowY: "auto",
            }}
          >
            {console.log("Selected service:", selectedService)}
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title modal-title-text">
                    {selectedService.title}
                  </h5>
                  <button
                    className="btn-close"
                    onClick={() => setSelectedService(null)}
                  ></button>
                </div>

                <div className="modal-body d-flex flex-wrap">
                  <div className="d-flex flex-column align-items-center col-md-5 mb-3">
                    <img
                      src={selectedService.image}
                      className="img-fluid rounded mb-3"
                      alt={selectedService.title}
                      style={{
                        maxHeight: "300px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                    <div className="bg-warning bg-opacity-25 px-3 py-2 rounded w-100 text-center mb-2 modal-price-text">
                      Starting at{" "}
                      <strong>₹{selectedService.starts_at_price}</strong>
                    </div>
                    <button
                      className="btn-add  w-100 modal-button-text"
                      onClick={() => handleCartAction(selectedService)}
                    >
                      <i
                        className={`bi me-2 ${
                          isInCart(selectedService.title)
                            ? "bi-cart-dash"
                            : "bi-cart-plus"
                        }`}
                      />
                      {isInCart(selectedService.title)
                        ? "Remove from Cart"
                        : "Add to Cart"}
                    </button>
                  </div>

                  <div className="col-md-7 ps-md-4">
                    <p className="modal-description-text">
                      {selectedService.description}
                    </p>
                    <p className="modal-rating-text">
                      <b>
                        <i className="bi bi-star-fill text-warning"></i>{" "}
                        {selectedService.rating} ({selectedService.views_count}{" "}
                        reviews)
                      </b>
                    </p>
                    <p className="modal-details-text fw-semibold">
                      {selectedService.view_details || "View Details"}
                    </p>

                    <div>
                      <h5 className="modal-process-title fw-semibold">
                        Our Process
                      </h5>
                      {selectedService.process &&
                      Array.isArray(selectedService.process) &&
                      selectedService.process.length > 0 ? (
                        <ul className="ps-3 modal-process-list">
                          {selectedService.process.map((step, index) => (
                            <li key={index} className="modal-process-item">
                              {step}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="modal-no-process-text text-muted">
                          Process information not available.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WaterPurifierServices;
