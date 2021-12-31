import { Header } from '@/components/header.component';
import { Navigation } from '@/components/navigation.component';
import Head from 'next/head';
import React from 'react';

export default function About(): JSX.Element {
    return (
        <>
            <Head>
                <title>Парус Смарт ОСББ</title>
                <meta
                    name="description"
                    content="TypeScript starter for Next.js that includes all you need to build amazing apps"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            {/* Page Header*/}
            <Header title="ОСББ Парус Смарт" subTitle="" />

            {/* Main Content*/}
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        {/* Post preview*/}
                        <div className="post-preview">
                            <a href="post.html">
                                <h2 className="post-title">Man must explore, and this is exploration at its greatest</h2>
                                <h3 className="post-subtitle">Problems look mighty small from 150 miles up</h3>
                            </a>
                            <p className="post-meta">
                                Posted by
                                <a href="#!">Start Bootstrap</a>
                                on September 24, 2021
                            </p>
                        </div>
                        {/* Divider*/}
                        <hr className="my-4" />

                        {/* Pager*/}
                        <div className="d-flex justify-content-end mb-4">
                            <a className="btn btn-primary text-uppercase" href="#!">
                                Older Posts →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
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
        </>
    );
}
