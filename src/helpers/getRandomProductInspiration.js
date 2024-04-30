export function getRandomProducts(apiResponse, numProducts = 5) {
    // Check if the number of products in the response is less than the required number
    if (apiResponse.length <= numProducts) {
        return apiResponse;
    }

    // Generate 5 unique random indices
    const randomIndices = [];
    while (randomIndices.length < numProducts) {
        const randomIndex = Math.floor(Math.random() * apiResponse.length);
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
        }
    }
    console.log(randomIndices)

    // Get the products corresponding to the random indices
    return randomIndices.map(index => apiResponse[index]);
}
