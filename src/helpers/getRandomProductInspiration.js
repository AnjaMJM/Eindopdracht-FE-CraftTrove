export function getRandomProducts(apiResponse, numProducts = 5) {
    if (apiResponse.length <= numProducts) {
        return apiResponse;
    }
    const randomIndices = [];
    while (randomIndices.length < numProducts) {
        const randomIndex = Math.floor(Math.random() * apiResponse.length);
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
        }
    }
    return randomIndices.map(index => apiResponse[index]);
}
