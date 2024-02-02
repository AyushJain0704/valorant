import React from 'react'

function Card(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="card" style={{width: '18rem' ,  backgroundColor: (props.mode) === 'light' ? '#FFFFFF' : 'grey'}} >
  <img src={props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.agent}</h5>
    <p className="card-text">{props.text}</p>
    <a href="/" className="btn btn-primary" style={{backgroundColor: (props.mode) === 'light' ? '#FFFFFF' : '#0c0c0c' , color : (props.mode) !== 'light' ? '#FFFFFF' : '#0c0c0c'}}>{props.type}</a>
  </div>
</div>
    </div>
  )
}

export default Card;
