import React from 'react'
import {FiMail} from 'react-icons/fi'

const Orders = () => {
  return (
    <div className='lg:py-10 lg:px-10'>
    <div className=' flex  justify-between'>
    <h1 className='text-black font-semibold text-2xl'>
    Orders
  </h1>
 
    </div>
  <div class="relative mt-5 overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="px-6 py-3">
                     Image
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Title
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Buyer
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Contact
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple MacBook Pro 17"
                  </th>
                  <td class="px-6 py-4">
                      Sliver
                  </td>
                  <td class="px-6 py-4">
                      Laptop
                  </td>
                  <td class="px-6 py-4">
                      $2999
                  </td>
                  <td class="px-6 py-4">
                      <a href="#" class="font-medium text-xl text-blue-600  hover:underline"><FiMail/></a>
                  </td>
              </tr>
              <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Microsoft Surface Pro
                  </th>
                  <td class="px-6 py-4">
                      White
                  </td>
                  <td class="px-6 py-4">
                      Laptop PC
                  </td>
                  <td class="px-6 py-4">
                      $1999
                  </td>
                  <td class="px-6 py-4">
                  <a href="#" class="font-medium text-xl text-blue-600  hover:underline"><FiMail/></a>
                  </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Magic Mouse 2
                  </th>
                  <td class="px-6 py-4">
                      Black
                  </td>
                  <td class="px-6 py-4">
                      Accessories
                  </td>
                  <td class="px-6 py-4">
                      $99
                  </td>
                  <td class="px-6 py-4">
                  <a href="#" class="font-medium text-xl text-blue-600  hover:underline"><FiMail/></a>
                  </td>
              </tr>
              <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Google Pixel Phone
                  </th>
                  <td class="px-6 py-4">
                      Gray
                  </td>
                  <td class="px-6 py-4">
                      Phone
                  </td>
                  <td class="px-6 py-4">
                      $799
                  </td>
                  <td class="px-6 py-4">
                  <a href="#" class="font-medium text-xl text-blue-600  hover:underline"><FiMail/></a>
                  </td>
              </tr>
              <tr>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple Watch 5
                  </th>
                  <td class="px-6 py-4">
                      Red
                  </td>
                  <td class="px-6 py-4">
                      Wearables
                  </td>
                  <td class="px-6 py-4">
                      $999
                  </td>
                  <td class="px-6 py-4">
                  <a href="#" class="font-medium text-xl text-blue-600  hover:underline"><FiMail/></a>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
  </div>
  )
}

export default Orders