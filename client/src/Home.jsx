import data from "../public/data.js";

const laptops = data

export default function Home() {
  return <>
    {
      <laptops laptops={data} />
    }
  </>
}