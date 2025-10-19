import React from 'react'

function Filters({q , setQ , location , setLocation , industry , setIndustry , locations , industries , sort , setSort}) {

  return (
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-4 w-full'>
    <input value={q} onChange={e => setQ(e.target.value)} placeholder='Search...' className='p-2 border rounded w-full'/>
    <select value={location} onChange={e => setLocation(e.target.value)} className='p-2 border rounded w-full'>
            <option value=''>All Locations</option>
            {locations.map((loc) => (
                <option key={loc} value={loc} className="text-sm sm:text-base">{loc}</option>
            ))}
        </select>
    <select value={industry} onChange={e => setIndustry(e.target.value)} className='p-2 border rounded w-full'>
            <option value=''>All Industries</option>
            {industries.map((ind) => (
                <option key={ind} value={ind} className="text-sm sm:text-base">{ind}</option>
             ))}
        </select>
    <select value={sort} onChange={e => setSort(e.target.value)} className='p-2 border rounded w-full text-sm sm:text-base'>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="location-asc">Location (A-Z)</option>
          <option value="location-desc">Location (Z-A)</option>
        </select>

    </div>
  )
}

export default Filters