import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'components/Button/Button'
import { statusFilters } from '../../redux/constants'
import { getStatusFilter } from "../../redux/selectors";

import { setStatusFilter } from '../../redux/actions'
import css from './StatusFilter.module.css'

export const StatusFilter = () => {
  const dispatch = useDispatch()
  // const filter = useSelector(getStatusFilter);
  const filter = useSelector(state => state.statusFilter)

  const handleFilterChange = filter => dispatch(setStatusFilter(filter))

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>

      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>

      <Button
        selected={filter === statusFilters.group}
        onClick={() => handleFilterChange(statusFilters.group)}
      >
        Group
      </Button>
    </div>
  )
}
