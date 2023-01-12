import { setupWorker, rest } from 'msw';

export const worker = setupWorker(
    rest.get('https://api.adviceslip.com/advice', (req, res, ctx) => {
       return res(ctx.status(304));
    })
);

