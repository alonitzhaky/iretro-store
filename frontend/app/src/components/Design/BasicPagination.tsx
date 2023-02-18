import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getAllProductsInCategoryAsync, selectCount } from '../Products/productSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useParams } from 'react-router-dom';

export default function BasicPagination() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  let { id } = useParams()
  const [page, setPage] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    dispatch(getAllProductsInCategoryAsync({ id: Number(id), page: value }))
  }
  return (
    <Stack spacing={2}>
      <br />
      <Pagination count={Math.ceil(count / 3)} color="standard" onChange={handleChange} />
    </Stack>
  );
}