import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/components/Navbar";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";

const Threading = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cartItems, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    const fetchALL = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("http://localhost:3000/services");
        const data = await response.json();
        const threadingServices = data.filter(
          (service) => service.category === "Threading & Face Waxing"
        );
        setServices(threadingServices);
      } catch (error) {
        console.error("Data failed to fetch", error);
        setError("Failed to fetch services");
      } finally {
        setLoading(false);
      }
    };
    fetchALL();
  }, []);

  const closeModal = () => setSelectedService(null);

  const handleCartToggle = (service) => {
    const isInCart = cartItems.some((item) => item.title === service.title);
    if (isInCart) {
      removeFromCart(service.title);
      toast.success("Removed from cart");
    } else {
      addToCart(service);
      toast.success("Added to cart");
    }
    closeModal();
  };

  return (
    <>
      <Header />
      <div className="container py-5">
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
            <p>No Threading services found.</p>
          </div>
        )}
        <div className="row">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-12 col-md-6 col-lg-4 mb-4"
              onClick={() => setSelectedService(service)}
              style={{ cursor: "pointer" }}
            >
              <div className="card h-100 text-center shadow-sm">
                <img
                  src={service.image}
                  className="card-img-top"
                  alt={service.title}
                  style={{ height: "280px", width: "100%", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">{service.title}</h4>
                  <div className="mt-2 px-3 py-2 rounded bg-warning bg-opacity-25 d-inline-block">
                    🔖 Starting at <strong>₹{service.starts_at_price}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedService && (
          <div
            className="modal d-block"
            tabIndex="-1"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              overflowY: "auto",
              zIndex: 1050,
            }}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedService.title}</h5>
                  <button className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6">
                      <img
                        src={selectedService.image}
                        alt={selectedService.title}
                        className="img-fluid rounded shadow"
                        style={{ objectFit: "cover", maxHeight: "300px" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <p>{selectedService.description || "No description."}</p>
                      <p className="text-muted mb-2">
                        <i className="bi bi-star-fill text-warning"></i>{" "}
                        {selectedService.rating || "0.0"} (
                        {selectedService.views_count || "0"} reviews)
                      </p>
                      {selectedService.view_details && (
                        <p>
                          <span className="badge bg-success">
                            {selectedService.view_details}
                          </span>
                        </p>
                      )}
                      <div className="bg-light border p-2 rounded mb-3">
                        🔖 Starting at{" "}
                        <strong>₹{selectedService.starts_at_price}</strong>
                      </div>
                      <div className="modal-footer justify-content-between">
                        <button
                          className="btn btn-primary"
                          onClick={() => handleCartToggle(selectedService)}
                        >
                          {cartItems.some(
                            (item) => item.title === selectedService.title
                          )
                            ? "Remove from Cart"
                            : "Add to Cart"}
                        </button>
                      </div>
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

export default Threading;
