import { useMemo , useState, useEffect } from 'react';
import './App.css';
import Filters from './components/Filters';
import CompanyTable from './components/CompanyTable';
import Pagination from './components/Pagination';
import useCompanies from './hooks/useCompanies';


function App() {

  const [q , setQ] = useState('');
  const [location , setLocation] = useState('');
  const [industry , setIndustry] = useState('');
  const [sort , setSort] = useState('name-asc');
  const [page , setPage] = useState(1);
  const perPage = 12;

  const {data , loading , error ,  total , raw} = useCompanies({q , location , industry , sort , page , perPage});

  const locations = useMemo(() => {
    const locs = new Set();
    (raw || []).forEach(c => locs.add(c.location));
    return Array.from(locs);
  }, [raw]);
  
  const industries = useMemo(() => {
    const inds = new Set();
    (raw || []).forEach(c => inds.add(c.industry));
    return Array.from(inds);
  }, [raw]);


  useEffect(() => {
    setPage(1);
  }, [q, location, industry, sort]);


  return (
    <div className="app-root"> 
      <div className="app-content">
        <h1 className='text-2xl  h-16 p-3 font-bold mb-4 text-white text-center bg-blue-500 '>Company Directory</h1>
      <Filters 
        q={q} setQ={setQ} 
        location={location} setLocation={setLocation} 
        industry={industry} setIndustry={setIndustry}
        locations={locations}
        industries={industries}
        sort={sort} setSort={setSort}
      />
      {loading ? (
        <p className='text-center p-4'>Loading...</p>
      ) : error ? (
        <p className='text-center p-4 text-red-500'>Error: {error}</p>
      ) : (
          <>
            <CompanyTable companies={data} />
            <Pagination 
              page={page} setPage={setPage} 
              total={total} perPage={perPage} 
            />
          </>
      )}
      </div>
    </div>
  )
  
}

export default App