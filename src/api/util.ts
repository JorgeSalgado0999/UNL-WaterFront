import { DailyUrlOptions } from "../models/util.model"

const noTimeDate = (date: Date): string => {
  return date.toISOString().split('T')[0]
}

export function generateDailyURL(options: DailyUrlOptions){
  let baseUrl = 'http://waterservices.usgs.gov/nwis/dv/?format=json'
  baseUrl += '&startDT=' + noTimeDate(new Date(options.startDate))
  baseUrl += '&endDT=' + noTimeDate(new Date(options.endDate))
  baseUrl += '&sites=' + options.sites.join(',')
  
  baseUrl += '&siteStatus=' + (options.status || 'all')
  if(options.parameterCodes) baseUrl += '&parameterCd=' + options.parameterCodes.join(',')
  if(options.statisticCodes) baseUrl += '&statCd=' + options.statisticCodes.join(',')

  return baseUrl
}

export function sortStringsAsNums(arr: string[]){
  arr.sort((a,b) => {
    if (Number(a) < Number(b)) {
        return 1;
    }

    if (Number(a) > Number(b)) {
        return -1;
    }

    return 0;
  })

  return arr
}

export function getQuadrants(discharges: string[], site?: any){
  let min:string, q1:string, median:string, q3:string, max:string;
  let result
  //Sort the array to get quadrants
  discharges = discharges.sort((a,b) => {
    if (Number(a) > Number(b)) {
        return 1;
    }

    if (Number(a) < Number(b)) {
        return -1;
    }

    return 0;
  }).filter(discharge => {
    return Number(discharge) > 0 && discharge != null
  })

  min = discharges[0]
  max = discharges[discharges.length - 1]
  //Middle point of the array
  median = getMedian(discharges)

  const left:string[] = [];
  const right:string[] = [];
  //Get left and right most part of the array
  discharges.forEach(discharge => {
    if(Number(discharge) < Number(median)){
      left.push(discharge)
    }else if(Number(discharge) > Number(median)){
      right.push(discharge)
    }
  })

  //Middle point of each array (Check if there's enough values)
  if(left.length > 0){
    q1 = getMedian(left)
  }else{
    q1 = min
  }
  
  if(right.length > 0){
    q3 = getMedian(right)
  }else{
    q3 = max
  }

  //Boxplot array
  result = [min, q1, median, q3, max]

  return result
}

function getMedian(arr: string[]){
  let median
  
  if (arr.length % 2 == 0)
      median = arr[(arr.length/2)]
  else
      median =  arr[(arr.length/2) - .5]
  
  if(median == null){
    arr.forEach(x => {
      console.log(x)
    })
  }
  return median
}
