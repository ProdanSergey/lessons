// const fakeOverload = () => {
// 	let count = 0;
// 	for (let index = 0; index < 10000000; index++) {
// 		count = index;
// 	}
// };

// const user = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	say() {
// 		console.log(this.firstName + " " + this.lastName);
// 	},
// 	ping() {
// 		console.log("I am still alive!!!");
// 	},
// 	asyncSay() {
// 		this.timerId = setTimeout(() => {
// 			this.say();
// 		}, 2500);
// 	},
// 	asyncPing() {
// 		this.intervalId = setInterval(() => {
// 			this.ping();

// 			setTimeout(() => {
// 				clearInterval(this.intervalId);
// 			}, 10000);
// 		}, 1000);
// 	},
// 	cancel() {
// 		clearTimeout(this.timerId);
// 	},
// };

// user.asyncSay();
// user.asyncPing();

// // setTimeout(() => {
// // 	console.log("canceled");
// // 	user.cancel();
// // }, 1000);

// console.log("hello sync world");

// document.addEventListener("click", () => {});

const clock = document.getElementById("clock");
const alarm = document.forms.alarm;

const updateTime = () => {
  const now = new Date();
};

const updateClock = () => {
  const findTimeoutToNextSecond = () => {
    const timeout = //...//;
    return timeout;
  }
  // find current time
  // update clock
  setTimeout(() => {
    setInterval(() => updateTime(), 1000)
    // once a second update clock
  }, findTimeoutToNextSecond() /* find timeout to next second */)
}



const setAlarm = (() => {
  const timeId = null;

  return () => {
    if (timeId) // clean previous

    timeId = setTimeout(() => {
  
    }, findTimeoutAsDifferenceBetweenCurrentAndAlarmTime())
  };
})()

console.log(clock, alarm);
