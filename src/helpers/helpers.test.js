import {
  commaSeparatedToFloat, 
  floatToCommaSeparated, 
  isValidCurrency
} from './currency.js'

import {
  asDaysInt, 
  asWeekString
} from './time.js'

describe('times tests', () =>{
  const days25 = 60*60*24*25;

  it('returns correct day count', () => {
    expect(asDaysInt(days25)).toEqual(25)
  });
  it('rounds down to correct day', () => {
    expect(asDaysInt(days25 + 600)).toEqual(25)
  });
  it('produces week string', () => {
    expect(asWeekString(days25)).toEqual('3 weeks, 4 days')
  })

});

describe('currency test', () => {
  const pennies = '0.24'
  const hundred = '100.00'
  const thousand = '1,000.00'
  const million = '1,000,000.00'
  const broken1 = '10,00.00.00'
  const broken2 = '1,000.000,000.00'
  const broken3 = 'a100.5'

  it('converts pennies successfully', () => {
    expect(commaSeparatedToFloat(pennies)).toEqual(0.24)
  })
  it('converts "100" successfully', () => {
    expect(commaSeparatedToFloat(hundred)).toEqual(100)
  })
  it('converts "1,000" successfully', () => {
    expect(commaSeparatedToFloat(thousand)).toEqual(1000)
  })
  it('converts "1,000,000" successfully', () => {
    expect(commaSeparatedToFloat(million)).toEqual(1000000)
  })

  it('converts 1000 to string successfull', () => {
    expect(floatToCommaSeparated(1000)).toEqual(thousand)
  })
  it('converts 1000000 to string successfull', () => {
    expect(floatToCommaSeparated(1000000)).toEqual(million)
  })

  it('checks valid currency string', () => {
    expect(isValidCurrency(thousand)).toEqual(true)
  })
  it('checks broken1 currency string', () => {
    expect(isValidCurrency(broken1)).toEqual(false)
  })
  it('checks broken2 currency string', () => {
    expect(isValidCurrency(broken2)).toEqual(false)
  })
  it('checks broken3 currency string', () => {
    expect(isValidCurrency(broken3)).toEqual(false)
  })

})
