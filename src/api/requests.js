import Client from './client';

const requests = () => {
    return {
        getAllRequest: () => {
            return Client.get(
                `requests`,
            );
        },
        getRequestDefinitionPhases: (id) => {
            return Client.get(
                `workflow-definitions/${id}`
            );
        },
    };
};

export default requests();
