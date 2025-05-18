import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/components/Navbar";
import { useCart } from "../../pages/context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HairColor = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { cartItems, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("http://localhost:3000/menservices");
        const data = await response.json();
        const HairColorServices = data.filter(
          (service) => service.category === "HairColor"
        );
        setServices(HairColorServices);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError("Failed to load services.");
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  const closeModal = () => setSelectedService(null);

  const isInCart = (title) => cartItems.some((item) => item.title === title);

  const handleCartAction = (service) => {
    if (isInCart(service.title)) {
      removeFromCart(service.title);
      // toast.info("Removed from cart");
    } else {
      addToCart(service);
      // toast.success("Added to cart");
    }
    setSelectedService(null);
  };

  return (
    <>
      <Header />
      <div className="container py-4">
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-warning" role="status"></div>
            <p className="mt-3">Loading services...</p>
          </div>
        )}
        {!loading && error && (
          <div className="text-center text-danger py-5">
            <p>{error}</p>
          </div>
        )}
        {!loading && !error && services.length === 0 && (
          <div className="text-center text-muted py-5">
            <p>No HairColor Services found.</p>
          </div>
        )}

        <div className="row">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-12 col-sm-6 col-lg-4 mb-4"
              onClick={() => setSelectedService(service)}
              style={{ cursor: "pointer" }}
            >
              <div className="card h-100 text-center shadow-sm">
                <img
                  src={service.image}
                  className="card-img-top"
                  alt={service.title}
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{service.title}</h5>
                  <div className="mt-2 px-3 py-2 rounded bg-warning bg-opacity-25 d-inline-block">
                    🔖 Starting at <strong>₹{service.starts_at_price}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
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
              overflow: "auto",
            }}
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedService.title}</h5>
                  <button className="btn-close" onClick={closeModal}></button>
                </div>

                {/* Modal Body */}
                <div className="modal-body row g-4">
                  <div className="col-12 col-md-5">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="img-fluid rounded w-100"
                      style={{ objectFit: "cover", maxHeight: "280px" }}
                    />
                  </div>
                  <div className="col-12 col-md-7">
                    <p>{selectedService.description}</p>
                    <p>
                      <i className="bi bi-star-fill text-warning"></i>{" "}
                      {selectedService.rating} ({selectedService.views_count}{" "}
                      reviews)
                    </p>
                    {selectedService.view_details && (
                      <p className="text-muted">
                        <i className="bi bi-info-circle me-1"></i>
                        {selectedService.view_details}
                      </p>
                    )}
                    <div className="mt-2 px-3 py-2 rounded bg-warning bg-opacity-25 d-inline-block">
                      🔖 Starting at{" "}
                      <strong>₹{selectedService.starts_at_price}</strong>
                    </div>
                    <div>
                      <button
                        className={`btn mt-3 ${
                          isInCart(selectedService.title)
                            ? "btn-danger"
                            : "btn-primary"
                        }`}
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
                  </div>
                </div>
                {/* End Modal Body */}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HairColor;
