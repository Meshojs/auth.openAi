import Image from 'next/image';
import logo from '../public/open.png';
import Main from './components/main';
import Footer from './components/footer'
export default function App() {
  return (
    <>
        <div className='container mx-auto text-center  mt-4 pt-1'>
                <Image src={logo} alt="Logo" width={32} height={32} />
        </div>

            <Main/>

            <Footer/>

    </>
  );
}
