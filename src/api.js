const BASE_URL = 'https://registry.npmjs.org/-/v1';

export const searchPackages = async (query, size = 10, from = 0) => {
    try {
        const response = await fetch(`${BASE_URL}/search?text=${query}&size=${size}&from=${from}`);
        if (!response.ok) {
            throw new Error('Error fetching packages');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};
