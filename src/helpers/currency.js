export const commaMatchRegExG = /(\d{1,3})((,\d{3})){0,}.\d{2}/g
export const commaReplaceRegExG = /,/g

export const commaSeparatedToFloat = (commaVal) => {
  return parseFloat(commaVal.replace(commaReplaceRegExG, ''))
}

export const floatToCommaSeparated = (number) => {
  let numStr = number.toFixed(2).toString()

  for(let [i, j] = [numStr.indexOf('.') - 1, 1]; i > 0; i--, j++) {
    if(j % 3 == 0) {
      numStr = numStr.slice(0, i) + ',' + numStr.slice(i, numStr.length)
    }
  }
  return numStr
}

export const isValidCurrency = (commaVal) => {
  const matches = commaVal.match(commaMatchRegExG) || null;

  if(matches !== null && matches[0].length === commaVal.length)
    return true
  else
    return false
}
