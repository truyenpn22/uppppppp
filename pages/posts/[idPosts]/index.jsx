/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import Popup from 'reactjs-popup'

const PostsDetail = () => {


    return (
        <section className='px-24 mx-auto'>
            <Link href="/" className='py-10'><i className="ri-arrow-right-line"></i>  Back to home</Link>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                <div className="px-6 my-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[1000px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                    <div className="flex flex-col justify-between p-5 leading-normal space-y-5">
                        <div className='flex justify-between items-center'>
                            <i class="ri-shield-user-fill text-5xl text-red-600"></i>
                            <h1>Joh Miceeeee</h1>

                        </div>
                        <h5 className="mb-2 xl:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className='text-gray-500'>Date: 2022-12-23T07:33:28.057Z</p>
                        <div className="py-5">
                            <Popup
                                trigger={<button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><i class="ri-arrow-right-double-line font-sm"> </i>Detail</button>
                                }
                                modal
                                nested
                            >
                                {close => (
                                    <div className="modal">
                                        <button className="close" onClick={close}>
                                            <i className="ri-close-line"></i>
                                        </button>
                                        <h1 className="text-center text-2xl font-bold"> Update Title </h1>

                                        <form className="px-5 py-10">
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your title</label>
                                                <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                                                <textarea id="content" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

                                            </div>

                                            <button onClick={() => { close() }} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                                        </form>
                                    </div>
                                )}
                            </Popup>
                        </div>

                    </div>

                </div>


                <div className="px-6 my-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[1000px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                    <div className="flex flex-col justify-between p-5 leading-normal space-y-5">
                        <div className='flex justify-between items-center'>
                            <i class="ri-shield-user-fill text-5xl text-red-600"></i>
                            <h1>Joh Miceeeee</h1>

                        </div>
                        <h5 className="mb-2 xl:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className='text-gray-500'>Date: 2022-12-23T07:33:28.057Z</p>
                        <div className="py-5">
                            <Popup
                                trigger={<button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><i class="ri-arrow-right-double-line font-sm"> </i>Detail</button>
                                }
                                modal
                                nested
                            >
                                {close => (
                                    <div className="modal">
                                        <button className="close" onClick={close}>
                                            <i className="ri-close-line"></i>
                                        </button>
                                        <h1 className="text-center text-2xl font-bold"> Update Title </h1>

                                        <form className="px-5 py-10">
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your title</label>
                                                <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                                                <textarea id="content" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

                                            </div>

                                            <button onClick={() => { close() }} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                                        </form>
                                    </div>
                                )}
                            </Popup>
                        </div>

                    </div>

                </div>



                <div className="px-6 my-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[1000px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                    <div className="flex flex-col justify-between p-5 leading-normal space-y-5">
                        <div className='flex justify-between items-center'>
                            <i class="ri-shield-user-fill text-5xl text-red-600"></i>
                            <h1>Joh Miceeeee</h1>

                        </div>
                        <h5 className="mb-2 xl:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className='text-gray-500'>Date: 2022-12-23T07:33:28.057Z</p>
                        <div className="py-5">
                            <Popup
                                trigger={<button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><i class="ri-arrow-right-double-line font-sm"> </i>Detail</button>
                                }
                                modal
                                nested
                            >
                                {close => (
                                    <div className="modal">
                                        <button className="close" onClick={close}>
                                            <i className="ri-close-line"></i>
                                        </button>
                                        <h1 className="text-center text-2xl font-bold"> Update Title </h1>

                                        <form className="px-5 py-10">
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your title</label>
                                                <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                                                <textarea id="content" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

                                            </div>

                                            <button onClick={() => { close() }} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                                        </form>
                                    </div>
                                )}
                            </Popup>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default PostsDetail