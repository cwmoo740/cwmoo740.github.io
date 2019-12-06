import posts from '../../posts';

const contents = JSON.stringify(posts.map(post => {
    return {
        title: post.title,
        slug: post.slug,
        date: post.date,
    };
}));

export function get(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});

    res.end(contents);
}
