import Client from './client';

const files = () => {
    return {
        uploadFile: (data) => {
            return Client.post(
                `files/upload`, data
            );
        },
        getUserFiles: (userId) => {
            return Client.get(
                `files/user/${userId}`
            );
        },
    };
};

export default files();
