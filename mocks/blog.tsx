// RS How to replace the mock data with data from livethelife.tv TryGhost content API

// const api = new GhostContentAPI({
//    url: 'https://edito.ghost.io',
//    key: '440f3073c22cc18532712cbe6b',
//    version: "v5.0"
//  });


{
    allGhostPost(sort: { order: DESC, fields: [published_at] }) {
      edges {
        node {
          id
          slug
          title
          html
          published_at
          ...
          tags {
            id
            slug
            ...
          }
          primary_tag {
            id
            slug
            ...
          }
          authors {
            id
            slug
            ...
          }
        }
      }
    }
  }

export const blog = [
    {
        title: "The Metaverse Fine Art Gallery", // title
        content:
            "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.", // description
        image: "/images/blog-pic-1.jpg",
        author: "ikigai II",
        date: "26 Aug 2023",
        avatar: "/images/author-1.jpg",
        history: true,
        url: "/blog/detail", // slug
    },
    {
        title: "Living The Good Life.",
        content:
            "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
        image: "/images/blog-pic-2.jpg",
        author: "ikigai II",
        date: "22 Aug 2023",
        avatar: "/images/author-1.jpg",
        history: true,
        url: "/blog/detail",
    },
    {
        title: "The Metaverse Fine Art Gallery",
        content:
            "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
        image: "/images/blog-pic-3.jpg",
        author: "ikigai II",
        date: "15 Aug 2023",
        avatar: "/images/author-1.jpg",
        history: true,
        url: "/blog/detail",
    },
    {
        title: "The Metaverse Fine Art Gallery",
        content:
            "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
        image: "/images/blog-pic-4.jpg",
        author: "ikigai II",
        date: "12 Aug 2023",
        avatar: "/images/author-1.jpg",
        history: true,
        url: "/blog/detail",
    },
];

export const blogSlider = [
    {
        title: "The Metaverse Fine Art Gallery",
        image: "/images/blog-pic-1.jpg",
        content:
            "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
        url: "/blog/detail",
    },
    {
        title: "The Metaverse Fine Art Gallery",
        image: "/images/blog-pic-2.jpg",
        content:
            "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
        url: "/blog/detail",
    },
    {
        title: "The Metaverse Fine Art Gallery",
        image: "/images/blog-pic-3.jpg",
        content:
            "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
        url: "/blog/detail",
    },
    {
        title: "The Metaverse Fine Art Gallery",
        image: "/images/blog-pic-4.jpg",
        content:
            "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
        url: "/blog/detail",
    },
    {
        title: "The Metaverse Fine Art Gallery",
        image: "/images/blog-pic-1.jpg",
        content:
            "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
        url: "/blog/detail",
    },
    {
        title: "The Metaverse Fine Art Gallery",
        image: "/images/blog-pic-2.jpg",
        content:
            "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
        url: "/blog/detail",
    },
    {
        title: "The Metaverse Fine Art Gallery",
        image: "/images/blog-pic-3.jpg",
        content:
            "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
        url: "/blog/detail",
    },
    {
        title: "The Metaverse Fine Art Gallery",
        image: "/images/blog-pic-4.jpg",
        content:
            "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
        url: "/blog/detail",
    },
];
