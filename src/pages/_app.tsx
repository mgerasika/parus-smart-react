import { AppProps } from 'next/app';
import '@/styles/global.css';
import {
	QueryClient,
	QueryClientProvider,
} from 'react-query'
import '../scss/styles.scss';
  
const queryClient = new QueryClient()
export default function MyApp({ Component, pageProps }: AppProps) {
	return	<QueryClientProvider client={queryClient}>
		<Component {...pageProps} />
		</QueryClientProvider>
}
