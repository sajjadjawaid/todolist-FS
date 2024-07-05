import PropTypes from 'prop-types';

function Login({updateLogin}) {
  return (
    <div className="w-1/4 h-3/5 bg-white gap-y-8 flex flex-col justify-center items-center">
        <p>Login.</p>
        <p className="text-lg">{"Don't ave an Account?"}   <span 
        onClick={() => {
            updateLogin(false)
        }} 
        className=" hover:underline hover:text-blue-400 cursor-pointer">SignUp.</span></p>
        </div>
  )

}

Login.propTypes = {
    updateLogin: PropTypes.func
  };

export default Login