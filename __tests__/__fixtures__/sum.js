export default (...numbers) => {
  const result = numbers.reduce((acc, num) => acc + num, 0);
  return result;
};
