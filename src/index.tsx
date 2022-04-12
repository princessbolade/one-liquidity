import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals';
import { extendTheme } from '@chakra-ui/react'
import '@fontsource/raleway/400.css'

const theme = extendTheme({
  fonts: {
    heading: 'Raleway, sans-serif',
    body: 'Raleway, sans-serif',
  },
})

export default theme


const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
<ChakraProvider theme={theme}>
  <App />
</ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
