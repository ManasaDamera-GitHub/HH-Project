import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import services from "../../../../Data/womenData/FullData.json";

const CleanUp = () => {
  const [selectedService, setSelectedService] = useState(null);

  const facialServices = services.filter(
    (service) => service.category === "facial_services"
  );

  const closeModal = () => setSelectedService(null);

  return (
    <div className="container py-5">
      <div className="row">
        {facialServices.map((service) => (
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
                <p className="card-text text-muted">{service.description}</p>
                <div className="mt-auto fw-bold text-primary">
                  ₹{service.starts_at_price}
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
            style={{ maxWidth: "600px", margin: "5% auto" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedService.title}</h5>
                <button className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="img-fluid rounded mb-3"
                  style={{ maxHeight: "300px", objectFit: "cover" }}
                />
                <p>{selectedService.description}</p>
                <h6 className="text-primary fw-bold">
                  ₹{selectedService.starts_at_price}
                </h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CleanUp;
