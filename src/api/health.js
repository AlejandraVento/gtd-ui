import Client from './client';

const health = () => {
    return {
        getHealthCheck: () => {
            return Client.get(
                `status`,
            );
        },
    };
};

export default health();
