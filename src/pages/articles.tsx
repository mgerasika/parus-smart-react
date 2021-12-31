import axios from 'axios';
import qs from 'qs';
import {  useQuery } from 'react-query';
//https://parus-smart.herokuapp.com/api/articles

//about filtering
//https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
// Page, News, FAQ
const query = qs.stringify(
    {
        filters: {
			category: {
				name: {
					$eq: 'Page',
				}
            },
        },
    },
    {
        encodeValuesOnly: true,
    },
);
export default function Hello() {
    const { data } = useQuery('pages', () => axios.get(`https://parus-smart.herokuapp.com/api/articles?${query}`));
    return <pre>Hello {JSON.stringify(data, null, 2)}</pre>;
}
