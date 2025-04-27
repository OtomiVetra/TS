const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

type CommentData = {
  id: number;
  email: string;
};

const getData = async (url: string): Promise<CommentData[]> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Ошибка при запросе: ${response.status}`);
  }

  const data: CommentData[] = await response.json();

  return data;
};

getData(COMMENTS_URL)
  .then((comments) => {
    for (const comment of comments) {
      console.log(`ID: ${comment.id}, Email: ${comment.email}`);
    }
  })
  .catch((error) => {
    console.error('Ошибка при получении данных:', error.message);
  });
