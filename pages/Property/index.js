import React from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HouseCard from '../../components/HouseCard';
import { useRouter } from 'next/router'
import { format } from "date-fns";

function Index({ searchResults }) {

  const router = useRouter();
  const { location, startDate, endDate, guestAmount } = router.query;

  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formatedStartDate} - ${formatedEndDate}`

  return (
    <div>
      <Header placeholder={`${location} : ${guestAmount} guests`} />
      <main className="flex">
        <section className="flex-grow pt-10 px-6">
          <p className="text-sm text-secondary mt-3">5 number of places from {range} for {guestAmount} guests</p>
          <h1 className="text-2xl text-secondary font-semibold mt-2 mb-6">Places in {location}</h1>
          <div className="mb-5 space-x-3 text-secondary whitespace-nowrap hidden lg:inline-flex">
            <p className="button"> Price </p>
            <p className="button">Types of Places</p>
            <p className="button">Rooms</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, price, title, description }) =>
              (
              <HouseCard
                key={img}
                img={img}
                location={location}
                price={price}
                title={title}
                description={description}
              />
            ))};
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Index

export async function getServerSideProps() {
  const searchResults = await fetch("").then(res => res.json());
  return {
    props: {
      searchResults,
    },
  };
}