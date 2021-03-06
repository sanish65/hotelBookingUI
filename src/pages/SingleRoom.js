import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
// import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link }  from 'react-router-dom';
import { RoomContext } from '../Context';
import StyledHero from '../components/StyledHero';


export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state= {
                   slug: this.props.match.params.slug,
                   defaultBcg
                    };
    }
static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if(!room)
        {
            return <div className="error">
                <h3>No such room is found...</h3>
                <Link to='/rooms' className='btn-primary'>
                    Back to Rooms
                </Link>
            </div>
        }


        const {
             name,
             description,
             capacity,
             size,
             price,
             extras,
             breakfast,
             pets,
             images
             } =room;

        const [mainImg, ...defaultImg] = images;
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg} >
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>
                        Back to Rooms
                    </Link>
                </Banner>
            </StyledHero>

            <section className="single-room">

                <div className="single-room-images">
                    {defaultImg.map((item,index) => {
                      return  <img key={index} src={item} alt={name}/>;
                    })}
                </div>
                
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>Price: Rs.{price}</h6>
                        <h6>Size: {size} SQFT</h6>
                        <h6>Pets: {
                        pets? "pets allowed" : "No pets allowed" }</h6>
                        <h6>Capacity: {
                        capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
                        <h6>Breakfast: {breakfast && "free breakfast included" }</h6>
                    </article>

                </div>
            </section>

            <section className="room-extras">
                <h6>extras</h6>
                <ui className="extras">
                    {extras.map((item,index) => {
                        return <li key={index}>-{item}</li>
                    })}
                </ui>
            </section>


            </>
        )
    }
}
