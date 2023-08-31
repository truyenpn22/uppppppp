import { useEffect, useState } from "react"
import { fetchAllUser } from "../../services/apiServices";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import ModalAddNew from "@/components/ModalAddNew";
import _, { debounce } from "lodash";


const Posts = () => {
    const [listUsers, setListUser] = useState();
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const handleSearch = debounce((event) => {
        let term = event.target.value;
        if (term) {
            let cloneListUsers = _.cloneDeep(listUsers);
            cloneListUsers = cloneListUsers.filter((item) =>
                item.email.includes(term)
            );
            setListUser(cloneListUsers);
        } else {
            fetchData(1);
        }
    }, 500);

    const handlePageClick = (event) => {
        fetchData(+event.selected + 1);
    };

    const fetchData = async (page) => {
        try {
            let res = await fetchAllUser(page);
            if (res && res.data && res.data) {
                setTotalUsers(res.total);
                setListUser(res.data);
                setTotalPages(res.total_pages);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        fetchData(1);
    }, []);
    return (
        <section className="px-24 mx-auto">
            <div className="grid grid-cols-2 py-5">
                <ModalAddNew />
                <form>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." onChange={(event) => handleSearch(event)} />
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Author
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Time
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers &&
                            listUsers.length > 0 &&
                            listUsers.map((item, index) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={`user-${index}`}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                                            <Link href={`/posts/${item.id}`}>{item.id}</Link>
                                        </th>
                                        <td className="px-6 py-8 cursor-pointer"><Link href={`/posts/${item.id}`}>Noteworthy technology acquisitions 2021</Link></td>
                                        <td className="px-6 py-8 cursor-pointer"><Link href={`/posts/${item.id}`}>{item.email}</Link></td>
                                        <td className="px-6 py-8 cursor-pointer"><Link href={`/posts/${item.id}`}>2022-12-23T07:33:28.057Z</Link></td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>

            <div id="react-paginate" className="py-5 mx-auto text-center">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={totalPages}
                    previousLabel="Previous"
                    renderOnZeroPageCount={null}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                />
            </div>
        </section>


    )
}

export default Posts