import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/components/Navbar";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../styles/AllServices.css";

const AllSpaServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [services, setServices] = useState([]);
  const { addToCart, removeFromCart, cartItems } = useCart();

  useEffect(() => {
    const fetchALLSpa = async () => {
      try {
        const response = await fetch("http://localhost:3000/womenSpa");
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchALLSpa();
  }, []);

  const categories = ["All", ...new Set(services.map((s) => s.category))];

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  const closeModal = () => setSelectedService(null);

  const handleCartToggle = (service) => {
    const isInCart = cartItems.some((item) => item.title === service.title);
    toast.dismiss(); // Clear any existing toasts

    if (isInCart) {
      removeFromCart(service.title);
      // toast.info("Removed from cart");
    } else {
      addToCart(service);
      // toast.success("Added to cart");
    }

    closeModal();
  };

  return (
    <>
      <Header />
      <div className="container py-5">
        {/* Categories */}
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

        {/* Service Cards */}
        <div className="row">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="col-12 col-md-6 col-lg-4 mb-4"
              onClick={() => setSelectedService(service)}
              style={{ cursor: "pointer" }}
            >
              <div className="card h-100 text-center shadow-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-img-top"
                  style={{ height: "280px", width: "100%", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="text-muted">
                    {service.description.slice(0, 60)}...
                  </p>
                  <p>
                    <strong>₹{service.starts_at_price}</strong>
                  </p>
                  <span className="text-dark fw-semibold">
                    {service.view_details}
                  </span>
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
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              style={{ maxWidth: "700px", margin: "5% auto" }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedService.title}</h5>
                  <button className="btn-close" onClick={closeModal}></button>
                </div>

                <div className="modal-body row">
                  <div className="col-12 col-md-5 text-center mb-3 mb-md-0">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="img-fluid rounded"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-12 col-md-7">
                    <p className="mb-2">{selectedService.description}</p>
                    <p className="mb-2">
                      <i className="bi bi-star-fill text-warning"></i>{" "}
                      {selectedService.rating} ({selectedService.views_count}{" "}
                      reviews)
                    </p>
                    <p className="mb-2">
                      <strong className="text-dark">
                        {selectedService.view_details}
                      </strong>
                    </p>
                    <div className="mt-2 px-3 py-2 rounded bg-warning bg-opacity-25 d-inline-block">
                      🔖 Starting at{" "}
                      <strong>₹{selectedService.starts_at_price}</strong>
                    </div>
                    <div className="modal-footer justify-content-start px-0 pt-4">
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
        )}
      </div>
    </>
  );
};

export default AllSpaServices;
