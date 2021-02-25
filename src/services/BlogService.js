import store from '@/store';
import Axios from 'axios';

const BlogService = {
  async getHome() {
    Axios({
      url: process.env.VUE_APP_GRAPHQL_URL,
      method: 'post',
      data: {
        query: `
 query {
  pages {
    id
    page_title
    about {
      id
      title
      txt
    }
    title_n_posts {
      title
      articles {
        id
        title
        tech
        git
        live
        image {
          url
        }
      }
    }
    gallery {
      id
      __typename
      title
      items {
        url
        caption
      }
    }
    contact {
      title
      email
      git
      insta
    }
  }
}

              `,
      },
    }).then((result) => {
      store.commit('setHome', { homePage: result.data.data.pages });
    });
  },
  async getPosts() {
    Axios({
      url: process.env.VUE_APP_GRAPHQL_URL,
      method: 'post',
      data: {
        query: `
              query  {
        articles {
          id
          title
          content
          git
          live
          tech
          image {
            url
          }
          category {
            id
            name
          }
        }
      }
        `,
      },
    }).then((result) => {
      console.log('getPosts result.data', result.data);
      store.commit('setBlog', { blog: result.data.data.articles });
    });
  },
};
export default BlogService;