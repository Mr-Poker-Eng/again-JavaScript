const loadData = async () => {
  try {
    console.log("first");
    console.log("second");

    // setTimeout(() => {
    //     console.log("setTimeout")
    // }, 1000)

    //   fetch("https://jsonplaceholder.typicode.com/todos/1")
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
    console.log(data);

    const result = 10 + 10;
    console.log(result);
    console.log("third");
  } catch {
    console.log("error")
  }
};

// async function fetchData(){
//     const response = await fetch("");
//     const data = await response.json();
//     console.log(data)
// }

loadData();
