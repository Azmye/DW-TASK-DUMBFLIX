import { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const UserTransaction = () => {
  const [dropButton, setDropButton] = useState(false);
  return (
    <div className="container mx-auto py-20 h-[100vh]">
      <h2 className="font-bold text-white text-lg mb-5">
        Incoming Transaction
      </h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Users</th>
            <th>Bukti Transfer</th>
            <th>Remaining Active</th>
            <th>Status User</th>
            <th>Status Payment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Radif Ganteng</td>
            <td>Bca.jpg</td>
            <td>26 /hari</td>
            <td className="text-green-500">Active</td>
            <td>Approve</td>
            <td className="relative">
              <button
                className="pl-3"
                onClick={() => setDropButton(!dropButton)}
              >
                <IoMdArrowDropdownCircle className="text-2xl text-sky-500" />
              </button>
              {/* {dropButton && (
                <div
                  onMouseLeave={() => setDropButton(false)}
                  className="absolute flex flex-col bg-zinc-900 -left-8 rounded-md p-2"
                >
                  <button className="text-green-500">Approved</button>
                  <button className="text-red-500">Cancel</button>
                </div>
              )} */}
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Haris Rahman</td>
            <td>Bni.jpg</td>
            <td>26 /hari</td>
            <td className="text-green-500">Active</td>
            <td>Approve</td>
            <td className="relative">
              <button className="pl-3" onClick={() => setDropButton(true)}>
                <IoMdArrowDropdownCircle className="text-2xl text-sky-500" />
              </button>
              {/* {dropButton && (
                <div
                  onMouseLeave={() => setDropButton(false)}
                  className="absolute flex flex-col bg-zinc-900 -left-8 rounded-md p-2"
                >
                  <button className="text-green-500">Approved</button>
                  <button className="text-red-500">Cancel</button>
                </div>
              )} */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTransaction;
