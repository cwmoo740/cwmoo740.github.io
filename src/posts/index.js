import * as google from './google-irrelevance';
import * as dark from './his-dark-materials';

const posts = [
    dark,
    google,
]
    .sort((a, b) => b.date - a.date);

export default posts;
