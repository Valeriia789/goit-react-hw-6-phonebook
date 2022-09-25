import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateFilter} from '../../redux/filterSlice'
import { Input } from '../commonStyles/Input.styled'

// set: import { updateFilter} from '../../redux/filterSlice'
// get export const getStatusFilter = state => state.filters.status;

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onUpdateFilter = sort => {
    dispatch(updateFilter(sort));
  };

  return (
    <Input
      value={filter}
      type='text'
      placeholder='Find contact'
      onChange={event => onUpdateFilter(event.target.value)}
    />
  )
}

