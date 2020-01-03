import * as google from './google-irrelevance';
import * as dark from './his-dark-materials';

const posts = [
    dark,
    google,
]
    .sort((a, b) => a.date - b.date);

export default posts;
