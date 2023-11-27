import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filterSlice';

import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = e => dispatch(setFilter(e.target.value));

  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter">
        Find contact by name
        <FilterInput
          type="text"
          name="filter"
          placeholder="Search"
          onChange={onChangeFilter}
        />
      </FilterLabel>
    </FilterContainer>
  );
};
