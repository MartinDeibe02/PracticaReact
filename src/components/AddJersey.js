import React,{useState} from 'react'
import {storage, db}  from '../config/config'
import { Footer } from './Footer';
import { Navbar } from './Navbar'



export const AddJersey = () => {

    const [jerseyName, setJerseyName] = useState('');
    const [jerseyDescription, setJerseyDescription] = useState('');
    const [jerseyPrice, setJerseyPrice] = useState(0);
    const [jerseyImage, setJerseyImage] = useState(null);
    const [error, setError] = useState('');

    //Imagenes permitidad
    const types = ['image/png', 'image/jpeg'] 

    //Jersey handler
    const jerseyImgHandler = (e) => {
      let archivo = e.target.files[0];
      if(archivo && types.includes(archivo.type)){
        setJerseyImage(archivo);
        setError('');
      }else{
        setJerseyImage(null);
        setError('Invalid image');
      }
    }


    //evento cuando se envia el formulario
    const addJersey = (e) =>{
      e.preventDefault();
      //Subo la imagen a la bd
      const upload = storage.ref(`imagenes-nba/${jerseyImage.name}`).put(jerseyImage);
      upload.on('state_changed', snapshot=>{
        const progreso = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
        console.log(progreso);
      },err=>{
        setError(err.message)
    },()=>{
      // Guardo en la bd
      storage.ref('imagenes-nba').child(jerseyImage.name).getDownloadURL().then(url=>{
        db.collection('Productos').add({
          JerseyName: jerseyName,
          JerseyDescription: jerseyDescription,
          JerseyPrice: Number(jerseyPrice),
          JerseyImage: url

        }).then(()=>{
          setJerseyName('');
          setJerseyDescription('');
          setJerseyPrice(0);
          setJerseyImage('');
          setError('');
          document.getElementById('file').value = '';
        }).catch(err=>setError(err.message));
      })
    })
    }

  return (
    <div>
          <Navbar/>
    <div className='container'>

        <br/>
            <h2>ADD JERSEY</h2>
        <hr/>
        <form autoComplete='off' className='form-group' onSubmit={addJersey}>
            <label htmlFor='jersey-name'>Jersey Name</label>
            <br/>
            <input type='text' className='form-control' required onChange={(e) => setJerseyName(e.target.value)} value={jerseyName}
            />
            <label htmlFor='jersey-description'>Description</label>
            <br/>
            <input type='text' className='form-control' required onChange={(e) => setJerseyDescription(e.target.value)} value={jerseyDescription}
            />
            <label htmlFor='jersey-price'>Jersey Price</label>
            <br/>
            <input type='number' className='form-control' required onChange={(e) => setJerseyPrice(e.target.value)} value={jerseyPrice}
            />
            <label htmlFor='jersey-image'>Jersey Image</label>
            <br/>
            <input type='file' className='form-control' onChange={jerseyImgHandler} id='file'
            />
            <br/>
            <button className='btn btn-success btn-md'>ADD</button>
        </form>

        {error && <span>{error}</span>}
    </div>
    <Footer/>
    </div>
  )
}
