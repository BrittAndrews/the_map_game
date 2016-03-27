import places from "./places";


export default class Place {

		constructor(correctAnswer){
			this.correct = correctAnswer;
		}
	
		render(message){
		return `
		<div class="question-box-wrapper">
			<div class="question">
				${message}
			</div>
			<input type=text> </input>
		</div>
		
		`;
	}


}