import { HiOutlineMail } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { PiMapPinAreaFill } from "react-icons/pi";


export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f9f7f2] flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-md max-w-6xl w-full p-10 flex gap-12">
        {/* Left section */}
        <div className="flex-1">
          <h2 className="text-4xl font-semibold text-blue-800 mb-4">Get In Touch</h2>
          <p className="text-gray-500 mb-8 text-sm max-w-sm">
            For property inquiries please contact the seller directly by using the contact seller section on each listing. We do not own the properties or have any additional information.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-blue-900">
              <HiOutlineMail size={32} />

              <div>
                <div className="font-semibold">Email Us</div>
                <div className="text-sm text-gray-600">Info@Aiprojectmanager.Com</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-blue-900">
              <MdPhone size={32}/>
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-sm text-gray-600">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-blue-900">
              <PiMapPinAreaFill size={32} />

              <div>
                <div className="font-semibold">Location Us</div>
                <div className="text-sm text-gray-600">Dhanmondi, Dhaka</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right section (form) */}
        <form className="flex-1 max-w-md space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              defaultValue="Pappu"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-700 focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              defaultValue="Info@Aiprojectmanager.Com"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-400 placeholder-gray-400 focus:border-blue-700 focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
              Number
            </label>
            <input
              type="tel"
              id="number"
              placeholder="+1(555) 123-4567"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-700 focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write Your Message Here"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 resize-none focus:border-blue-700 focus:ring focus:ring-blue-300"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="bg-[#1C3988] text-white px-10 rounded-md text-sm font-medium hover:bg-blue-900 cursor-pointer py-3 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
