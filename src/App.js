function App() {
  return (
    <div>
      <header className="bg-dark text-white p-4 mb-4">
        <div className="container">
          <h1 className="mb-0">Talrev</h1>
          <p className="lead mb-0">Edge Computing & Privacy-First Solutions</p>
        </div>
      </header>
      {/* TODO: Add your About, Products, and Contact components here */}
      <footer className="bg-light text-center py-3 mt-5">
        <small>
          &copy; {new Date().getFullYear()} Talrev. All rights reserved.
        </small>
      </footer>
    </div>
  );
}

export default App;
