import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.section`
margin-top: 6rem;
padding: 2rem;
text-align: center;
`

const Page404 = ({errorMessage}) => {
return (
    <Wrapper>
        {/* todo: ajouter un logo 404 */}
<h1>{errorMessage}</h1>
    </Wrapper>
    
)


}

Page404.propTypes = {
    errorMessage: PropTypes.string
}

export default Page404