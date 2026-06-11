import Client from './client';

const users = () => {
    return {
        getCurrentUser: () => {
            return Client.get(
                `users/profile`,
            );
        },
        getUsersList: (order, limit, page, sort, search, roleId) => {
            const params = {
                limit: limit,
                page: page,
                search: search,
                roleId: roleId,
                sort: sort,
                order: order
            };
            return Client.get(
                `users/list`, { params }
            );
        },
        getUser: (userId) => {
            return Client.get(
                `users/get-one/${userId}`
            );
        },
        createUser: (data) => {
            return Client.post('users', data);
        },
        updateUser: (userId, data) => {
            return Client.put(`users/${userId}`, data);
        },
        enableUser: (userId) => {
            return Client.put(`users/toggle-user-status/${userId}`);
        }
    };
};

export default users();
