// components/CompanyTable.tsx
import React from 'react';

interface Company {
  id: number;
  companyName: string;
  industry: string;
  location: string;
  revenue: number;
}

const CompanyTable: React.FC<Company> = ({ companies }:any) => {
  return (
    <div className=" overflow-x-auto shadow-md sm:rounded-lg w-[50%]">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Company Name
            </th>
            <th scope="col" className="px-6 py-3">
              Industry
            </th>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">
              Salary
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company:any) => (
            <tr key={company.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {company.companyName}
              </td>
              <td className="px-6 py-4">
                {company.industry}
              </td>
              <td className="px-6 py-4">
                {company.location}
              </td>
              <td className="px-6 py-4">
                ${company.revenue}
              </td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
