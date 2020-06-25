import React, {useState} from 'react';
// // import { Image,Container,Row,Col } from 'react-bootstrap';
import './App.css';
import axios from 'axios';
import DefaultImg from './assets/default-img.jpg';


function ImageHook () {
	const [product, setProduct] = useState({main_image: DefaultImg, thumb_image: DefaultImg}); 	
	const uploadMainImage= (e) => {
		
		let main_image = new FormData();
		
		main_image.append('imageName',"multer-image" + Date.now())
    main_image.append('imageData', e.target.files[0])
		setProduct({...product, main_image: main_image})
		
		// this.setState({
    //   formData: {
    //     multerImage: URL.createObjectURL(e.target.files[0])
    //   }
    // })
		// let reader = new FileReader();
		// let main_image =e.target.files[0];
		// console.log('The main_image is now', main_image);
		// reader.onloadend = () =>{
		// 	setProduct({...product, main_image: URL.createObjectURL(main_image)})	
		// }
		// reader.readAsDataURL(main_image);
	}

	const uploadThumbImage = (e)=>{
		alert('its coming')
		let thumb_image = new FormData();
		thumb_image.append('imageName1',"multer-image1" + Date.now())
		thumb_image.append('imageData1', e.target.files[0])
		setProduct({...product, thumb_image: thumb_image})
	}		
		// this.setState({
      //   formData :{
      //     multerImage_Thumb: URL.createObjectURL(e.target.files[0])
      //   }
      // }); 
     
	// 	let reader= new FileReader();
	// 	let thumb_image = e.target.files[0];
	// 	console.log('The thumb_images are now', thumb_image);
	// 	reader.onloadend = () =>{
	// 		setProduct({...product, thumb_image: URL.createObjectURL(thumb_image)})
	// 	}
	// 	reader.readAsDataURL(thumb_image)
	// }
	const saveData = (e) =>{
		e.preventDefault()
		axios.post('http://localhost:3001/api/uploadmulter',product)
      .then((response) =>{
        if(response.data.success) {
          alert('the file have been successfully uploaded')
          // this.setDefaultImage('multer')
        }
      }).catch((err) =>{
        alert('error have been occured now please try again');
      })
		console.log('The data of images are here now', product)
	}
	return(
		<div className="main-container">
			<div className="main-heading">
				<div className="image-container">
					<form>
						<div className="process">              
							<h4 className="process_heading"> Process: using multer</h4>
							<p className="process_details">Upload image to the node server coneected with the mongo db to help the multer</p>
							<input className="process_upload-btn"type="file" onChange={(e) => uploadMainImage(e)}/>
							<img src={product.main_image} alt="upload_img" className="process_img"/>
						</div>
						<div className="process">
							<input className="process_upload-btn" type="file" onChange={(e)=> uploadThumbImage(e)}/>
							<img src={product.thumb_image} alt="upload_img" className="process_img"/>
						</div>
						<button className="btn" onClick={(e)=>saveData(e)} >
               Save Data <span className="badge badge-primary"></span>
             </button>
        </form>
       </div>
     </div>
    </div>
	)
}
// class App extends React.Component {
//   // constructor(props) {
//   //   super(props)
//   //   this.state =  {
//   //     formData : {
//   //       multerImage: DefaultImg,
//   //       multerImage_Thumb: DefaultImg
//   //     }
//   //   }
//   // }

//   // setDefaultImage(uploadType) {
//   //   if(uploadType === "multer") {
//   //     this.setState({
//   //       formData : {
//   //         multerImage: DefaultImg,
//   //         multerImage_Thumb: DefaultImg
//   //       }
//   //     });
//   //   }  
//   //   }

//   // uploadImageFirst(e) {
//   //   e.preventDefault();
//   //   // let main_image = new FormData();
//   //   // main_image.append('imageName',"multer-image" + Date.now())
//   //   // main_image.append('imageData', e.target.files[0])
//   //   // this.setState({
//   //   //   formData: {
//   //   //     multerImage: URL.createObjectURL(e.target.files[0])
//   //   //   }
//   //   // })
//   //   let reader = new FileReader();
//   //   let file = e.target.files[0];

//   //   reader.onloadend = () =>{
//   //     this.setState({
//   //       formData: {
//   //         multerImage: file

//   //       }
//   //     })
//   //   }

//   //   reader.readAsDataURL(file)
//   // }
//   // uploadImageSecond(e) {
//   //   e.preventDefault();
//   //   // if (method === "multer") {
//   //   //   let thumb_image = new FormData();
//   //   //   thumb_image.append('imageName1',"multer-image1" + Date.now())
//   //   //   thumb_image.append('imageData1', e.target.files[0])
//   //   //   this.setState({
//   //   //     formData :{
//   //   //       multerImage_Thumb: URL.createObjectURL(e.target.files[0])
//   //   //     }
//   //   //   }); 
//   //   // } 
//   //   let reader = new FileReader();
//   //   let file = e.target.files[0];

//   //   reader.onloadend = () =>{
//   //     this.setState({
//   //       formData: {
//   //         multerImage_Thumb: file
//   //       }
//   //     })
//   //   }
//   //   reader.readAsDataURL(file) 
//   // }
//   // // uploadImage1(e,method) {
//   // //   console.log(this.state.formDat)
//   // // }
//   //   // if (method === "multer") {
//   //   //   let imgFormObj = new FormData();
//   //   //   imgFormObj.append('imageName',"multer-image" + Date.now())
//   //   //   imgFormObj.append('imageData', e.target.files[0])
//   //   //   imgFormObj.append('imageName_Thumb',"multer-image" + Date.now())
//   //   //   imgFormObj.append('imageData_Thumb', e.target.files[0])
//   //   //   this.setState({
//   //   //     multerImage: URL.createObjectURL(e.target.files[0])
//   //   //   });
//   //   //   axios.post('http://localhost:3001/api/uploadmulter',imgFormObj)
//   //   //   .then((response) =>{
//   //   //     if(response.data.success) {
//   //   //       alert('the file have been successfully uploaded')
//   //   //       // this.setDefaultImage('multer')
//   //   //     }
//   //   //   }).catch((err) =>{
//   //   //     alert('error have been occured now please try again');
//   //   //   })
//   //   // }
//   // // }

//   // uploadData(e) {
//   //   e.preventDefault()
//   //   console.log('the target ed files are',this.state.formData);
//   // }
//   constructor(props) {
//     super(props);
//     this.state = {
//       formData: {
//         name: 'zainbintariq',
//         image_file: '',
//         thumb_file: ''
//       }
//     };
//   }

// _handleImageChange(e) {
//   // e.preventDefault();

//   let reader = new FileReader();
//   let file = e.target.files[0];

//   reader.onloadend = () => {
//     this.setState({
//       formData :{
//         image_file: file
//         // imagePreviewUrl: reader.result
//       }
//     });
//   }

//   reader.readAsDataURL(file)
// }

// _handleImageChangeSecond(e) {
//   // e.preventDefault();

//   let reader = new FileReader();
//   let file = e.target.files[0];

//   reader.onloadend = () => {
//     this.setState(prevState{
//       formData: {
//         thumb_file: file
//         // imagePreviewUrl1: reader.result
//       }
//     });  
//   }

//   reader.readAsDataURL(file)
// }
// onSubmit(e) {
//   e.preventDefault();
//   alert('the states data are now', this.state.formData);
//   console.log('The name of state is here now', this.state.formData.name);
//   console.log("the saved images are now", this.state.formData);
// }
// render(){
//   // let {imagePreviewUrl} = this.state;
//   // let {imagePreviewUrl1} = this.state;
 
//   // let $imagePreview = null;
//   // let $imagePreview1 = null;
//   // if (imagePreviewUrl) {
//   //   $imagePreview = (<Image style={{ width : "120px"}} src={imagePreviewUrl} thumbnail />);
//   // } else {
//   //   $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
//   // }

//   // if (imagePreviewUrl1) {
//   //   $imagePreview1 = (<Image style={{ width : "120px"}} src={imagePreviewUrl1} thumbnail />);
//   // } else {
//   //   $imagePreview1 = (<div className="previewText">Please select an Image for Preview</div>);
//   // }
    
//   return (
//     <form>
//       <label>Please Select Image</label><br />
//       <input type="file" 
//         onChange={(e)=>this._handleImageChange(e)} />
//       <label>Please Select second Image</label><br />
//       <input type="file" 
//         onChange={(e)=>this._handleImageChangeSecond(e)} />
//       <button onClick={(e) => this.onSubmit(e)}>Save Images now</button>
//     </form>
//    )
// }
//   }
// }

export default ImageHook;
