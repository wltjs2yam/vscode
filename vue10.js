var html = new Vue({
	el:"#box",
	data:{
		a:"",
		b:"",
		total:"",
		view:"0"
	},
	methods:{
		button:function(z){
		this.total = (Number(this.a) * Number(this.b)).toLocaleString();
		if(this.total != "" || this.tal > 0){
			this.view = 1;
	       }
		}
	}
})