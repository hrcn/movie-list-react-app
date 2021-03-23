import React from 'react'
import Pagination from '@material-ui/lab/Pagination';

export default function BasicPagination() {
    return (
      <div>
        <Pagination count={10} color="primary" />
      </div>
    );
  }
