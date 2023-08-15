const GhostContentAPI = require('@tryghost/content-api');

const api = new GhostContentAPI({
  host: 'https://demo.ghost.io',
  key: '22444f78447824223cefc48062',
  version: "v5.0"
});

// fetch 5 posts, including related tags and authors
api.posts.browse({
    filter: 'tag:fiction+tag:-fables'
})
.then((posts) => {
    posts.forEach((post) => {
        console.log(post.title);
    });
})
.catch((err) => {
    console.error(err);
});

const {tags, readingTime} = require('@tryghost/helpers');
// Outputs e.g. A 5 minute read.
posts.forEach((post) => {
    readingTime(post, {minute: 'A 1 minute read.', minutes: 'A % minute read.'});
});

api.posts.browse({filter: 'featured:true'});



// Browsing posts returns Promise([Post...]);
// The resolved array will have a meta property
api.posts.browse({limit: 2, include: 'tags,authors'});
api.posts.browse();

// Reading posts returns Promise(Post);
api.posts.read({id: 'abcd1234'});
api.posts.read({slug: 'something'}, {formats: ['html', 'plaintext']});

// Browsing authors returns Promise([Author...])
// The resolved array will have a meta property
api.authors.browse({page: 2});
api.authors.browse();

// Reading authors returns Promise(Author);
api.authors.read({id: 'abcd1234'});
api.authors.read({slug: 'something'}, {include: 'count.posts'}); // include can be array for any of these

// Browsing tags returns Promise([Tag...])
// The resolved array will have a meta property
api.tags.browse({order: 'slug ASC'});
api.tags.browse();

// Reading tags returns Promise(Tag);
api.tags.read({id: 'abcd1234'});
api.tags.read({slug: 'something'}, {include: 'count.posts'});

// Browsing pages returns Promise([Page...])
// The resolved array will have a meta property
api.pages.browse({limit: 2});
api.pages.browse();

// Reading pages returns Promise(Page);
api.pages.read({id: 'abcd1234'});
api.pages.read({slug: 'something'}, {fields: ['title']});

// Browsing settings returns Promise(Settings...)
// The resolved object has each setting as a key value pair
api.settings.browse();
