import React, { Component } from 'react'
import './Card.css'
import Info from '../../assets/OUR SERVICE _ _.png'
import Send from '../../assets/send.png'
export default class Card extends Component {
    cards=[
        {title:"Pure Javascript Slider", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", id:1},
        {title:"Different Color Option", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", id:2},
        {title:"SEO Friendly", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", id:3},
        {title:"Creative Modern Design", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", id:4}
    ]
  render() {
    return (
      <div className='cards-block'>
        <div className='info'>
            <div className="info-img">
                <img src={Info} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing
            elit.Sed ille,ut dixi,vitiose.Non quam.</p>
        </div>
        <div className="cards">
            {this.cards.map(el=>(
                <div className='card' key={el.id}>
                    <h3 className='title'>{el.title}</h3>
                    <p>{el.description}</p>
                    <div className='send'>
                        <h2 className='read'>READ MORE</h2>
                        <img src={Send} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
  }
}
