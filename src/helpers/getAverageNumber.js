export default function(arrayOfNumbers) {
  return arrayOfNumbers.reduce((a,b) => a + b, 0) / arrayOfNumbers.length
}
