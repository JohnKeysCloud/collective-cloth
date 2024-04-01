export function createFormState() {
  let currentFieldSet = 1;

  return {
    getCurrentFieldSet: () => currentFieldSet,
    setNewFieldSet: (index) => currentFieldSet = index,
    incrementFieldSet: () =>  ++currentFieldSet,
    decrementFieldSet: () => --currentFieldSet
  }
}