function esBisiesto(n) {
  if(n%100 === 0 && n%400 !=0)
    return false;
  if(n%4===0)
    return true;
  return false
}

export default esBisiesto;
