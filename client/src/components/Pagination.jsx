import React from 'react'

function Pagination({page , setPage , total , perPage}) {
    const pages = Math.ceil(total / perPage);

  return (
    <div className='flex flex-col sm:flex-row justify-center items-center gap-4 my-4'>
        <div className='flex w-full sm:w-auto justify-between items-center'>
          <button 
              onClick={() => setPage(page - 1)} 
              disabled={page === 1}
              className='p-2 border rounded text-white bg-blue-500 disabled:opacity-50 w-1/3 sm:w-auto '
          >
              Previous
          </button>
          <span className='mx-4 sm:text-xs'> {page} of {pages}</span>
          <button 
              onClick={() => setPage(page + 1)} 
              disabled={page === pages}
              className='p-2 border rounded text-white bg-blue-500 disabled:opacity-50 w-1/3 sm:w-auto '
          >
              Next
          </button>
        </div>
        
    </div>
  )
}

export default Pagination