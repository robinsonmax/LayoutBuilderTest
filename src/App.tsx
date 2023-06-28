function App() {
  return (
    <div className="flex min-h-screen flex-col-reverse lg:flex-row">
      <main className="p-8 grow flex bg-gray-100">
        <div className="bg-white rounded-lg p-8 grow">
          <p className="py-96 text-center opacity-50">Drag Elements Here</p>
        </div>
      </main>
      <div className="lg:w-[400px] w-full border-l shadow">
        <section className="sticky top-0 w-full bottom-0 p-8">
          <h1 className="text-3xl font-bold text-center pb-4">
            Layout Builder
          </h1>
          <h2>
            Drag a component from below, into the page layout to the left.
          </h2>
        </section>
      </div>
    </div>
  );
}

export default App;
