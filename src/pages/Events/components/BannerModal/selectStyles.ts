import { StylesConfig } from 'react-select';

export const selectStyles: StylesConfig = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#8bc298' : 'transparent',
    color: state.isSelected ? 'white' : 'grey',
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: 4
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: '#171717',
    border: 'none',
    borderRadius: 4,
    marginBottom: 10,
    outline: 'none',
    width: 200,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    opacity: state.isDisabled ? 0.5 : 1,
    transition: 'opacity 300ms'
  }),
}
