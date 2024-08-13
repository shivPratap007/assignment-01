export default function NavBar() {
  return (
    <div className="flex justify-between items-center  py-3 px-5 font-sans">
      <div>
        Home &lt; <span className="font-bold text-blue-800">Dashboardv2</span>
      </div>
      <div>
        <div className="w-full max-w-md mx-auto">
          <input
            type="text"
            className="w-full px-2  border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-lg text-gray-700"
            placeholder="Search anything"
            // value={value}
            // onChange={onchange}
          />
        </div>
      </div>
      <div>icon</div>
    </div>
  );
}
