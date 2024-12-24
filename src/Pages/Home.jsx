import React from 'react';
import { UsersDataEndpoint } from '../Services/endPoints';
import useFetch from '../hooks/useFetch';
import ImageDialog from '../Components/ImageDialog';
import Loader from '../Components/Loader';

export default function Home() {
    const {
        data: allUsersData,
        loading: allUsersLoading,
        error: allUsersError,
    } = useFetch(UsersDataEndpoint);

    if (allUsersLoading) {
        return <Loader />;
    }

    if (allUsersError) {
        return <div className="text-center py-4 text-red-500">Error: {allUsersError}</div>;
    }

    const users = allUsersData?.data || [];

    return (
        <div className="custom-container p-8 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-950">
                User Information Table
            </h1>
            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full bg-white rounded-lg">
                    <thead className="bg-slate-700 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                                ID
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                                First Name
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                                Last Name
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                                Email
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-100">
                                <td className="py-3 px-6 text-sm font-medium text-gray-900">{user.id}</td>
                                <td className="py-3 px-6 text-sm text-gray-700">{user.first_name}</td>
                                <td className="py-3 px-6 text-sm text-gray-700">{user.last_name}</td>
                                <td className="py-3 px-6 text-sm text-gray-700">{user.email}</td>
                                <td className="py-3 px-6 text-sm">
                                    <ImageDialog imageUrl={user.avatar} buttonText="Show Avatar" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
