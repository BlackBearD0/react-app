class Config {
    loggedIn = false;
    admin = false

    setLoggedIn(val) {
        this.loggedIn = val;
    }
    setAdmin(val) {
        this.admin = val;
    }
}

export default new Config()