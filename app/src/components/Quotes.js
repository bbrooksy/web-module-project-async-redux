import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getQuote } from '../actions';
import '../App.css';


const Quote = (props) => {
  useEffect(() => {
    props.getQuote();
  }, [props.getQuote])

  if (props.loading) {
    return <div className='container'><h2>Loading Quote...</h2></div>
  }

  return (
    <div className= 'container'>
      <div className='header'><h1>Quote of the Day</h1></div>
      <div className='quote-info'>
        <h2>"{props.quote}"</h2>
        <p>Author: {props.author}</p>
      </div>
      <button onClick={() => props.getQuote()}>Get a Quote</button>
    </div>
    )
}


const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    quote: state.quote,
    author: state.author
  }
}

const mapDispatchToProps = {getQuote}

export default connect(mapStateToProps, mapDispatchToProps)(Quote);