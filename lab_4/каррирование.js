function f(a){
	this.sum *= a;
	alert(this.sum);
}

var foo{
	sum : 1;
}

var g = bind(f,foo);

g(2);