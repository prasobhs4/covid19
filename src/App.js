import React ,{Component} from 'react';
import styles from './App.module.css';
import { fetchData} from './api';
import {fetchCountries} from './api';

import './App.css';
import {CountryPicker ,Cards ,Chart ,Headers} from './components';


class App extends Component {
constructor(){
 super()
 this.state = {
   data:{},
   countries:[],
   country:''
 }
}

async componentDidMount(){
   const fetchedData = await fetchData();
   this.setState({data :fetchedData});

   const countries = await fetchCountries();
   this.setState({countries : countries})
}

getCountryData = async (countryName) => {
  const fetchedData = await fetchData(countryName);
  this.setState({data:fetchedData ,country : countryName})
}
handleOnChangeCountry = (countryName) => {
    this.getCountryData(countryName);
}
render() {
  const { data , countries ,country } =this.state;
  console.log(countries)

  return (
    <div className={styles.container}>
    <Headers/>
    <Cards data={data}/>
    <CountryPicker onchangeCountry={this.handleOnChangeCountry} countries={countries}/>
    <Chart data={data} country={country}/>
    </div>
  )
}
}

export default App;
