export default function Contact() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <h2 className="text-center mb-4">Contact</h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="card form-card p-4"
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="you@company.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              className="form-control"
              rows="4"
              placeholder="Tell us about your use case..."
            />
          </div>
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
}
