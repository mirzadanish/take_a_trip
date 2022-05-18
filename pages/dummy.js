import axios from "axios"
import { useEffect } from "react";

/** @param {import('next').InferGetStaticPropsType<typeof getStaticProps> } props */
export default function App (props) {


  console.log()

    return (
      <ul> 
        <li>{props.res.message}</li>
      </ul>
     )
}

export async function getServerSideProps(){
  const res = await fetch(`http://localhost:5000/api/user`).then(res => res.json())
  // const data = await res.json()

  // Pass data to the page via props
  return { props: { res } }
}