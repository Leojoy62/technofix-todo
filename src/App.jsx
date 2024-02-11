import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-green-600 w-full my-4 flex justify-between px-2">
          <h1 className="my-5 text-center text-white font-bold  text-2xl">
            TechnoFix Todo
          </h1>
          <div className="self-center">
            <label className="font-semibold">Filter by Priority:</label>
            <select className="rounded-lg p-2 bg-green-600 text-white">
              <option value="all">All</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center mb-3">
          <input
            type="text"
            placeholder="Add a new task"
            className="input input-bordered input-success  h-12"
          />
          <select className="ml-2 border-2 border-green-600 rounded-lg h-12">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button className="btn btn-success text-white">Add</button>
        </div>
        <div className="flex gap-4">
          <h2 className="text-xl font-semibold">Total Tasks: </h2>
          <div className="flex gap-1">
            <p className="bg-green-600 p-1 text-white rounded">Low</p>
            <p className="bg-yellow-400 p-1 text-white rounded">Med</p>
            <p className="bg-red-600 p-1 text-white rounded">High</p>
          </div>
          <h2 className="text-xl font-semibold">Completed Tasks:</h2>
        </div>

        <div className="mt-5 w-3/5"></div>
      </div>
    </>
  );
}

export default App;
