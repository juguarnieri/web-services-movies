const { v4: uuid4 } = require("uuid");

class Movie {
    constructor(title, actor, duration, gender = 0) {
        this.id = uuid4();
        this.title = title;
        this.singer = singer;
        this.duration = duration;
        this.plays = plays;
    }
}

module.exports = Movie;
