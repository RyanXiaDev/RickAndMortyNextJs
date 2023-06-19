import styles from "../page.module.css"
export default async function ImagesPanel({
  params,
}: {
  params: { pageNum: string };
}) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${params.pageNum}`
  );
  const data = await res.json();
  console.log("test server")

  return(
    <>
    <ul className={styles.grid}>
    {data.results.map((result: { id: any; name: any; image: string }) => {
      const { id, name, image } = result;
      return (
        <li key={id} className="card">
          <img
            src={image}
            width={200}
            height={200}
            alt={`picture of ${name}`}
          />
          <h3>{name}</h3>
        </li>
      );
    })}
  </ul>
  
  </>

  )
}
