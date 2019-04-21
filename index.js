const tmi = require('tmi.js');

const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: 'the_mc_bot',
        password: 'oauth:0p452nd16udwi4n8svvd0qk34tutnd',
    },
    channels: ['#the_mc_']
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action('the_mc_', 'Hello the_mc_bot is now connected');
});

client.on('chat', (channel, userstate, message, self) => {
    if (message === '!game') {
        client.action('the_mc_', 'the_mc_ is playing Fortnite');
    }

    if (message === 'hello') {
        client.action('the_mc_', `Hello ${userstate['display-name']}`)
    }

    if (message === '!killbot') {
        client.action('the_mc_', 'Bye bye');
        client.disconnect();
    }
});
