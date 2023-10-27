const URLApiAfp = "https://653bc0c9d5d6790f5ec7611c.mockapi.io/afp";

const URLApiHaberes = "https://653bc0c9d5d6790f5ec7611c.mockapi.io/haberes";

export async function createAfp(body) {
  const response = await fetch(URLApiAfp, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
}

export async function createHaberes(body) {
  const response = await fetch(URLApihaberes, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
}
