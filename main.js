const words = {
    name: 'John',
    age: 30,
    city: 'New York'
}
for (const key in words) {
    console.log(`${words[key]}`);
}