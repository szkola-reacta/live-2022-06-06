import axios from 'axios';

export const loadPosts = async () => {
  // try {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log('response: ', response);
  return response.data;
  // } catch {
    // throw new Error();
  // }
}