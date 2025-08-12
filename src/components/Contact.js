export default function Contact() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <h2 className="text-center mb-4">Contact</h2>

        {/* IMPORTANT: remove onSubmit preventDefault so the browser can POST */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/thank-you"
          className="card form-card p-4"
        >
          {/* required for Netlify to identify this form */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field (hidden) to reduce spam */}
          <p style={{ display: "none" }}>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              name="name" /* <-- add name */
              type="text"
              className="form-control"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email" /* <-- add name */
              type="email"
              className="form-control"
              placeholder="you@company.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message" /* <-- add name */
              className="form-control"
              rows="4"
              placeholder="Tell us about your use case..."
              required
            />
          </div>

          {/* GDPR consent checkbox */}
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="consent"
              name="consent"
              value="yes"
              required
            />
            <label className="form-check-label" htmlFor="consent">
              I consent to Talrev storing my submitted information so you can
              respond. See our{" "}
              <a href="/privacy" target="_blank" rel="noreferrer">
                Privacy Policy
              </a>
              .
            </label>
          </div>

          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
