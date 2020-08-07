import React, {useEffect} from 'react';
import logo from './logo.svg';
import classNames from 'classnames'
import './App.scss';
import Header from './components/sections/header'
import About from './components/sections/aboutus'

class App extends React.Component {

  handleScroll = () => {
    if(window.scrollY > 0) {
      document.body.classList.add('menu-fixed')
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    return () => window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <main>
        <Header />
        <About />
      </main>
    );
  }
}

export default App;
