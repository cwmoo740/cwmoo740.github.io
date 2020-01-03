<style>
    article {
        color: #000;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr;
        grid-template-areas: "hero" "work" "education" "posts";
        height: 100%;
    }

    @media (min-width: 1080px) {
        article {
            grid-template-rows: auto 1fr;
            grid-template-columns: repeat(3, 1fr);
            grid-template-areas: "hero hero hero" "work education posts";
        }
    }

    p {
        margin: 0;
    }

    h1 {
        margin-top: 0;
    }

    section {
        padding: 4rem;
    }

    .hero {
        background-color: var(--color-theme-1);
        grid-area: hero;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .work {
        background-color: var(--color-theme-2);
        grid-area: work;
    }

    .education {
        background-color: var(--color-theme-3);
        grid-area: education;
    }

    .posts {
        background-color: var(--color-theme-4);
        grid-area: posts;
    }
</style>
<script>
    import * as google_post from '../posts/google-irrelevance';
</script>

<svelte:head>
    <title>cowmoo online</title>
</svelte:head>

<article>
    <section class='hero'>
        <h1>Jeffrey Young</h1>
        <p>NYC full stack programmer with a master's degree in ML.</p>
        <p>Animal lover, outdoor enthusiast. Currently trying to save the world in any way possible.</p>
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
        <div>
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
    </section>

    <section class='posts'>
        <h1>Featured Posts</h1>
        <ul>
            <li>
                <a href='blog/{google_post.slug}'>{google_post.title}</a>
            </li>
        </ul>
    </section>
</article>
