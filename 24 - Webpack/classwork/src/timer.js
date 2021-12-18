import dayjs from 'dayjs';

setInterval(() => {
	console.log('[TIMESTAMP]', dayjs().format());
}, 1000);