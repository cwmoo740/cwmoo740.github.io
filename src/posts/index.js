import * as google from './google-irrelevance';
import * as dark from './his-dark-materials';
import * as coronavirus from './coronavirus-climate-change';
import * as michigan from './michigan-lockdown-protests';
import * as law_and_order from './law-and-order';

const posts = [
    coronavirus,
    dark,
    google,
    michigan,
    law_and_order,
]
    .sort((a, b) => a.date - b.date);

export default posts;
