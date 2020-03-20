<script>
    export let segment;
</script>

<style>
    nav {
        grid-area: header;
        border-bottom: 1px solid gray;
        background-color: var(--color-theme-0);
    }

    ul {
        display: flex;
        flex-flow: row wrap;
        list-style: none;
        padding: 0;
        margin: 0;
        height: 100%;
        align-items: stretch;
    }

    li {
        display: flex;
        padding: 0.5rem;
        box-sizing: border-box;
        align-items: center;
    }

    li:not(:first-child) {
        border-left: 1px solid gray;
    }

    li:last-child {
        border-right: 1px solid gray;
    }

    a {
        text-decoration: none;
        color: black;
    }

    @media print {
        nav {
            display: none;
        }
    }

</style>


<nav>
    <ul>
        <li><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>

        <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
             the blog data when we hover over the link or tap it on a touchscreen -->
        <li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>
    </ul>
</nav>
