import Client from './client';

const auth = () => {
    return {
        login: (email, password) => {
            return Client.post(
                `auth/login`,
                { email, password }
            );
        },
    };
};

export default auth();