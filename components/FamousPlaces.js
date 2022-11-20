import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ImageBxl from '../public/images/bruxelles.jpg'
import ImageAmsterdam from '../public/images/amsterdam.jpg'
import ImageBerlin from '../public/images/berlin.jpg'
import ImageLux from '../public/images/luxembourg.jpg'
import ImageBerne from '../public/images/berne.jpg'
import ImageVienne from '../public/images/vienne.jpg'
import ImageCop from '../public/images/Copenhague.jpg'
import ImageSto from '../public/images/Stockholm.jpg'

const places = [
  {
    name: "Bruxelles",
    image: ImageBxl,
    url: "/location/bruxelles-capitale-2800867"
  },
  {
    name: "Amsterdam",
    image: ImageAmsterdam,
    url: "/location/amsterdam-2759794"
  },
  {
    name: "Berlin",
    image: ImageBerlin,
    url: "/location/berlin-köpenick-2885657"
  },
  {
    name: "Luxembourg",
    image: ImageLux,
    url: "/location/luxembourg-2960315"
  },
  {
    name: "Berne",
    image: ImageBerne,
    url: "/location/bern-2661552"
  },
  {
    name: "Vienne",
    image: ImageVienne,
    url: "/location/vienna-2761369"
  },
  {
    name: "Copenhague",
    image: ImageCop,
    url: "/location/copenhagen-2618425"
  },
  {
    name: "Stockholm",
    image: ImageSto,
    url: "/location/stockholm-2673722"
  }
]

export default function FamousPlaces() {
  return (
    <div className="places">
      <div className="places__row">
        {places.length > 0 && 
          places.map((place, index) => (
            <div className="places__box" key={index}>
              <Link href={place.url}>
                <a>
                  <div className="places__image-wrapper">
                    <Image src={place.image} alt={`${place.name} Image`} layout="fill" objectFit="cover" />
                  </div>
                  <span>{place.name}</span>
                </a>
              </Link>
              <br />
            </div>
          ))
        }
      </div>
    </div>
  )
}
