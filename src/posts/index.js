import * as google from './google-irrelevance';
import * as dark from './his-dark-materials';
import * as coronavirus from './coronavirus-climate-change';
import * as michigan from './michigan-lockdown-protests';

const posts = [
    coronavirus,
    dark,
    google,
    michigan,
]
    .sort((a, b) => a.date - b.date);

export default posts;
