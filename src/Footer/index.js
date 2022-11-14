
import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';


function PaginationComponent() {
  
  const [pageStart, setPageStart] = useState(1);
    

  return (
    <Pagination className="mt-4 justify-content-center">
      
      <Pagination.Prev onClick={() => setPageStart(pageStart - 1)} 
      disabled={pageStart === 1}  
      />
      
      <Pagination.Item disabled>{pageStart} / X </Pagination.Item>

      
      <Pagination.Next onClick={() => setPageStart(pageStart + 1)} 
      disabled={pageStart === 'X'}
      />
      
    </Pagination>
  );
}

export default PaginationComponent;