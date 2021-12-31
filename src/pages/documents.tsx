import { Header } from '@/components/header.component';
import { Navigation } from '@/components/navigation.component';
import React from 'react';

export default function Documents(): JSX.Element {
    return (
        <>
            <Navigation />
            <Header
                title="Документи"
            />

            {/* Post Content*/}
            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            
                            <h2 className="section-heading">The Final Frontier</h2>
                            <p>
                                There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and
                                literally, it is a task to occupy the generations. And no matter how much progress one makes,
                                there is always the thrill of just beginning.
                            </p>
                            <p>
                                There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and
                                literally, it is a task to occupy the generations. And no matter how much progress one makes,
                                there is always the thrill of just beginning.
                            </p>
                            <blockquote className="blockquote">
                                The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not
                                yet mastered prophecy. We predict too much for the next year and yet far too little for the
                                next ten.
                            </blockquote>
                            <p>
                                Spaceflights cannot be stopped. This is not the work of any one man or even a group of men.
                                It is a historical process which mankind is carrying out in accordance with the natural laws
                                of human development.
                            </p>
                            <h2 className="section-heading">Reaching for the Stars</h2>
                            <p>
                                As we got further and further away, it [the Earth] diminished in size. Finally it shrank to
                                the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object
                                looked so fragile, so delicate, that if you touched it with a finger it would crumble and
                                fall apart. Seeing this has to change a man.
                            </p>
                            <a href="#!">
                                <img className="img-fluid" src="assets/img/post-sample-image.jpg" alt="..." />
                            </a>
                            <span className="caption text-muted">
                                To go places and do things that have never been done before – that’s what living is all
                                about.
                            </span>
                            <p>
                                Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year
                                mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly
                                go where no man has gone before.
                            </p>
                            <p>
                                As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a
                                fundamental truth to our nature, Man must explore, and this is exploration at its greatest.
                            </p>
                            <p>
                                Placeholder text by
                                <a href="http://spaceipsum.com/">Space Ipsum</a>· Images by
                                <a href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>
                            </p>
                        </div>
                    </div>
                </div>
            </article>
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