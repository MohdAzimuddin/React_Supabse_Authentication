const EmailInput = ({onChange,error}) => {
  return (
    <div className='w-full'>
        <input type="email"
        onChange={onChange}
      placeholder="Enter your email"
      className="text-zinc-800 p-2 font-bold rounded-md text-lg w-full"
        />
         {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}

export default EmailInput