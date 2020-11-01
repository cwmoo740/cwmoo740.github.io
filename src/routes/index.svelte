<style>
    @media print {
        article {
            grid-template-rows: auto 1fr;
            grid-template-columns: 3fr 2fr;
            grid-template-areas: "hero hero" "work education";
        }

        section {
            padding: 1rem;
        }

        .posts {
            display: none;
        }

        h1, h2, h3, h4, h5 {
            margin: 0.5rem 0;
        }

        ul {
            margin: 0.5rem 0;
        }

        .page-break {
            page-break-before: always;
        }
    }

    @media screen {
        article {
            grid-template-rows: auto;
            grid-template-columns: 1fr;
            grid-template-areas: "hero" "work" "education" "posts";
        }

        section {
            padding: 2rem;
        }

        .hero {
            background-color: var(--color-theme-1);
        }

        .work {
            background-color: var(--color-theme-2);
        }

        .education {
            background-color: var(--color-theme-3);
        }

        .posts {
            background-color: var(--color-theme-4);
        }
    }


    @media screen and (min-width: 1080px) {
        article {
            grid-template-rows: auto 1fr;
            grid-template-columns: repeat(3, 1fr);
            grid-template-areas: "hero hero hero" "work education posts";
        }
    }

    article {
        color: #000;
        display: grid;
        height: 100%;
    }

    p {
        margin: 0;
    }

    h1 {
        margin-top: 0;
    }

    .hero {
        grid-area: hero;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .work {
        grid-area: work;
    }

    .education {
        grid-area: education;
    }

    .posts {
        grid-area: posts;
    }
</style>
<script>
    import * as google_post from '../posts/google-irrelevance';
    import * as dark_post from '../posts/his-dark-materials';
    import * as law_and_order from '../posts/law-and-order';
    import * as coronavirus_climate from '../posts/coronavirus-climate-change';
</script>

<svelte:head>
    <title>cowmoo online</title>
</svelte:head>

<article>
    <section class='hero'>
        <div style='display: flex; justify-content: space-between; width: 100%;'>
            <div>
                <h1>Jeffrey Young</h1>
                <p>Master's in CS from Georgia Tech, specializing in machine learning. Animal lover, outdoor
                    enthusiast. </p>
                <p>Trying to use software to make the world a better place.</p>
            </div>
            <div style='margin-left: 40px;'>
                <address style='display: flex; flex-flow: column; text-align: right;'>
                    <a href='https://cowmoo.online'>cowmoo.online</a>
                    <a href='https://www.linkedin.com/in/cwmoo740/'>linkedin.com/in/cwmoo740</a>
                </address>
            </div>
        </div>
    </section>

    <section class='work'>
        <h1>Work</h1>
        <div>
            <h3>Pasturemap</h3>
            <h5>Lead Software Engineer <span>07/2018 - 11/2019</span></h5>
            <p>Sole backend engineer on a Django/Postgres app that served the farming and ranching community</p>
            <ul>
                <li>improved performance of web and mobile first-load api calls by ~2.5x</li>
                <li>added data integrity checks and user-friendly error handling to guarantee consistency</li>
                <li>developed API and interface to track annual herd performance and forage calculations</li>
                <li>developed API to generate land productivity estimates based on NRCS soil database</li>
            </ul>
        </div>
        <div>
            <h3>Yodle/Web</h3>
            <h5>Lead Software Engineer <span>11/2017 - 07/2018</span></h5>
            <p>Gave technical direction and individual contributions to multiple teams at Web, including:</p>
            <ul>
                <li>template projects for quickly deploying and dockerizing new microservices</li>
                <li>CI/CD setup and developer experience tooling for java/javascript/python</li>
                <li>Maintenance and upgrades of auth infrastructure and microservice tooling and libraries</li>
                <li>wrote UI component library</li>
            </ul>
            <h5>Software Engineer <span>10/2015 - 10/2017</span></h5>
            <ul>
                <li>Query pipeline to run elasticsearch aggregations on customer data</li>
                <li>React-based frontend application for users to run custom data visualizations</li>
                <li>Feature generation and reporting pipeline in python/pandas for internal reporting on customer
                    success
                </li>
            </ul>
        </div>
        <div>
            <h3>Brighterion</h3>
            <h5>Software Engineer <span>02/2015 - 07/2015</span></h5>
            <p>Reduced memory consumption and startup time of a large C++ application</p>
        </div>
        <div class='page-break'>
            <h3>Photonic</h3>
            <h5>Software Engineer <span>07/2013 - 05/2014</span></h5>
            <p>
                Analyzed performance of a proposed computer architecture running DoD benchmarks,
                and simulated effectiveness of routing algorithms on program performance
                for scalable SMP machines in C++.
            </p>
        </div>
        <div>
            <h3>UC Berkeley</h3>
            <h5>Research Assistant <span>05/2011 - 01/2012</span></h5>
            <p>Improved data gathering techniques and performed tests on methane combustion for future research in
                efficiency near the limits of combustion </p>
            <h5>Research Assistant <span>01/2011 - 05/2011</span></h5>
            <p>
                Performed tests on various types of tennis racket and string combinations to determine effects on spin
                generation and vibration. Assisted in creating a test bench and wrote Matlab code to automate data
                acquisition from high speed video footage.
            </p>
        </div>
    </section>
    <section class='education'>
        <h1>Education</h1>
        <div>
            <h3>MS in Computer Science @ Georgia Tech</h3>
            <p>Specialization in Machine Learning</p>
            <ul>
                <li><span>Project: video embedding, inserting one video into another using python and numpy</span></li>
                <li>
                    <span>Project: street number recognition, using tensorflow and keras to label the
                        <a href='http://ufldl.stanford.edu/housenumbers/'>Street View House Numbers</a>
                        dataset
                    </span>
                </li>
            </ul>
        </div>
        <div>
            <h3>BS in Mechanical Engineering @ UC Berkeley</h3>
            <p>Focus on mechatronics, embedded sensors, data processing</p>
            <ul>
                <li>
                    <span>
                        Project: programmed sensors and Arduino controller to test alternative knee joint design for
                        the Berkeley
                        <a href='https://bleex.me.berkeley.edu/research/exoskeleton/medical-exoskeleton/'>Austin Project</a>
                        exoskeleton prototype
                    </span>
                </li>
            </ul>
        </div>
        <h1>Hobbies and Skills</h1>
        <div>
            <h3>Programming</h3>
            <ul>
                <li>Rust! I've been practicing with <a href='https://github.com/cwmoo740/aoc_2019'>advent of code
                    2019.</a></li>
                <li>Python. The reliable workhorse of languages. I turn to python when prototyping or practicing
                    algorithms.
                </li>
                <li>Javascript (Typescript). I'm a big fan of Anders_Hejlsberg and write as much as possible in
                    typescript.
                </li>
                <li>Pandas + Pytorch are my go to tools for data analysis and ML work. Still looking for more experience
                    here outside of schoolwork and kaggle.
                </li>
            </ul>
            <h3 class='page-break'>For Fun</h3>
            <ul>
                <li>
                    I spend a large portion of my free time hiking, jogging, and playing with my dog. Dog friendly
                    offices are a plus!
                </li>
                <li>Skilled amateur in dota2, halo3, and chess. Former California state high school chess champion.</li>
                <li>
                    I enjoy reading nonfiction and political commentary. NYT, The Atlantic, and the New Yorker are my
                    favorites.
                </li>
            </ul>
        </div>
    </section>
    <section class='posts'>
        <h1>Featured Posts</h1>
        <ul>

            <li>
                <a href='blog/{law_and_order.slug}'>{law_and_order.title}</a>
            </li>
            <li>
                <a href='blog/{coronavirus_climate.slug}'>{coronavirus_climate.title}</a>
            </li>
            <li>
                <a href='blog/{dark_post.slug}'>{dark_post.title}</a>
            </li>
            <li>
                <a href='blog/{google_post.slug}'>{google_post.title}</a>
            </li>
        </ul>
    </section>
</article>
