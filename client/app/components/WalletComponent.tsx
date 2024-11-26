export default function WalletComponent(){
    return(
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 mb-4 text-gray-600">
        <span>
          <i className="fas fa-home"></i>
        </span>
        <span>| Wallet</span>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl font-semibold mb-8">Wallet</h1>

      {/* Wallet and Payment Method */}
      <div className="grid gap-4 md:grid-cols-2 mb-8">
        {/* Payment Method */}
        <div className="bg-white text-black rounded-lg border border-black">
          <div className="flex bg-gray-800 py-2 rounded-t-md items-center">
            <h2 className="text-lg font-medium pl-4 text-white">Payment Method</h2>
          </div>
          <div className="p-6 text-center text-gray-500">
            No saved payment method
          </div>
        </div>

        {/* My Wallet */}
        <div className="bg-white text-black rounded-lg border border-black">
          <div className="flex bg-gray-800 py-2 rounded-t-md justify-between items-center">
            <h2 className="text-lg font-medium pl-4 text-white">My Wallet</h2>
            <button className="bg-gray-700 text-white px-3 mr-4 py-1 text-sm rounded-full hover:bg-gray-600">
              Modify Booking
            </button>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold">$0.00</p>
            <p className="text-gray-400 mt-2">
              Includes $0.00 of non-refundable credit
            </p>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-lg border border-black">
        <div className="flex bg-gray-800 py-2 rounded-t-md items-center">
          <h2 className="text-lg font-medium pl-4 text-white">Transaction History</h2>
        </div>

        {/* Transaction Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-600">
                <th className="p-4 border border-gray-300">Transaction ID</th>
                <th className="p-4 border border-gray-300">Description</th>
                <th className="p-4 border border-gray-300">Date</th>
                <th className="p-4 border border-gray-300">Amount</th>
                <th className="p-4 border border-gray-300">Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border border-gray-300">#0215864</td>
                <td className="p-4 border border-gray-300">1 Hour Driving Lesson with William - Booking #1065184</td>
                <td className="p-4 border border-gray-300">Mon, 04 Nov 2024</td>
                <td className="p-4 border border-gray-300 text-red-500">-$0.00</td>
                <td className="p-4 border border-gray-300 text-red-500">-$0.00</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300">#3484945</td>
                <td className="p-4 border border-gray-300">Credit Purchased</td>
                <td className="p-4 border border-gray-300">Mon, 04 Nov 2024</td>
                <td className="p-4 border border-gray-300 text-green-500">+$0.00</td>
                <td className="p-4 border border-gray-300 text-red-500">-$0.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer for Transaction History */}
        <div className="p-4 text-center text-gray-500">
          Displaying all 2 transactions
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex justify-between mt-8 text-gray-500 text-sm">
        <div className="space-x-4">
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Support</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Payment Policy</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </div>
    )
}