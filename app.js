const os = require('os');
console.log(`Welcome ${os.userInfo().username}!`);
process.stdin.on('data', (data) => {
    data = data.toString().trim()
    switch (data) {
        case 'os --cpus':
        case 'os --homedir':
        case 'os --hostname':
        case 'os --platform':
            console.log(os[data.slice(5)]());
            break;

        case 'os --username':
            console.log(os.userInfo().username);
            break;

        case 'os --architecture':
            console.log(os.arch());
            break;

        case 'os --memory':
            console.log(os.totalmem());
            break;

        case '.exit':
            process.exit()

        default:
            console.log('Invalid input');
            break;
    }
});

process.on('exit', () => {
    console.log(`\nThank you ${process.env.USER}, goodbye!`);
});

process.on('SIGINT', () => {
    process.exit()
});
