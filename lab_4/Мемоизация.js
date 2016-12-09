function foo (n) {
	var sum = 1;
	var mass = [];
	for(var i=1;i<=n;i++){
		sum *= i;
		mass.push(sum);
	}
	return function(x){
		return mass[x];
	}
}

var g = foo(20);

g(10);