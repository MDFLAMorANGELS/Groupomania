const db = require('../config/db');

class Post {
    constructor(title, data, userID, image) {
        this.title = title;
        this.data = data;
        this.authorID = userID;
        this.image = image;
    }

    save() {
        if (this.image !== null) {
            let sql = `
            INSERT INTO post(
               title,
               data,
               author_ID,
               image
            )
            VALUES(
                '${this.title}',
                '${this.data}',
                '${this.authorID}',
                '${this.image}'
            )
            `;
    
            return db.execute(sql);
        }else{
            let sql = `
            INSERT INTO post(
               title,
               data,
               author_ID
            )
            VALUES(
                '${this.title}',
                '${this.data}',
                '${this.authorID}'
            )
            `;
    
            return db.execute(sql);
        }
    }

    static findAll() {
        let sql = "select post.title,post.created_at, post.data, post.ID, post.author_ID, post.image, user.username from post INNER JOIN user ON post.author_ID = user.ID ORDER BY id DESC ;";
        return db.execute(sql);
    }

    static findById(id) {
        let sql = `select post.title,post.created_at, post.data, post.ID, post.author_ID, post.image, user.username from post INNER JOIN user ON post.author_ID = user.ID  WHERE post.ID = ${id};`;

        return db.execute(sql);
    }

    static deletePost(id) {
        let sql = `delete from post where ID = ${id};`;

        return db.execute(sql);
    }
}

module.exports = Post;