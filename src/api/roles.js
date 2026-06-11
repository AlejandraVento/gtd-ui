import Client from './client';

const roles = () => {
    return {
        getAllRoles: () => {
            return Client.get(
                `roles`,
            );
        },
    };
};

export default roles();
