import React, { useState } from 'react'
import axios from 'axios'
import './Mobile.css'

const Home = () => {

    const [selectImg, setSelectImg] = useState(null)
    const [prediction, setPrediction] = useState('')
    const [showPredictionButton, setShowPredictionButton] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const imageFile = e.target.files[0]
        setSelectImg(imageFile)
        setPrediction('')
        setShowPredictionButton(true)
    }

 

    const handlePrediction = async () => {
        if(!selectImg) {
            alert('Please select an image')
            return
        }

        console.log('start Loading...')
        setIsLoading(true)

        const formData = new FormData()
        formData.append('file', selectImg)

        try {
            const response = await axios.post('http://localhost:5000/predict', formData)
            setPrediction(response.data.predicted_class)
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
            console.log('Loading is done...')
        }
    }

    
  return (
    <div className='home'>
    <h1>Welcome to the GEM Stone Prediction App.</h1>
        <div className='container'>
            <input 
            type="file" 
            id='upload_img' 
            accept='image/*' 
            name='upload'
            onChange={handleChange}
            /> 
            {selectImg ? (
                <img id='images' src={URL.createObjectURL(selectImg)} alt='Selected'/>
            ) : (
                <p id='images'>Select an image to be predicted.....</p>
            )}
            <div className='buttons'>
                <label for='upload_img'>Upload</label>

                <input 
                type='submit' 
                id='prediction' 
                onClick={handlePrediction}
                />
                
                {showPredictionButton && (
                    <label disabled={isLoading} htmlFor='prediction'>Prediction</label>
                )}
                
            </div>
        </div>
        {prediction && <p id='predictionResult'>Predicted: {prediction}</p>}
    </div>
  )
}

export default Home