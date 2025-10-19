import React from 'react';
import CompanyCard from './CompanyCard';

function CompanyTable({companies}) {

    if (!companies || companies.length === 0) {
        return <p className='text-center p-4'>No companies found.</p>;
    }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch'>
        {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
        ))}
    </div>
  )
}

export default CompanyTable