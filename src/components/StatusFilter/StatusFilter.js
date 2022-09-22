import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'components/Button/Button'
import { statusFilters } from '../../redux/constants'
import { getStatusFilter } from "../../redux/selectors";
// Импортируем генератор экшена
import { setStatusFilter } from '../../redux/actions'
import css from './StatusFilter.module.css'

export const StatusFilter = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch()
  // const filter = useSelector(getStatusFilter);
  const filter = useSelector(state => state.statusFilter)

  // Вызываем генератор экшена и передаём значение фильтра
  // Отправляем результат - экшен изменения фильтра
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
