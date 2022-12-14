import EmailInputField from "../EmailInputField";
import Link from "next/link";


export default function Login(){
    return(
        <div className="flex flex-col m-auto gap-10 justify-center items-center px-10 sm:px-20 py-24 bg-freshly-white-2">
            <h1 className="font-bold text-5xl">Log In</h1>
            <div className="sm:w-[600px]">
                <form className="flex flex-col gap-8 pb-8">
                    <EmailInputField />
                    <div className="flex flex-col">
                        <label className="font-semibold pb-1">Password</label>
                        <input 
                            className='border-solid border-2 p-2 hover:border-blue-300'
                            placeholder="enter password"
                            type="password"
                            />
                    </div>
                    <button className='bg-blue-500 px-4 py-2 text-white hover:bg-blue-900'>Log In</button>
                </form>
                <div className="flex justify-between text-sm">
                    <Link href="/Forgot Password">
                        <a className="underline underline-offset-2 text-blue-500">Forgot Password?</a>
                    </Link>
                    <p>{"Don't have an account?"}
                        <Link href="/join-now">
                            <a className="underline underline-offset-2 text-blue-500">Get Started</a>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}