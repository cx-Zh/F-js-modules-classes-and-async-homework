// export const getPoetry

//使用Promise函数实现
function getPoetryPromises() {
  const result = fetch("https://v1.jinrishici.com/all.json", {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    credentials: "same-origin",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
  return result;
}

//使用Async函数实现
async function getPoetryAsync() {
  const result = await fetch("https://v1.jinrishici.com/all.json", {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    credentials: "same-origin",
  }).catch((err) => console.log(err));
  return result.json();
}

//通过注释可以实现调用不同的方法来实现最终结果
async function getPoetry() {
  const result = await getPoetryAsync();
  // const result = await getPoetryPromises();
  const resultArray = Array.of();
  resultArray.push(result.origin);
  resultArray.push(result.author);
  resultArray.push(result.content);

  return resultArray;
}
export { getPoetry };
