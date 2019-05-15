const counterReducer = (count = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return count + 1
    case 'ADDTEN':
      return count + 10
    case 'REMOVE':
      return count - 1
    case 'REMOVETEN':
      return count - 10
    case 'RESET':
      return (count = 0)
    default:
      return count
  }
}
export default counterReducer
