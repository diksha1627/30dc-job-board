import { useRouter } from "next/router";
import { useEffect } from "react";
// import { ModifierFlags } from "typescript";
import Navbar from '../../components/Navbar';
import SearchInput from "../../components/SearchJob";
import CompanyTable from "../../components/CompanyTable";


interface Company {
  id: number;
  companyName: string;
  industry: string;
  location: string;
  revenue: number;
}

const cities = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Kolkata',
  // Add more cities as needed
];

const countries = [
  'India',
  'United States',
  'United Kingdom',
  'Australia',
  // Add more countries as needed
];

const Dashboard = ({users}: any) => {
 
  const companies: Company[] = [
    { id: 1, companyName: 'Example Inc.', industry: 'Technology', location: 'New York', revenue: 1000000 },
    { id: 2, companyName: 'ABC Corporation', industry: 'Finance', location: 'London', revenue: 5000000 },
    { id: 3, companyName: 'XYZ Corp', industry: 'Healthcare', location: 'San Francisco', revenue: 2000000 },
  ];
 
  return (
    <>
      <Navbar/>
    <section className="flex flex-col w-full h-[80vh] justify-start items-center gap-10 mt-5"> 
    <SearchInput cities={cities} countries={countries} />
      <CompanyTable companies={companies} />

    </section>
    </>
  )
}



export default Dashboard;