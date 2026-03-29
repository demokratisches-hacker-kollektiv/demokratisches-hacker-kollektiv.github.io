export default function App() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Test Page</h1>
        <p className="text-xl">If you can see this, the basic setup works!</p>
        <div className="mt-8 p-4 bg-white rounded-lg text-black">
          <p>React + Vite + Tailwind CSS Test</p>
          <p className="text-sm mt-2">Current time: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
