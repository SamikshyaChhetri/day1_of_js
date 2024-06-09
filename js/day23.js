const getData = async () => {
  const response = await fetch("https://lms.sachetsubedi001.com.np/api/books");
  const data = await response.json();
  data.data.forEach((book) => {
    console.log(book);
  });
};

getData();
