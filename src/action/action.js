export const ADD = 'ADD'; 
export const SHIFT = 'SHIFT';

export const add=(payload)=>{
	return {
		type:ADD,
		payload:payload
	}
}

export const shift=(payload)=>{
	return {
		type:SHIFT,
		payload:payload
	}
}