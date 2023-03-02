import React,{useState} from 'react'




export const AddJersey = () => {

    const [jerseyName, setJerseyName] = useState('');
    const [jerseyDescription, setJerseyDescription] = useState('');
    const [jerseyPrice, setJerseyPrice] = useState(0);
    const [jerseyImage, setJerseyImage] = useState(null);
    const [error, setError] = useState('');

  return (
    <div className='container'>
        <br/>
            <h2>ADD JERSEY</h2>
        <hr/>
        <form autoComplete='off' className='form-group'>
            <label htmlFor='jersey-name'>Jersey Name</label>
            <br/>
            <input type='text' className='form-control' required
            />
            <label htmlFor='jersey-description'>Description</label>
            <br/>
            <input type='text' className='form-control' required
            />
            <label htmlFor='jersey-price'>Jersey Price</label>
            <br/>
            <input type='number' className='form-control' required
            />
            <label htmlFor='jersey-image'>Jersey Image</label>
            <br/>
            <input type='file' className='form-control'
            />
            <br/>
            <button className='btn btn-success btn-md'>ADD</button>
        </form>

        {error && <span>{error}</span>}
    </div>
  )
}
