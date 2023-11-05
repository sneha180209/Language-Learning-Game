import React, { useState } from 'react';

function GermanEasyAnimalMCQ() {
  const [currentPage, setCurrentPage] = useState(1);
  
  ; // Total number of pages

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col justify-center items-center my-12">
      {currentPage === 1 && (
        <div>
          {/* Your content for the first page */}
          <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Which animal "Barks"?</h3>
          <ul className="grid w-96 gap-6 md:grid-cols-2">
          <li>
                <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer" />
                <label
                    for="hosting-big"
                    class="inline-flex items-center justify-between w-full p-5 text-white-400 bg-white-200 border border-yellow-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <div class="flex flex-row gap-4">
                        <div class="w-full">Hund</div>
                        <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">
                            <img className='w-20 h-14' src="https://cdn-icons-png.flaticon.com/128/1998/1998627.png"/>
                        </a>
                    </div>
                </label>
            </li>

            <li>
                <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
                <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-white-400 bg-white-400 border border-green-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="flex flex-row gap-4">
                    <div class="w-full">Katze</div>
                    <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">
                        <img className='w-20 h-14' src="https://cdn-icons-png.flaticon.com/128/1998/1998592.png"/>
                    </a>
                </div>
                </label>
            </li>
            <li>
                <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
                <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-white-400 bg-white-400 border border-red-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="flex flex-row gap-4">
                    <div class="w-full">Kuh</div>
                    <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">
                        <img className='w-20 h-14' src="https://cdn-icons-png.flaticon.com/128/1998/1998610.png" />
                    </a>
                </div>
                </label>
            </li>
            <li>
                <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required/>
                <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-white-400 bg-white-400 border border-pink-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                    <div class="flex flex-row gap-4">
                        <div class="w-full">Fuchs</div>
                        <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">
                            <img className='w-20 h-14' src="https://cdn-icons-png.flaticon.com/128/3704/3704101.png"/>
                        </a>
                    </div>
                </label>
            </li>
          </ul>
          {/* <button onClick={() => handlePagination(2)}>Next</button> */}
        </div>
      )}

      {currentPage === 2 && (
        <div>
          {/* Your content for the second page */}
          <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Which animal was in the role of jerry in "Tom and Jerry"?</h3>
          <ul className="grid w-96 gap-6 md:grid-cols-2">
          <li>
        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required/>
        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-white-500 bg-white-400 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <div class="flex flex-row gap-4">
                    <div class="w-full">Katze</div>
                    <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">
                        <img className='w-20 h-14' src="https://cdn-icons-png.flaticon.com/128/1998/1998592.png"/>
                    </a>
                </div>
        </label>
    </li>
    <li>
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
        <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-white-500 bg-white-400 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="flex flex-row gap-4">
                <div class="w-full">Maus</div>
                <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">
                    <img className='w-20 h-14' src="https://cdn-icons-png.flaticon.com/128/375/375105.png" />
                </a>
            </div>
        </label>
    </li>
    <li>
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
        <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-white-500 bg-white-400 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-white-700 dark:hover:bg-white-600">
            <div class="flex flex-row gap-4">
                <div class="w-full">Hund</div>
                <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">
                    <img className='w-20 h-14' src="https://cdn-icons-png.flaticon.com/128/1998/1998627.png"/>
                </a>
            </div>
        </label>

    </li>
    <li>
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
        <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-white-500 bg-white-200 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="flex flex-row gap-4">
                <div class="w-full">Kuh</div>
                <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">
                    <img className='w-20 h-14' src="https://cdn-icons-png.flaticon.com/128/1998/1998610.png" />
                </a>
            </div>
        </label>
    </li>
          </ul>
          {/* <button onClick={() => handlePagination(1)}>Previous</button> */}
        </div>
      )}

{currentPage === 3 && (
        <div>
          {/* Your content for the second page */}
          <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Which animal produces the sound "Meow"?</h3>
          <ul className="grid w-96 gap-6 md:grid-cols-2">
          <li>
        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required/>
        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-white-500 bg-white-400 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="flex flex-row gap-4">
                <div class="w-full">Pferd</div>
                <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">
                    <img className='w-20 h-14' src="https://cdn-icons-png.flaticon.com/128/1998/1998679.png"/>
                </a>
            </div>
        </label>
    </li>
    <li>
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
        <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-white-500 bg-white-400 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="flex flex-row gap-4">
                <div class="w-full">Schildkröte</div>
                <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">
                    <img className='w-20 h-14' src="https://cdn-icons-png.flaticon.com/128/2977/2977402.png"/>
                </a>
            </div>
        </label>
    </li>
    <li>
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
        <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-white-500 bg-white-200 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="flex flex-row gap-4">
                <div class="w-full">Hund</div>
                <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">
                    <img className='w-20 h-14' src="https://cdn-icons-png.flaticon.com/128/1998/1998627.png"/>
                </a>
            </div>
        </label>
    </li>
    <li>
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
        <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-white-500 bg-white-400 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-white-700 dark:hover:bg-white-600">
                <div class="flex flex-row gap-4">
                    <div class="w-full">Katze</div>
                    <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">
                        <img className='w-20 h-14' src="https://cdn-icons-png.flaticon.com/128/1998/1998592.png"/>
                    </a>
                </div>
        </label>

    </li>
          </ul>
          {/* <button onClick={() => handlePagination(1)}>Previous</button> */}
        </div>
      )}


        {currentPage === 4 && (
        <div>
        {/* Your content for the second page */}
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Which animal was in the role of tom in "Tom and Jerry"?</h3>
        <ul className="grid w-96 gap-6 md:grid-cols-2">
        <li>
      <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required/>
      <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-white-500 bg-white-400 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
      <div class="flex flex-row gap-4">
                <div class="w-full">Katze</div>
                    <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">
                        <img className='w-20 h-14' src="https://cdn-icons-png.flaticon.com/128/1998/1998592.png"/>
                    </a>
                </div>
      </label>
  </li>
  <li>
      <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
      <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-white-500 bg-white-400 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="flex flex-row gap-4">
                <div class="w-full">Maus</div>
                <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">
                    <img className='w-20 h-14' src="https://cdn-icons-png.flaticon.com/128/375/375105.png" />
                </a>
            </div>
      </label>
  </li>
  <li>
      <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
      <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-white-500 bg-white-400 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-white-700 dark:hover:bg-white-600">
      <div class="flex flex-row gap-4">
            <div class="w-full">Hund</div>
                <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">
                    <img className='w-20 h-14' src="https://cdn-icons-png.flaticon.com/128/1998/1998627.png"/>
                </a>
            </div>
      </label>

  </li>
  <li>
      <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
      <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-white-500 bg-white-200 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div class="flex flex-row gap-4">
            <div class="w-full">Kuh</div>
                <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">
                    <img className='w-20 h-14' src="https://cdn-icons-png.flaticon.com/128/1998/1998610.png" />
                </a>
            </div>
      </label>
  </li>
        </ul>
        {/* <button onClick={() => handlePagination(1)}>Previous</button> */}
      </div>
      )}



      {/* Pagination navigation */}
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-8 text-sm my-12">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => handlePagination(currentPage - 1 > 0 ? currentPage - 1 : 1)}
            >
              
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
              </svg>
            </a>
          </li>
          {[1, 2, 3, 4].map((pageNumber) => (
            <li key={pageNumber}>
              <a
                href="#"
                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${
                  currentPage === pageNumber ? 'bg-white-50 border-blue-300' : 'hover:bg-gray-100 hover:text-gray-700'
                } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                onClick={() => handlePagination(pageNumber)}
              >
                {pageNumber}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => handlePagination(currentPage + 1 <= totalPages ? currentPage + 1 : totalPages)}
            >
              
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default GermanEasyAnimalMCQ;
