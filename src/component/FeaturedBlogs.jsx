import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import axios from "axios";
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'

const FeaturedBlogs = () => {

    const {loading} = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    const [topBlogs, setTopBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/blogs')
            .then(response => {
                const sortedTopBlogs = response.data.sort((a, b) => b.full_description.length - a.full_description.length);
                const filteredTopBlogs = sortedTopBlogs.slice(0, 10);
                setTopBlogs(filteredTopBlogs);
            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    useEffect(() => {
        document.title = "Top Blogs";
    }, []);

    const [sorting, setSorting] = useState([]);
    const data = topBlogs;

    const columns = [
        {
            header: 'Photo',
            cell: (row) => <img src={row.row.original.userPhoto} alt="User" style={{ width: '60px', height: 'auto', margin: '0px 0px 10px 0px', borderRadius:"50%", border: "2px solid red"}} />,
        },
        {
            header: 'Writer',
            accessorKey: 'user_name',
        },
        {
            header: 'Title',
            accessorKey: 'title',
        },
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting: sorting,
        },
        onSortingChange: setSorting,
    })

    return (
        <div>
            <div className="text-center mt-16 mb-10 md:mb-16">
                <h1 className="mx-auto flex gap-4 justify-center text-[#ff6481] text-2xl md:text-4xl font-bold animate__animated animate__backInRight">Read All Top Blogs</h1>
            </div>
        <div className="mx-auto p-4 md:my-16 md:py-16 shadow-md sm:rounded-lg bg-white rounded-2xl">
            <table className=" w-full rtl:text-right ">
            <thead>
                <tr>
                    <th>Serial Number</th>
                    {table.getHeaderGroups()[0].headers.map(header => (
                        <th
                            key={header._id}
                            onClick={header.column.getToggleSortingHandler()}
                        >
                            {header.isPlaceholder ? null : (
                                <div>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                    {
                                        { asc: '🔼', desc: '🔽' }[
                                            header.column.getIsSorted() ?? null
                                        ]
                                    }
                                </div>
                            )}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row, rowIndex) => (
                    <tr key={row._id}>
                        <td>{rowIndex + 1}</td>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell._id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
};

export default FeaturedBlogs;
