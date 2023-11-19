import { deleteSync } from 'del';

export const reset = () => {
    return Promise.resolve(deleteSync(app.path.clean));
}