export default function reverseString(str) {
  return str.split(' ')
            .map((item) => item.split('').reverse().join(''))
            .join(' ');
}
