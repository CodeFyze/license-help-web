import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
export default function InviteComponent(){
    return(
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
        <div className="flex items-center space-x-2 mb-4 text-gray-600">
          <span>
            <i className="fas fa-home"></i>
          </span>
          <span>| Invite</span>
        </div>
        <h1 className="text-2xl font-semibold mb-8">Invite</h1>
        <div className="bg-[#1F2A37] text-white p-6 rounded-[100px] mb-8 relative">
  <div className="absolute top-4 right-4">
    <img src="/stop-icon.png" alt="Stop Icon" className="w-12 h-12" /> {/* Stop icon placeholder */}
  </div>

  <h2 className="text-xl text-center font-bold mb-2">Refer friends & family to earn cash!</h2>
  <p className="mb-4 text-center">
    Earn cash together with your friend & family each time they make their first purchase with your link!
  </p>

  <div className="flex justify-around items-center mb-4">
    <div className="text-center">
      <img src="/youget-01.png" alt="10% You Get" className="w-28 h-28 mx-auto" />
    </div>
    <div className="text-center">
      <img src="/youget-01.png" alt="20% They Get" className="w-28 h-28 mx-auto" />
    </div>
  </div>
  <p className="text-xs text-center text-gray-400">
    *Referral rewards are credited to your balance account each time someone you have referred completes
    their first booking. You are able to cash out your reward balance to a PayPal account at any time.{" "}
    <a href="#" className="underline text-white">
      Terms & Conditions
    </a>{" "}
    apply.
  </p>
</div>
        <div className="bg-white text-black   mb-8">
          <h2 className="bg-gray-800 text-white py-2 rounded-t-md text-center font-medium">
            Simply share your unique link
          </h2>
          <div className="flex p-10  justify-between items-center  rounded-lg mt-4">
            <input
              type="text"
              value="https://yourapp.com/KASHIF-HRTON"
              readOnly
              className="bg-gray-100 p-2 border border-black rounded-full flex-1 text-gray-500"
            />
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg ml-2 hover:bg-gray-600">
              Copy
            </button>
          </div>
          <p className="text-gray-500 text-center mt-4 ">
            Or tell people to enter <span className="font-semibold">KASHIF-HRTON</span> into the referral code field
            during their signup
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <FaFacebook className="w-6 h-6 text-blue-600 cursor-pointer" />
            <FaTwitter className="w-6 h-6 text-blue-400 cursor-pointer" />
            <FaInstagram className="w-6 h-6 text-pink-500 cursor-pointer" />
          </div>
        </div>
        <div className="bg-white text-black rounded-lg border border-gray-300 p-6 mb-8">
          <h2 className="text-lg font-medium mb-2">My Rewards</h2>
          <p className="text-gray-500">Current Balance: $0.00</p>
        </div>
  
        {/* Bottom Image
        <div className="mt-44">
          <img src="/Frame594.png" alt="Rewards Image" className="w-full bg-lime-200 top-[900px] absolute" />
        </div> */}
      </div>
    )
}