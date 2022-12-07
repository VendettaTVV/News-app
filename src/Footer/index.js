
import Pagination from 'react-bootstrap/Pagination';
import { setPage } from '../services/stateService';
import { useDispatch, useSelector } from 'react-redux';

function PaginationComponent() {

  const dispatch = useDispatch();
  const totalResult = useSelector((state) => state.totalResults);
  const page = useSelector((state) => state.page);
  const pageSize = useSelector((state) => state.pageSize);

  const totalPages = Math.ceil(totalResult / pageSize);


  return (
    <Pagination className="mt-4 justify-content-center">

      <Pagination.Prev onClick={() => dispatch(setPage(page - 1))} disabled={page <= 1} />
      <Pagination.Item disabled> {page} / {totalPages} </Pagination.Item>
      <Pagination.Next onClick={() => dispatch(setPage(page + 1))} disabled={page >= totalPages} />
    </Pagination>
  );
}

export default PaginationComponent;