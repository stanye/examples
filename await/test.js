async function test() {
  const res = await setTimeout(() => {
    console.log(1);
  }, 0);

  console.log(res);

  console.log(2);
}

test();