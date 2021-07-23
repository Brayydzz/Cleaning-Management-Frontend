import { Carousel } from 'react-responsive-carousel'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { CarouselDiv } from '../Styled'

const PhotoCarousel = () => {

    const {modalData} = useContext(stateContext)
    const {photos} = modalData

    return (
        <CarouselDiv>
            <Carousel>
                {
                    photos.map((photo) => (
                        <div>
                            <img src={photo.url} alt=""/>
                        </div>
                    ))
                }
            </Carousel>
        </CarouselDiv>
    )
}

export default PhotoCarousel
