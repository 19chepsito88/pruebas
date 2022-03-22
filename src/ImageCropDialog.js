import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './CropImage'


const ImageCropDialog = ({
    id,
    imageUrl,
    cropInit,
    zoomInit,
    onCancel,
    setCroppedImageFor
}) => {
    if (zoomInit == null) {
        zoomInit = 1;
    }
    if (cropInit == null) {
        cropInit = { x: 0, y: 0 };
    }
   

    const [zoom, setZoom] = useState(zoomInit);
    const [crop, setCrop] = useState(cropInit);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const onCropChange = (crop) => {
        setCrop(crop)
    }

    const onZoomChange = (zoom) => {
        setZoom(zoom)
    }

    const onCropComplete=(croppedArea,croppedAreaPixels)=>{
        setCroppedAreaPixels(croppedAreaPixels)
    }

    const onCrop= async()=>{
        const croppedImageUrl= await getCroppedImg(imageUrl,croppedAreaPixels);
        setCroppedImageFor(id, crop,zoom,croppedImageUrl)
    }
    return (
        <div>
            <div className='backdrop'>

            </div>
            <div className='crop-container'>
                <Cropper
                    image={imageUrl}
                    zoom={zoom}
                    crop={crop}
                    onCropChange={onCropChange}
                    onZoomChange={onZoomChange}
                    onCropComplete={onCropComplete}
                />
            </div>
            <div className='controls'>
                <div className='controls-upper-area'>
                    
                    <input
                        type={'range'}
                        min={1}
                        max={3}
                        step={0.1}
                        value={zoom}
                        onInput={(e) => { onZoomChange(e.target.value) }}
                        className='slider'
                    ></input>
                
                
                </div>
                <div className='button-area'>
                    <button onClick={onCancel}>Cancel</button>
                    <button onClick={onCrop}>Crop</button>
                </div>
            </div>
        </div>
    )
}

export default ImageCropDialog