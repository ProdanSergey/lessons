import dayjs from 'dayjs';

import { Person } from './models/person.model';
import { Logger } from './utils/logger';

import './styles/main.css';
import './styles/headline.less';
import './styles/default.scss';

import cat from './assets/cat.jpeg';

const employee = new Person({
	firstName: 'Bob',
	lastName: 'Johnson'
});

const logger = new Logger();

logger.print('Welcome Aboard', dayjs().format());

logger.print(employee);

document.body.style.backgroundImage = `url(${cat})`;