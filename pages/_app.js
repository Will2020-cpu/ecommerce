import { AnimatePresence } from 'framer-motion';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
    }
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif ,Helvetica;
    }

`
const theme = {
    colors: {
        primary: "#fafafa",
    },
};


function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </ThemeProvider>
        </>
    )
}

export default MyApp;