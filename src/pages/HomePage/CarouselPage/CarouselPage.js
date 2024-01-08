import React, { Component } from 'react';
import CarouselFetch from './CarouselFetch/CarouselFetch';

// CarouselPage containing the imageUrl and description for the carousel
class CarouselPage extends Component {
  state = {
    images: [
      {
        id: 1,
        imgurl: '../assets/images/kidsshopping.png',
        altText: 'shopping image',
        title: 'Same Day Delivery',
        description:
          'Summer Sale Is here with 50% OFF on Summer Wear'
      },
      {
        id: 2,
        imgurl: '../assets/images/mens-shopping-bag.png',
        altText: 'shopping image',
        title: 'Same Day Delivery',
        description:
          'Summer Sale Is here with 50% OFF on Summer Wear'
      },
      {
        id: 3,
        imgurl: '../assets/images/womens-shopping-bag.png',
        altText: 'shopping image',
        title: 'Same Day Delivery',
        description:
          'Summer Sale Is here with 50% OFF on Summer Wear'
      }
    ]
  };

  render() {
    return (
      <>
        {/* maping the array of objects */}
        {this.state.images.map((image) => {
          return (
            <div className='col' key={image.id} data-testid='carouselImg'>
              <CarouselFetch {...image} />
            </div>
          );
        })}
      </>
    );
  }
}

export default CarouselPage;
