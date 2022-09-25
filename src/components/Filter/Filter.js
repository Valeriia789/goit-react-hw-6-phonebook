import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { findContact } from '../../redux/filterSlice'

import { getFilter } from "../../redux/selector";

import { Input } from '../commonStyles/Input.styled'

// set: import { updateFilter} from '../../redux/filterSlice'
// get export const getStatusFilter = state => state.filters.status;

export const Filter = () => {
  const filter = useSelector(getFilter)
  const dispatch = useDispatch();

  const onUpdateFilter = e => dispatch(findContact(e.target.value))
  return (
    <Input
      value={filter}
      type='text'
      placeholder='Find contact'
      onChange={event => onUpdateFilter(event.target.value)}
    />
  )
}

