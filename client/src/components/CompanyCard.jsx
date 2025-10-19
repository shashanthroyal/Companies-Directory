import React from 'react'

function CompanyCard( {company}) {
  return (
    <div className='border p-4 rounded shadow break-words bg-white flex flex-col  justify-between hover:shadow-lg hover:shadow-blue-100
        transform transition-all duration-300 hover:-translate-y-1 hover:scale-105'>
        <div>
          <h3 className='text-lg font-semibold truncate'>{company.name}</h3>
          <p className='text-sm text-muted'>{company.industry} • {company.location}</p>
        </div>
        <p className='text-xs mt-2'>Employees: {company.employees} • Founded: {company.founded}</p>
    </div>
  )
}

export default CompanyCard