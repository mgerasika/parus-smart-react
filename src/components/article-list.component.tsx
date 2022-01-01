import { apiHooks, EArticleCategory } from '@/api/api-hook';
import React from 'react';
import { Article } from './article.component';

interface IProps {
    category: EArticleCategory | undefined;
}
export const ArticleList = ({ category }: IProps): JSX.Element => {
    const { data } = apiHooks.useGetArticles(category);

    return (
        <>
            {data?.items?.map((item, index) => {
                return (
                    <Article
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        content={item.content}
                        dateObj={item.dateObj}
                        showDivider={index + 1 !== data?.items?.length}
                    />
                );
            })}

            {/* Pager*/}
            {/* <div className="d-flex justify-content-end mb-4">
                <a className="btn btn-primary text-uppercase" href="#!">
                    Older Posts →
                </a>
            </div> */}
        </>
    );
};
