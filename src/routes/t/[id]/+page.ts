interface Button {
  text: string;
  link: string;
}

interface Tag {
  text: string;
}

export interface TreeData {
  username: string;
  ppInitials: string;
  description: string;
  buttons: Button[];
  tag: Tag[];
}

async function getData(id: string): Promise<TreeData> {
  const options = {
    method: "GET",
  };
  const res = await fetch(
    `https://social-tree-cd49e-default-rtdb.firebaseio.com/infoData/${id}.json`,
    options
  );
  if (res.ok) {
    const data: TreeData = await res.json();
    console.log("data fetched");
    return data;
  } else {
    alert("error fetching the data from the db");
    throw new Error("Error fetching data");
  }
}

export const load = async ({ fetch, params }) => {
  const data = await getData(params.id);
  return { data };
};
