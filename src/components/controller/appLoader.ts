import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        if (process.env.API_URL === undefined) {
            throw new Error('variable missing');
        }

        if (process.env.API_KEY === undefined) {
            throw new Error('variable missing');
        }

        super(process.env.API_URL, {
            apiKey: process.env.API_KEY,
        });
    }
}

export default AppLoader;
