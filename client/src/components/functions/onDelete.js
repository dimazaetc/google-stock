const onDelete = (item, index, select, setSelect) => {
  const newArray = [...select.slice(0, index), ...select.slice(index + 1)];
  setSelect(newArray);
};

// for onDelete.test.js
// const onDelete = (index, select) => {
//   const newArray = [...select.slice(0, index), ...select.slice(index + 1)];
//   return newArray;
// };
export default onDelete;
