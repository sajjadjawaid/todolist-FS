import PropTypes from 'prop-types';
 
 function Signup({updateLogin}) {
   return (
    <div className="w-1/4 h-3/5 bg-white gap-y-8 flex flex-col justify-center items-center">
    <p>SignUp.</p>
    <p className="text-lg">{"Already have an Account?"}   <span 
     onClick={() =>{
        updateLogin(true);

    }}
       className=" hover:underline hover:text-blue-400 cursor-pointer ">Login.</span></p>
    </div>
   )
 }
 
 Signup.propTypes = {
    updateLogin: PropTypes.func
  };
 export default Signup