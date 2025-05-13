import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import services from "../../../../Data/womenData/FullData.json";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/components/Navbar";

const HairCare = () => {
  const [selectedService, setSelectedService] = useState(null);

  const hairServices = services.filter(
    (service) => service.category === "Hair Services"
  );

  const closeModal = () => setSelectedService(null);

  return (
    <>
      <Header />;
      <div className="container py-5">
        <div className="row">
          {hairServices.map((service) => (
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
                  <h5 className="card-title">{service.title}</h5>
                  <div className="mt-2 px-3 py-2 rounded bg-warning bg-opacity-25 d-inline-block">
                    🔖 Starting at <strong>₹{service.starts_at_price}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ✅ Modal */}
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

                {/* ✅ Updated Modal Body with Image on Right and Text on Left */}
                <div className="modal-body d-flex flex-row-reverse align-items-start gap-4 flex-nowrap">
                  <div className="flex-shrink-0">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="img-fluid rounded"
                      style={{
                        width: "280px",
                        height: "280px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-2">{selectedService.description}</p>
                    <p className="mb-2">
                      <i className="bi bi-star-fill text-warning"></i>{" "}
                      {selectedService.rating} ({selectedService.views_count}{" "}
                      reviews)
                    </p>
                    <p className="mb-2">
                      <strong>
                        <span className="badge bg-success">
                          {selectedService.view_details}
                        </span>
                      </strong>
                    </p>
                    <div className="mt-2 px-3 py-2 rounded bg-warning bg-opacity-25 d-inline-block">
                      🔖 Starting at{" "}
                      <strong>₹{selectedService.starts_at_price}</strong>
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

export default HairCare;
