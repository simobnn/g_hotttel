// actions.js
export const add_article = (article) => {
    return {
      type: 'ADD_ARTICLE',
      payload: article,
    };
  };
  
  export const delete_article = (id) => {
    return {
      type: 'DELETE_ARTICLE',
      payload: id,
    };
  };
  