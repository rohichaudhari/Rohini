import { users } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navvbar from '../Component/Navbar'

// const people = [
//   {
//     name: 'John Doe',
//     title: 'Front-end Developer',
//     department: 'Engineering',
//     email: 'john@devui.com',
//     role: 'Developer',
//     image:
//       'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
//   },
//   {
//     name: 'Jane Doe',
//     title: 'Back-end Developer',
//     department: 'Engineering',
//     email: 'jane@devui.com',
//     role: 'CTO',
//     image:
//       'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
//   },
// ]

export default function Home() {
  const [data,setData] = useState([]);
  const loadUser = async()=>{
    const res=await axios.get("http://localhost:3000/person")
    setData(res.data);
  }
  useEffect(()=>{
    loadUser();
  },[])
   
  const onDelete=(id)=>{
    axios.delete(`http://localhost:3000/person/${id}`)
    .then((response)=>{
      loadUser();
    })
    .catch((error)=>{
      console.log(error,"error")
    })
  }
  return (
    <>
    <Navvbar/>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-bold">STUDENT</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all employees. You can add new employees, edit or delete existing
              ones.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Link to='/create'>Add new student</Link>
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className=''>
                    {/* <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Image</span>
                      </th> */}
                      
                      <th
                        scope="col"
                        className="px-4 py-3.5  text-sm font-normal  text-gray-700"
                      >
                        firstname
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5  text-sm font-normal text-gray-700"
                      >
                        lastname
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5  text-sm font-normal text-gray-700"
                      >
                        Age
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-gray-700"
                      >
                        city
                      </th>
                      <th scope="col" className="relative px-4 py-3.5 text-center">
                        <span>Edit</span>
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <button>delete</button>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((person) => (
                      <tr key={person.id}>
                        <td className=" px-12 py-4">
                          <div className="text-sm text-gray-900 ">{person.firstname}</div>
                        </td> 
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{person.lastname}</div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{person.Age}</div>
                        </td>
                        <td>
                          <div className="text-sm text-gray-700">{person.city}</div>
                        </td>

                        {/* <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Active
                          </span>
                        </td> */}
                        {/* <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {users.role}
                        </td> */}
                        <td className="whitespace-nowrap px-4 py-4 text-sm font-medium">
                          <Link to={`/edit/${person.id}`} href="#" className="bg-green-700 p-3 rounded-sm text-white">
                            Edit
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm font-medium">
                         <button className='bg-red-700 p-2 text-white rounded-sm' onClick={()=>onDelete(person.id)}>delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
