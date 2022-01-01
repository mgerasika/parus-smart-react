import axios from 'axios';
import qs from 'qs';
import { useQuery, UseQueryResult } from 'react-query';
import { createArticleDto, IArticleDto } from './article.dto';
import { createCollection, ICollection } from './collection';
import { EArticleId } from './enum';
//https://parus-smart.herokuapp.com/api/articles

//about filtering
//https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
// Page, News, FAQ
export enum EArticleCategory {
    Page = 'Page',
    News = 'News',
    FAQ = 'FAQ',
    Documents = 'Documents',
}

const useGetArticles = (category: EArticleCategory | undefined): UseQueryResult<ICollection<IArticleDto>> => {
    const query =
        category !== undefined
            ? qs.stringify(
				{
					  sort: 'date:desc',
                      filters: {
                          category: {
                              name: {
                                  $eq: category,
                              },
                          },
                      },
                  },
                  {
                      encodeValuesOnly: true,
                  },
              )
            : '';

    return useQuery<ICollection<IArticleDto>>(`articles-${category}`, () =>
        axios.get(`https://parus-smart.herokuapp.com/api/articles?${query}`).then((r) => {
            const data = r.data.data.map((item: any) => createArticleDto(item));
            return createCollection<IArticleDto>(data);
        }),
    );
};

const useGetArticleById = (id: EArticleId | string): UseQueryResult<IArticleDto> => {
    return useQuery<IArticleDto>(`article-by-id-${id}`, () =>
        axios.get(`https://parus-smart.herokuapp.com/api/articles/${id}`).then((r) => {
            const data = createArticleDto(r.data.data);
            return data;
        }),
    );
};

export const apiHooks = {
    useGetArticles,
    useGetArticleById,
};
