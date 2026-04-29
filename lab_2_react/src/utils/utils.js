async function myFetch(url) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      
      return data
    } catch (error) {
      console.error('There was an error fetching the data:', error);
      
      return null
    }
  }

async function fetchComments() {
    const url = "https://jsonplaceholder.typicode.com/posts/3/comments";
    const comments = await myFetch(url);
    return comments
}

export { fetchComments }