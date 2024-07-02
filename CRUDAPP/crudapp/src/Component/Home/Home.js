import { users } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Navvbar from '../Navvbar/Navvbar'

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
  const [searchTerm , setSearchTerm] = useState('')
  const [currentpage, setCurrentpage] = useState(1);
  const filterData = data.filter(users=>users.firstname.toLowerCase().includes(searchTerm.toLowerCase()))
  const recordPerpage = 5;
  const LastIndex = currentpage * recordPerpage;
  const FirstIndex = LastIndex - recordPerpage;
  const records = filterData.slice(FirstIndex , LastIndex);
  const npage = Math.ceil(filterData.length / recordPerpage);
  const numbers = [...Array(npage + 1).keys()].slice(1)
  

 

  const loadUser = async()=>{
    const res=await axios.get("http://localhost:3000/users")
    setData(res.data);
  }
  //  const filterData = data.filter(users=>users.firstname.toLowerCase().includes(searchTerm.toLowerCase))
  useEffect(()=>{
    loadUser();
  },[])
   
  const onDelete=(id)=>{
    axios.delete(`http://localhost:3000/users/${id}`)
    .then((response)=>{
      loadUser();
    })
    .catch((error)=>{
      console.log(error,"error")
    })
  }
  const  perPage =()=>{
    if(currentpage !==1){
      setCurrentpage(currentpage-1);
    }
  }
  const changepage=(id)=>{
    setCurrentpage(id)
  }
  const nextpage=()=>{
    if(currentpage !== npage){
      setCurrentpage(currentpage+1);
    }
  }

  return (
    <>
    
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-bold">STUDENT</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all employees. You can add new employees, edit or delete existing
              ones.
            </p>
          </div>
         <input type="search" id="default-search" className="block w-50 flex justify-center items-center ml-80 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 mt-10 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search......." required  onChange={(e) => setSearchTerm(e.target.value)}/>
        
          
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
                    {records.map((users) => (
                      <tr key={users.id}>
                          
                        <td className=" px-12 py-4">
                          <div className="text-sm text-gray-900 ">{users.firstname}</div>
                        </td> 
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{users.lastname}</div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{users.Age}</div>
                        </td>
                        <td>
                          <div className="text-sm text-gray-700">{users.city}</div>
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
                          <Link to={`/edit/${users.id}`} href="#" className="bg-green-700 p-3 rounded-sm text-white">
                            Edit
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm font-medium">
                         <button className='bg-red-700 p-2 text-white rounded-sm' onClick={()=>onDelete(users.id)}>delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <div className="flex items-center justify-center pt-6">
          <a href="#" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">&larr; Previous</span>
            <span className="block lg:hidden">&larr;</span>
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            1
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            2
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            3
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            4
          </a>
          <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">Next &rarr;</span>
            <span className="block lg:hidden">&rarr;</span>
          </a>
        </div>
         */}
        </div>
      </section>
      <div className="flex items-center justify-center">
        <a
          href="#"
          className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900"
          onClick={perPage}
        >
          ← Previous
        </a>
        <div className="flex items-center">
          {numbers.map((n, i) => (
            <a
              href="#"
              key={i}
              className={`page-items ${currentpage === n ? 'active' : ''} mx-1 rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105`}
              onClick={() => changepage(n)}
            >
              {n}
            </a>
          ))}
        </div>
        <a
          href="#"
          className="mx-2 text-sm font-semibold text-gray-900"
          onClick={nextpage}
        >
          Next →
        </a>
      </div>

    </>
  )
}

        

            
          
