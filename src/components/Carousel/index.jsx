import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import ReviewCard from '../../components/ReviewCard'
import Loader from '../Loader'
import colors from '../../utils/style/colors.js'

const CarouselWrapper = styled.section`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
`

// Flèches sous le carrousel, visibles uniquement sur mobile
const ArrowsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;

  @media screen and (min-width: 426px) {
    display: none; /* caché sur desktop */
  }
`

const ArrowButton = styled.button`
  background: ${(props) => props.bg || colors.secondary};
  color: ${colors.black};
  border: none;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    filter 0.2s ease;

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.1);
  }
`

function Carousel() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const sliderRef = useRef(null)

  useEffect(() => {
    async function fetchFakeReviews() {
      try {
        const response = await fetch(
          'https://fakerapi.it/api/v2/texts?_quantity=5&_locale=fr_FR',
        )
        if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`)
        const data = await response.json()
        setReviews(data.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchFakeReviews()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          dots: false, // pas de dots sur mobile
        },
      },
    ],
  }

  if (error) return <p>Erreur : {error}</p>

  return (
    <CarouselWrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Slider ref={sliderRef} {...settings}>
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                content={review.content}
                author={review.author}
              />
            ))}
          </Slider>

          {/* Flèches visibles uniquement sur mobile */}
          <ArrowsRow>
            <ArrowButton
              bg={colors.secondary}
              onClick={() => sliderRef.current.slickPrev()}
            >
              ◀
            </ArrowButton>
            <ArrowButton
              bg={colors.secondary}
              onClick={() => sliderRef.current.slickNext()}
            >
              ▶
            </ArrowButton>
          </ArrowsRow>
        </>
      )}
    </CarouselWrapper>
  )
}

export default Carousel
