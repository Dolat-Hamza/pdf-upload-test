// pages/_app.js
import '../styles/globals.css';
import Sidebar from "./Components/Sidebar"

function MyApp({ Component, pageProps }) {
  return (
      <div className="flex w-full h-screen">
        <Sidebar />
        <div className="flex-grow bg-white p-12">
          <Component {...pageProps} />
        </div>
      </div>
  );
}

export default MyApp;
