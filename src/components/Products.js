export default function Products() {
  return (
    <>
      <h2 className="text-center mb-4">Products</h2>
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 p-3">
            <h5 className="card-title">SecureEdge</h5>
            <p className="card-text">
              Digital twin monitoring and edge orchestration with built‑in
              security.
            </p>
            <a href="#contact" className="btn btn-primary mt-auto">
              Request demo
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 p-3">
            <h5 className="card-title">GDPR Cookie Manager</h5>
            <p className="card-text">
              Lightweight consent manager for EU compliance. Developer‑friendly
              APIs.
            </p>
            <a href="#contact" className="btn btn-primary mt-auto">
              Get early access
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 p-3">
            <h5 className="card-title">Telemetry SDK</h5>
            <p className="card-text">
              Unified edge metrics and event pipeline with privacy‑aware data
              policies.
            </p>
            <a href="#contact" className="btn btn-primary mt-auto">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
