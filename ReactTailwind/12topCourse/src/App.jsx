import { useState, useEffect } from 'react';
import Filter from './components/Filter/Filter';
import MainCards from './components/MainCards/MainCards';
import { apiUrl, filterData } from './data';
import Spiner from './components/Spiner/Spiner'


function App() {
  const [course, setCourse] = useState(null);
  const [loading,setLoading]= useState(true);
  const [cat,setCat]=useState(filterData[0].title);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setCourse(data.data);
      console.log(data);
    } catch (error) {
      // console.error('Error fetching data:', error);
      toast.error("Network Me Koid Dikkt Hai");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='h-[100%] w-full bg-gray-800 pb-10'>
        <div className='h-14 w-full bg-blue-950 text-center flex flex-col items-center justify-center text-3xl font-bold text-white'>Top Courses</div>
        <Filter filterData={filterData} cat={cat} setCat={setCat}  />
        { 
          loading?(<Spiner/>):(<MainCards course={course} cat={cat} />)
        }
      </div>
    </>
  );
}

export default App;
