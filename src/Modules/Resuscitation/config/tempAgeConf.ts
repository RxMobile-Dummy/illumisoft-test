import { MONTH, WEEKS, YEARS } from "./sharedConf"

const WEIGHT_AGE_MAPPING = [
  {
    lowWeight: '0.1',
    highWeight: '1.9',
    ageValue: '0',
    ageUnit: WEEKS
  },
  {
    lowWeight: '2',
    highWeight: '3.4',
    ageValue: '1',
    ageUnit: WEEKS
  },
  {
    lowWeight: '3.5',
    highWeight: '3.9',
    ageValue: '2',
    ageUnit: WEEKS
  },
  {
    lowWeight: '4',
    highWeight: '4.9',
    ageValue: '1',
    ageUnit: MONTH
  }, {
    lowWeight: '5',
    highWeight: '5.9',
    ageValue: '2',
    ageUnit: MONTH
  }, {
    lowWeight: '6',
    highWeight: '6.9',
    ageValue: '3',
    ageUnit: MONTH
  }, {
    lowWeight: '7',
    highWeight: '7.9',
    ageValue: '4',
    ageUnit: MONTH
  }, {
    lowWeight: '8',
    highWeight: '8.9',
    ageValue: '6',
    ageUnit: MONTH
  }, {
    lowWeight: '9',
    highWeight: '9.9',
    ageValue: '9',
    ageUnit: MONTH
  }, {
    lowWeight: '10',
    highWeight: '10.9',
    ageValue: '12',
    ageUnit: MONTH
  }, {
    lowWeight: '11',
    highWeight: '11.9',
    ageValue: '18',
    ageUnit: MONTH
  }, {
    lowWeight: '12',
    highWeight: '12.9',
    ageValue: '23',
    ageUnit: MONTH
  }, {
    lowWeight: '13',
    highWeight: '14.9',
    ageValue: '2',
    ageUnit: YEARS
  }, {
    lowWeight: '15',
    highWeight: '16.9',
    ageValue: '3',
    ageUnit: YEARS
  }, {
    lowWeight: '17',
    highWeight: '17.9',
    ageValue: '4',
    ageUnit: YEARS
  }, {
    lowWeight: '18',
    highWeight: '20.9',
    ageValue: '5',
    ageUnit: YEARS
  }, {
    lowWeight: '21',
    highWeight: '23.9',
    ageValue: '6',
    ageUnit: YEARS
  }, {
    lowWeight: '24',
    highWeight: '25.9',
    ageValue: '7',
    ageUnit: YEARS
  }, {
    lowWeight: '26',
    highWeight: '30.9',
    ageValue: '8',
    ageUnit: YEARS
  }, {
    lowWeight: '31',
    highWeight: '32.9',
    ageValue: '9',
    ageUnit: YEARS
  }, {
    lowWeight: '33',
    highWeight: '33.9',
    ageValue: '10',
    ageUnit: YEARS
  }, {
    lowWeight: '40',
    highWeight: '43.9',
    ageValue: '11',
    ageUnit: YEARS
  }, {
    lowWeight: '44',
    highWeight: '50.9',
    ageValue: '12',
    ageUnit: YEARS
  }, {
    lowWeight: '51',
    highWeight: '54.9',
    ageValue: '13',
    ageUnit: YEARS
  }, {
    lowWeight: '55',
    highWeight: '60.9',
    ageValue: '14',
    ageUnit: YEARS
  }, {
    lowWeight: '61',
    highWeight: '63.9',
    ageValue: '15',
    ageUnit: YEARS
  }, {
    lowWeight: '64',
    highWeight: '65.9',
    ageValue: '16',
    ageUnit: YEARS
  }, {
    lowWeight: '65',
    highWeight: '9999',
    ageValue: '17',
    ageUnit: YEARS
  }
]
