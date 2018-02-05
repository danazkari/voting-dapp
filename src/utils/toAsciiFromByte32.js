export default (hex) => {
  let str = ''
  let i = 0
  if (hex.substring(0, 2) === '0x') {
    i = 2;
  }
  for (; i < hex.length; i+=2) {
    const code = parseInt(hex.substr(i, 2), 16);
    if (code === 0) continue; // this is added
    str += String.fromCharCode(code);
  }
  return str;
}
