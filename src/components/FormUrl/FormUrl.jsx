import {useState,useRef} from 'react'
import {Post} from '../../services/post'
import {ImScissors} from 'react-icons/im'
import {TbScissorsOff} from 'react-icons/tb'
import {validator} from '../../validations/inputUrl'
import style from './FormUrl.module.css'
import {customAlert} from '../../alert/alert'
import {Toaster} from 'react-hot-toast'
export default function FormUrl() {
  const [url,setUrl] = useState()
  const [responseUrl, setResponse] = useState()
  const [error, setError] = useState()
  const inputUrl = useRef()

  const handleUrl = ()=>{
    const validation = validator(inputUrl.current.value)
    if(validation){
      setUrl({
          url:inputUrl.current.value
      })
      setError()
    }else{
      setError("debe ingresar una direccion URL ejemplo : https://www.google.com")
    }
  }
  const sendInfoUrl = async (e)=>{
    e.preventDefault();
    const response = await Post("https://acortador.fly.dev/",url);
    if(!response){
      customAlert("Hubo un error al cargar la URL",false)
    }else{
      setResponse(response);
      customAlert("Se acorto la URL con exito",true)
      inputUrl.current.value="";
    }
  }

    return (
    <form className={style.container} onSubmit={sendInfoUrl}>
      <div className={style.subContainer}>
        <input className={style.input} ref={inputUrl} type="text" placeholder="ejemplo:https://www.google.com/etc" onChange={handleUrl}/>
        <button disabled={error ? true : false}>{error?<TbScissorsOff size="2rem" color="red"/>:<ImScissors size="2rem" color="green"/>}</button>
      </div>
      {error && <h3 className={style.h3}>{error}</h3>}
        <h2>{responseUrl && <a href={responseUrl.shortener} target="_blank">{responseUrl.shortener}</a>}</h2>
        <Toaster/>
    </form>
  )
}
