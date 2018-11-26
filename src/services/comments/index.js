const wait = async (sec = 1) => {
  return new Promise(resolve => {
    setTimeout(resolve, sec * 1000)
  });
}

export const fetchCommentsFromApi = async () => {
  await wait();
  try {
    const commentsJson = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await commentsJson.json();
    const commentsBody = comments.map(c => c.body);

    return commentsBody.slice(0, 10)
  } catch (e) {
  }
};