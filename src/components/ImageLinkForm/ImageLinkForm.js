import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit, onKeySubmit, user, input }) => {
	return (
		<div>
			<p className="f3">
				{"This app will detect faces in your pictures!"}
			</p>
			<div className="center">
				<div className="form center pa4 br3 shadow-5">
					<input 
						className="f4 pa2 w-70 center" 
						type="text" 
						onChange={onInputChange}
						onKeyDown={onKeySubmit}
					/>
					<button 
						className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" 
						onClick={() => {onButtonSubmit(user.id, user.name, user.entries, input )}}
					>Detect</button>	
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;