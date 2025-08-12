export default function About() {
  return (
    <div className="container">
      <div className="row align-items-center gy-4">
        <div className="col-lg-6">
          <h2 className="mb-3">About Talrev</h2>
          <p className="mb-0">
            Talrev builds secure edge solutions and privacy-first tooling. Our
            mission is to make digital twins and compliance simple, scalable,
            and secure for real-world operations.
          </p>
        </div>
        <div className="col-lg-6">
          <div className="card p-4">
            <h5 className="card-title mb-2">What we focus on</h5>
            <ul className="mb-0">
              <li>Edge observability & control</li>
              <li>Privacy-first compliance</li>
              <li>Secure-by-design architectures</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
