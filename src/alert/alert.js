import toast from 'react-hot-toast';
// import { BsFillCheckCircleFill } from 'react-icons/bs';
// import { MdOutlineError } from 'react-icons/md';


export const customAlert = (msg,boolean)=>{
    boolean ? toast.success(msg) : toast.error('msg')
}