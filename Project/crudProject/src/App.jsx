import { useEffect, useState } from "react";
import { data } from "./data";
// import './App.css'

function App() {
  const [dat, setData] = useState([]);
  const [fname, setFname] = useState();
  const [lname, setlname] = useState();

  useEffect(() => {
    setData(data);
  }, []);

  const editHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (fname != null || lname != null) {
      setData(...dat, { id, fname, lname });
    }
  };

  const delHandler = (e, id) => {
    e.preventDefault();
    console.log(id);
    if (id > 0) {
      if (window.confirm("Are You Sure To Delete")) {
        const da = dat.filter((it) => it.id != id);
        setData(da);
      }
    }
    // alert(id);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start gap-5 mt-5 w-full h-screen">
        <div className="flex gap-10">
          <input
            onChange={(e) => setFname(e.target.value)}
            type="text"
            placeholder="Enter The First Name"
            className="w-[250px] h-[35px] outline-none text-xl p-2 border-2"
          />
          <input
            onChange={(e) => setlname(e.target.value)}
            type="text"
            placeholder="Enter The Last Name"
            className="w-[250px] h-[35px] outline-none text-xl p-2 border-2"
          />
          <button className="bg-green-400 px-4 rounded-sm font-medium">
            Add
          </button>
        </div>
        <div className="flex justify-center items-start">
          <table className="border-2">
            <thead>
              <tr className="border-2">
                <th className="border-2 border-black px-4">Sr No.</th>
                <th className="border-2 border-black px-4">First Name</th>
                <th className="border-2 border-black px-4">Last Name</th>
                <th className="border-2 border-black px-4">Action</th>
              </tr>
            </thead>
            <tbody className="border-2">
              {dat.map((dd, key) => (
                <tr key={key} className="border-2">
                  <td className="border-2 border-black px-4">{dd.id}</td>
                  <td className="border-2 border-black px-4">{dd.fname}</td>
                  <td className="border-2 border-black px-4">{dd.lname}</td>
                  <td className="border-2 border-black px-4">
                    <button
                      className="w-[100px] bg-green-500"
                      onClick={(e) => editHandler(e, dd.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="w-[100px] bg-red-500 ml-2"
                      onClick={(e) => delHandler(e, dd.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
