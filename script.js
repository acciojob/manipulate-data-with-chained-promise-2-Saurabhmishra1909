function manipulateArray() {
            // Initial promise resolves with the array after 3 seconds
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([1, 2, 3, 4]);
                }, 3000); // 3 second delay
            })
            .then((array) => {
                // First Transformation: Filter out odd numbers
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const even = array.filter(num => num % 2 === 0);
                        document.getElementById('output').innerText = even.join(',');
                        resolve(even);
                    }, 1000); // 1 second delay
                });
            })
            .then((even) => {
                // Second Transformation: Multiply even numbers by 2
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const multiplied = even.map(num => num * 2);
                        document.getElementById('output').innerText = multiplied.join(',');
                        resolve(multiplied);
                    }, 2000); // 2 second delay
                });
            })
            .catch((error) => {
                console.error("Error: ", error);
            });
        }

        // Start the array manipulation when the page loads
        manipulateArray();