import styled from 'styled-components'
import colors from '../../utils/style/colors'
import PropTypes from 'prop-types'

const StyledReviewCard = styled.article`
  max-width: 20rem;
  height: fit-content;
  background: linear-gradient(
    to bottom,
    ${colors.white} 0%,
    ${colors.secondary} 80%
  );
  padding: 2rem 1.5rem;
  margin: 0 auto;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`

const StyledAuthor = styled.p`
  text-align: right;
  font-style: italic;
`
function ReviewCard({ content, author }) {
  return (
    <StyledReviewCard>
      <p>{content}</p>
      <StyledAuthor>{author}</StyledAuthor>
    </StyledReviewCard>
  )
}

ReviewCard.propTypes = {
  content: PropTypes.string,
  author: PropTypes.string,
}

export default ReviewCard
