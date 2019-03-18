import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
          <FormField label="Email" type="email" placeholder="e.g alexsmith@gmail.com"/>
        </div>
        <CoolButton isSmall isDanger>Button 1</CoolButton>
        <CoolButton isSmall isPrimary>Button 2</CoolButton>
        <CoolButton isLarge isWarning>Button 3</CoolButton>
        <CoolButton isMedium isLink>Button 4</CoolButton>
        <CoolButton isMedium isInverted>Button 5</CoolButton>
      </div>
     
    );
  }
}

export default App;
