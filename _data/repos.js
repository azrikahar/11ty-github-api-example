const fetch = require("node-fetch")

module.exports = async () => {
    const reposUrl = 'https://api.github.com/users/azrikahar/repos'
    const repos = await fetch(reposUrl, {
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }
    }).then(res => res.json())
    return repos
}