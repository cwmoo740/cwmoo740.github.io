import * as google from './google-irrelevance';

const posts = [
    google,
]
    .sort((a, b) => b.date - a.date);

export default posts;
