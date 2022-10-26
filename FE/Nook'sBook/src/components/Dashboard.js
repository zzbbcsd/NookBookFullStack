import Header from "./header";

export default function Dashboard() {
  return (
    <div>
      <Header />

      <div className="w-full overflow-x-hidden flex flex-col">
        <main className="w-full flex-grow p-6">
          <h1 className="text-3xl text-black pb-6">Dashboard</h1>

          <div className="flex flex-wrap mt-6">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-2">
              <p className="text-xl pb-3 flex items-center">
                <i className="fas fa-tag mr-3"></i> Orders Made
              </p>
              <div className="p-6 bg-white border-solid border-green-600">
                <div>
                  {" "}
                  <i className="fas fa-tags mr-3"></i>
                </div>
                <div>100 Books Sold </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
              <p className="text-xl pb-3 flex items-center">
                <i className="fas fa-book mr-3"></i> Books on Shelf
              </p>
              <div className="p-6 bg-white border-solid border-green-600">
                <div>
                  <i className="fas fa-book"></i>
                </div>
                <div>4 Books Available </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
