// import Image from "next/image";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <main className="flex min-h-screen w-full justify-between font-inter">
//       {children}
//       <div className="auth-asset">
//         <div>
//           <Image 
//             src="/icons/auth-image.svg"
//             alt="Auth image"
//             width={500}
//             height={500}
//             className="rounded-l-xl object-contain"
//           />
//         </div>
//       </div>
//     </main>
//   );
// }
import Image from "next/image";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image 
            src="/icons/auth-image3.png"
            alt="Auth image"
            width={500}
            height={500}
            style={{width: '90%', height:'90%', marginLeft:'20px', marginRight:'20px', marginTop:'-100px'}}
            className="rounded-l-xl object-contain"
            
          />
          <div style={{marginLeft:'20px', marginTop:'20px'}}>
        <div  style={{marginBottom:'20px'}}>
        <h1 className="text-15 font-ibm-plex-serif font-bold text-black-1">Firts Platypus Bank</h1>
          User: user_good
          <br />
          Password: pass_good
        </div>
          
          <h1 className="text-15 font-ibm-plex-serif font-bold text-black-1">Developer Contact</h1>
          <p className="text-gray-600 mb-2">For any inquiries, please reach out:</p>
          <div className="flex flex-col items-start">
            <p className="text-gray-800">📧 Email: <a href="mailto:terefefeleke@gmail.com" className="text-blue-500 hover:underline">terefefeleke@gmail.com</a></p>
            <p className="text-gray-800">📞 Phone: <a href="tel:+251921788140" className="text-blue-500 hover:underline">+251 (921) 78-8140</a></p>
          </div>
          </div>
         
        </div>
      </div>
      {/* Add the ToastContainer here */}
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        closeOnClick 
        draggable 
        pauseOnHover 
      />
    </main>
  );
}
