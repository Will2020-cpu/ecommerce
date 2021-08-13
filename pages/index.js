import Head from 'next/head'
import styled from 'styled-components'

function HomePage() {
    return (
        <>
            <Head>
                <title>Ecommerce</title>

            </Head>
            <Title>Ecommerce</Title>
        </>
    )
}

export default HomePage;

//Components
const Title = styled.h1`
    color:red;
`

