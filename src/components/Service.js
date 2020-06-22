import React, { Component } from 'react'
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';


export default class Service extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                titles:"free cocktails",
                info:"lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum"
            },
            {
                icon:<FaHiking/>,
                titles:"free hikings",
                info:"lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum"
            },
            {
                icon:<FaShuttleVan/>,
                titles:"free delivery",
                info:"lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum"
            },
            {
                icon:<FaBeer/>,
                titles:"free beers",
                info:"lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services'/>
        <div className='services-center'>
            {this.state.services.map((item,index) =>{
                return <article key={index} className='service'>
                    <span>{item.icon}</span>
                    <h6>{item.titles}</h6>
                    <p>{item.info}</p>
                </article>
            } )}
        </div>      
                    
                
            </section>
        )
    }
}
