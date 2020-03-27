import * as google from './google-irrelevance';
import * as dark from './his-dark-materials';
import * as coronavirus from './coronavirus-climate-change';

const posts = [
    coronavirus,
    dark,
    google,
]
    .sort((a, b) => a.date - b.date);

export default posts;
