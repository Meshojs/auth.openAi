import Image from 'next/image';
import micro from '/public/micro.svg';
import apple from '/public/apple.svg';
import google from '/public/google.svg';


export default function Main() {
    return (
        <>
            <div className='container mx-auto text-center mt-5' style={{
                position:'absolute',
                top:'45%',
                left:'50%',
                transform:'translate(-50% , -50%)'
            }} >
                <div className='row mx-auto text-center'>
                    <div className='col-7 col-sm-6     mx-auto text-center fs-sm-2 fs-2 fw-bold'>Welcome Back</div>
                </div>
                <div className='row mx-auto col-12 '>
                    <div className='col-12 col-sm-9 col-md-7 col-lg-10 col-xl-7  mx-auto  mt-3 '>
                        <input placeholder='Email address' style={{ border: '1px solid #c2c8d0', height: "50px" }} className=' col-11 col-lg-6 col-xl-5 rounded-2 px-4 py-2 fs-6' ></input>
                    </div>

                </div>
                <div className='row mx-auto '>
                    <div className='col-12 col-sm-9 col-md-7 col-lg-10 col-xl-7 mx-auto  mt-4 '>
                        <input value={'Continue'} type='submit' style={{ background: '#10a37f', border: '1px solid #c2c8d0', height: "50px" }} className=' text-white btn col-11 col-lg-6  col-xl-5  rounded-2 px-4 py-2 fs-6' ></input>
                    </div>

                </div>
                <div className='row mx-auto '>
                    <div className='col-8 mx-auto  mt-3  ' style={{ fontSize: '14px', }}>
                        Don't have an account? <span style={{ color: '#10a37f' }}>Sign up</span>
                    </div>

                </div>
                <hr className='col-9 col-sm-6 col-md-6  col-lg-4 col-xl-3 mt-3 mx-auto text-center mt-2 px-3' />
                    <span className='px-4 py-1 text-center' style={{position:'absolute' , fontSize:"13px" , top:'225px' , transform:'translateX(-40px)', backgroundColor:'white'}}>OR</span>

                <div className='row mx-auto '>
                    <div className='col-12 col-sm-9 col-md-7 col-lg-10 col-xl-7 mx-auto  mt-2 '>
                        <div value={'Continue With Google'} type='submit' style={{ background: 'white', border: '1px solid #c2c8d0', height: "50px" }} className='text-start  text-dark btn col-11 col-lg-6 col-xl-5 rounded-2 pt-3 mt-2  fs-6' >
                            <Image src={apple} width={25} className='mx-2 mx-2 me-auto text-start float-start'></Image>
                            <span className='mt-2 ms-2 '> Continue With Google</span>
                        </div>

                    </div>
                    <div className='col-12 col-sm-9 col-md-7 col-lg-10 col-xl-7 mx-auto  mt-2 '>
                        <div value={'Continue With Google'} type='submit' style={{ background: 'white', border: '1px solid #c2c8d0', height: "50px", fontSize: '15px' }} className='text-start  text-dark btn col-11 col-lg-6 col-xl-5 rounded-2 py-3  mt-2  ' >
                            <Image src={micro} width={25} className='mx-2  mx-2 float-start'></Image>
                            <span className='mt-1 ms-2'>Continue With Microsoft Account</span>
                        </div>

                    </div>
                    <div className='col-12 col-sm-9 col-md-7 col-lg-10 col-xl-7 mx-auto mt-2 '>
                        <div value={'Continue With Google'} type='submit' style={{ background: 'white', border: '1px solid #c2c8d0', height: "50px" }} className='text-start  text-dark btn col-11 col-lg-6 col-xl-5 rounded-2 fs-6 py-2' >
                            <Image src={google} width={25} className=' mx-2  me-auto  float-start'></Image>
                            <span className='col-1 pt-2 text-start   ms-2 py-5 my-4'>Continue With Apple</span>
                        </div>

                    </div>

                </div>
            </div>


        </>
    );
}
