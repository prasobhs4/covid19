import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


export const fetchData = async (country) => {
  console.log(country);

  if(country){
    try{
      const {data : {confirmed , recovered ,deaths ,lastUpdate } } 
      =  await axios.get(`${url}/countries/${country}`);
      return { confirmed , recovered ,deaths ,lastUpdate }
    } catch(error){
        console.log(error)
   }

  }
   try{
     const {data : {confirmed , recovered ,deaths ,lastUpdate } } 
     =  await axios.get(url);
     return { confirmed , recovered ,deaths ,lastUpdate }
   } catch(error){
       console.log(error)
  }
}

export const fetchDaily = async () => {
  try{
    const {data } 
    =  await axios.get('https://covid19.mathdro.id/api/daily');
    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    
  } catch(error){
      console.log(error)
 }
}


export const fetchCountries = async () => {
  try{
    const {data:{ countries }} 
    =  await axios.get('https://covid19.mathdro.id/api/countries');
    return countries.map((country) => country.name)
  } catch(error){
      console.log(error)
 }
}






