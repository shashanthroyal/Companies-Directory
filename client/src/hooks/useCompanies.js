import {useEffect , useState , useMemo} from 'react';
import { fetchCompanies } from '../api';

function useCompanies({q = "" , location = "" , industry = "" ,sort = "name-asc" , page = 1 , perPage = 6 }) {
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null)

    useEffect( () =>{
        setLoading(true);
        fetchCompanies()
        .then((d) => setData(d))
        .catch((e) => setError(e.message))
        .finally(()=> setLoading(false))
    }, []);

    const filtered = useMemo(()=>{
    let list = [...data];
    if (q) list = list.filter(c => c.name.toLowerCase().includes(q.toLowerCase()) || c.industry.toLowerCase().includes(q.toLowerCase()))
        if (location) list = list.filter(c => c.location === location);
        if (industry) list = list.filter(c => c.industry === industry);

        const [key , dir] = sort.split('-');
        if (list.length > 0 && Object.prototype.hasOwnProperty.call(list[0], key)) {
            list.sort((a,b) => {
                if (a[key] < b[key]) return dir === "asc" ? -1 : 1;
                if (a[key] > b[key]) return dir === "asc" ? 1 : -1;
                return 0;
            });
        }
        return list;
        }, [data , q , location , industry , sort]);


        const total = filtered.length;
        const start = (page -1) * perPage;
        const paged = filtered.slice(start, start + perPage)

    return { data: paged , total , loading , error , all: filtered, raw: data }
}

export default useCompanies;
