// Here I will try to replicate c#sharp delegate

class Program {
	constructor() {
		new Compute().longRunning(this.informer);
	}

	informer(i) {
		console.log("Progress ", i);
	}
}

class Compute {
	longRunning(callBack) {
		for (let i = 0; i < 1000; i++) {
			callBack(i);
		}
	}
}

new Program();
