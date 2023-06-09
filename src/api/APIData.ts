import { MonthDischargeValues, YearlyDischargeValues } from "../models/daily.model";
import { DailyValuesResponse } from "../models/usgs.models";
import {api, API_ROUTE} from "./axiosConfig";
import { generateDailyURL, getQuadrants, sortStringsAsNums } from "./util";

const sites = [
	"06670500",
	"06657000",
	"06656000",
	"06652800",
	"06650000",
	"06645000",
	"06643500",
	"06642000",
	"06641000",
	"06636000",
	"06635000",
	"06630000",
	"06627000",
	"06620000",
]

export const DataAPI = {
	getBoxPlot: async function (initialDate: string, finalDate: string){
		try {
			const startDate = new Date(initialDate)
			const endDate = new Date(finalDate)
	
			startDate.setDate(startDate.getDate() + 1)
			endDate.setDate(endDate.getDate() + 1)
	
			const url = generateDailyURL({endDate, startDate, sites, parameterCodes: ['00060'], statisticCodes: ['00003']})

			const qRes = await api.request({url, method:'GET',headers: {mode: "no-cors"}})
	
			if(!qRes.data) throw Error('No data returned')
	
			const data: DailyValuesResponse = qRes.data
	
			const result: {[site:string]: MonthDischargeValues} = {}
			for(let series of data.value.timeSeries){
				const siteName = series.sourceInfo.siteName
				const siteCode = series.sourceInfo.siteCode[0].value
				if(!(siteName in result)) result[siteName] = { siteName, siteCode, values:[] }
				
				const values: {[month:string]: string[]} = {}
				for(let v of series.values[0].value){
					const dateStr = v.dateTime.split('-')
					const month = dateStr[1]+'-'+dateStr[0]
					values[month] = values[month] || []
					values[month].push(v.value)
				}
	
				for(let month in values){
					result[siteName].values.push({month, discharges: getQuadrants(values[month])})
				}
			}
	
			return Object.values(result)
		} catch (error: any) {
			console.log("Hubo un error");
			throw new Error(error);
		}
	},
	getLineChart: async function (initialDate: string, finalDate: string) {
		try {
			const startDate = new Date(initialDate)
			const endDate = new Date(finalDate)
			
			const startYear = startDate.getUTCFullYear()
			const endYear = endDate.getUTCFullYear()
		
			const startOfYear = new Date(startYear - 1, 10, 1);
			const endOfYear =  new Date(endYear, 9, 30)
		
			const url = generateDailyURL({endDate: endOfYear, startDate: startOfYear, sites, parameterCodes: ['00060'], statisticCodes: ['00003']})
			const qRes = await api.request({url, method:'GET',headers: {mode: "no-cors"}})
			
			if(!qRes.data) throw Error('No data returned')
			
			const data: DailyValuesResponse = qRes.data
	
			const result: {[site:string]: YearlyDischargeValues} = {}
			for(let series of data.value.timeSeries){
				const siteName = series.sourceInfo.siteName
				const siteCode = series.sourceInfo.siteCode[0].value
				if(!(siteName in result)) result[siteName] = { siteName, siteCode, values:[] }
				
				const values: {date: string, value: string}[] = []
				
				for(let v of series.values[0].value){
					const dateStr = v.dateTime.split('T')
					const date = dateStr[0]
	
					values.push({date, value: v.value})
				}
	
				values.sort((a,b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime())
	
				const yearly: {[year:string]: string[]} = {}
				for(let v of values){
					const dateArr = v.date.split('-')
					const isPartOfNextYear = Number(dateArr[1]) >= 10
					const year = Number(dateArr[0]) + (isPartOfNextYear ? 1 : 0)
					yearly[year] = yearly[year] || []
					yearly[year].push(v.value)
				} 
	
				for(let year in yearly){
					result[siteName].values.push({year, discharges: sortStringsAsNums(yearly[year])})
				}
	
				
			}
	
			return Object.values(result)
		} catch (error: any) {
			console.log("Hubo un error");
			throw new Error(error);
		}
	},
};
