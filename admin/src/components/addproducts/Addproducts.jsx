import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload} from '@fortawesome/free-solid-svg-icons'


const Addproducts = () => {
 const [image,setimage]=useState(false)
 const [details,setdetails]=useState({
    image:'',
    category:'',
    brand:'',
    description:'',
    price:''

 })

 const updateDetails=(e)=>{
   
    setdetails({...details,[e.target.name]:e.target.value})

 }

 const imageHandler=(e)=>{
    setimage(e.target.files[0]) 
    console.log(image)

 }
 let formData=new FormData()
 formData.append('product',image)


 const handleAdd=async()=>{
    const response1=await fetch('http://localhost:8000/upload',{
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

    const url= await response1.json()
    details.image=url.image_url; 
    const response2=await fetch('http://localhost:8000/product/save',{
        method:"POST",
        headers:{
            Accept:"application/json",
            'Content-Type':'application/json',
        },
        body:JSON.stringify(details)
    })
    const data=await response2.json() 
    console.log(data.savedproduct)
    alert('product added')
    
 }

  return (
    <div className='addproduct' style={{
        boxSizing:'border-box',
        width:'100%',
        padding:'30px 50px',
        margin:'20px 30px',
        display:'flex',
        flexDirection:'column'
    }}>
    <div style={{
        display:'flex',
        width:'100%'
    }}>
    <div className='category' style={{
            width:'100%',
            color:'#7b7b7b'
        }}>
            <p><b>Select Category</b></p>
           <select name="category" style={{
            width:'180px',
            height:'30px'
           }} value={details.category} onChange={updateDetails}>
            <option value="">choose category</option>
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="kids">kids</option>

           </select>
        </div>
        <div className='brand' style={{
            width:'100%',
            color:'#7b7b7b'
        }}>
            <p><b>Brand</b></p>
            <input type='text'  name='brand' placeholder='brand' style={{
                boxSizing:'border-box',
                width:'100%',
                height:'50px',
                borderRadius:'4px',
                paddingLeft:'15px',
                border:'1px solid black',
                outline:'none',
                color:'#7b7b7b',
                fontSize:'14px'
            }} value={details.brand} onChange={updateDetails}/>
        </div>

    </div>
    <div style={{
        display:'flex',
        width:'100%',
        gap:'10px'
    }}>
       
        <div className='description' style={{
            width:'100%',
            color:'#7b7b7b'
        }}>
            <p><b>Description</b></p>
           <textarea type='text'  name='description' style={{
                boxSizing:'border-box',
                width:'100%',
                height:'50px',
                borderRadius:'4px',
                paddingLeft:'15px',
                border:'1px solid black',
                outline:'none',
                color:'#7b7b7b',
                fontSize:'14px',
            
            }} placeholder='description' value={details.description} onChange={updateDetails}/>
        </div>
        <div className='price'  style={{
            width:'100%',
            color:'#7b7b7b'
        }}>
            <p><b>Price</b></p>
            <input type='text' name='price' placeholder='price' style={{
                boxSizing:'border-box',
                width:'100%',
                height:'50px',
                borderRadius:'4px',
                paddingLeft:'15px',
                border:'1px solid black',
                outline:'none',
                color:'#7b7b7b',
                fontSize:'14px'
            }} value={details.price} onChange={updateDetails}/>
        </div>
        </div>
    <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:'20px'
    }}>
        <p><b>upload image</b></p>
    <div className='imageupload' style={{
            width:'160px',
            height:'110px',
            color:'#7b7b7b', 
            border:'1px solid black',
            display:'flex',
            justifyContent:'center',
            cursor:'pointer'
            

          
        }}>
              
            <label htmlFor='file-input'>
                {
                    image?<img src={URL.createObjectURL(image)} style={{
                        height:'110px',
                        width:'160px'
                    }}/>: <FontAwesomeIcon icon={faUpload} size='6x' />
                }
           
            </label>
            <input onChange={imageHandler}  type='file' name='image' id='file-input'hidden style={{
                boxSizing:'border-box',
                width:'100%',
                height:'50px',
                borderRadius:'4px',
                paddingLeft:'15px',
                border:'1px solid black',
                outline:'none',
                color:'#7b7b7b',
                fontSize:'14px',
                cursor:'pointer'
                
            }}/>
            

        </div>

    </div>
     
       

       
        <button style={{
            width:'180px',
            height:'30px',
            marginTop:'20px',
            backgroundColor:'red',
            color:'white',
            borderRadius:'3px'
        }} onClick={handleAdd}>Add</button>
        
      
    </div>
  )
}

export default Addproducts
