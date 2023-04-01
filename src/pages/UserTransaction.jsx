import { FaArrowDown } from "react-icons/fa";

const UserTransaction = () => {
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
            <td>Active</td>
            <td>Approve</td>
            <td>
              <button className="pl-4">
                <FaArrowDown />
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Haris Rahman</td>
            <td>Bni.jpg</td>
            <td>26 /hari</td>
            <td>Active</td>
            <td>Approve</td>
            <td>
              <button className="pl-4">
                <FaArrowDown />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTransaction;
