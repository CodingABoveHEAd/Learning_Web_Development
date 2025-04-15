const EventEmmiter = require("events");
// console.log(EventEmmiter);

const emitter1 = new EventEmmiter();
// console.log(typeof emitter1);

function startPeriod() {
  console.log("class started");

  //raise an event
  setTimeout(() => {
    emitter1.emit("bellRing");
    emitter1.emit("bellRing2", {
      period: "first",
      text: "period ended",
    });
  }, 2000);
}

module.exports = {
  emitter1,
  startPeriod,
};
