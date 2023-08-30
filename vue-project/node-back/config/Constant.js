module.exports = {
    DATABASE: {
        POOL_SIZE: 10,
        HOST: [
            {NAME: 'localhost', PORT: 27017}
        ],
        NAME: 'vue-project',
        USER_ID: '',
        USER_PASS: ''
    },

    SESSION : {
        SECRET: 'vue-project',
        TTL: 604800,
        MAX_AGE: 604800000,
        COLLECTION: 'Session'
    },
}