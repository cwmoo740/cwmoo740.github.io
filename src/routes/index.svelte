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
        <p>Animal lover, outdoor enthusiast. Currently trying to save the world one cow at a time.</p>
    </section>

    <section class='work'>
        <h1>Work</h1>
        <div>
            <h3>Pasturemap</h3>
        </div>
        <div>
            <h3>Yodle/Web</h3>
        </div>
        <div>
            <h3>Brighterion</h3>
        </div>
        <div>
            <h3>Photonic</h3>
        </div>
        <div>
            <h3>UC Berkeley</h3>
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
