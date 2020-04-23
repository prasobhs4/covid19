import React from 'react';
import { NativeSelect , FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css'
const CountryPicker = ( props ) => {
    console.log(props)
    console.log(props)
     const {onchangeCountry, countries} = props;
    return (
       <div> 
        <FormControl className = {styles.formControl}>
          <NativeSelect onChange={(e) => {
            onchangeCountry(e.target.value);
          }}>
            <option value="global">Select a Country</option>
           {countries.map((data,i)=> <option key={i} value={data}>{data}</option>)}
          </NativeSelect>
        </FormControl>
    </div>
    )
}

export default CountryPicker;
