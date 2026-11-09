function App() {
  const joinLink = "https://chat.whatsapp.com/CFOHVFiWRGVIPJfLs5Epfw?mode=gi_t";

  return (
    <div className="min-h-screen flex  justify-center items-start pt-20 bg-gray-100">

      <a
        href={joinLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition duration-300 shadow-lg"
      >
        CLICK THIS LINK TO JOIN
      </a>

    </div>
  );
}

export default App;