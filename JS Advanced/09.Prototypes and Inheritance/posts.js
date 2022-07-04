function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            let arr = [`Post: ${this.title}`, `Content: ${this.content}`];
            return arr.join('\n');
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment) {
            this.comments.push(` * ${comment}`);
        }
        toString() {
            if (this.comments.length > 0) {
                let newArr = [`Rating: ${this.likes - this.dislikes}`, 'Comments:', `${this.comments.join('\n')}`];
                return super.toString() + '\n' + newArr.join('\n');
            }
            return super.toString() + '\n' + `Rating: ${this.likes - this.dislikes}`;
        }

    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        view() {
            this.views++;
            return this
        }
        toString() {
            return super.toString() + '\n' + `Views: ${this.views}`;
        }
    }
    return { Post, SocialMediaPost, BlogPost }
}


const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
