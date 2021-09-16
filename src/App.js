import React, { Component } from 'react'
import styles from './App.module.css';
import {Cards, Charts ,CountryPicker} from './components';
import { fetchData } from './api';

 class App extends Component {
  
  state = {
    data: {},
    country: ''
  }


  async componentDidMount(){
    const data = await fetchData();
     this.setState({data})
     
  }

    handleCountryChange = async(country) => {
      const data = await fetchData(country);
      
      this.setState({data, country: country})

    }
    
   render() {

     const {data,country} = this.state;
     return (
      <div className={styles.container}>
        <h1>COVID-19</h1>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange} />
      <Charts data={data} country={country}/>
    </div>
     )
   }
 }
 
 export default App
 