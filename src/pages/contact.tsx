import { apiHooks } from '@/api/api-hook';
import { EArticleId } from '@/api/enum';
import { Article } from '@/components/article.component';
import { Header } from '@/components/header.component';
import { Navigation } from '@/components/navigation.component';
import React from 'react';

export default function Contact(): JSX.Element {
    const { data } = apiHooks.useGetArticleById(EArticleId.Contacts);
    return (
        <>
            <Navigation />
            <Header title="Контакти" />

            {/* Main Content*/}
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            {data && (
                                <Article
                                    showDivider={false}
                                    content={data.content}
                                    dateObj={undefined}
                                    id={data.id}
                                    title={undefined}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </main>
            {/* Footer*/}
            <footer className="border-top">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a href="#!">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x" />
                                            <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x" />
                                            <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x" />
                                            <i className="fab fa-github fa-stack-1x fa-inverse" />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <div className="small text-center text-muted fst-italic">Copyright © Your Website 2021</div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Bootstrap core JS*/}
            {/* Core theme JS*/}
            {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
            {/* * *                               SB Forms JS                               * **/}
            {/* * * Activate your form at https://startbootstrap.com/solution/contact-forms * **/}
            {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}

            {/* Bootstrap core JS*/}
            {/* Core theme JS*/}
        </>
    );
}
