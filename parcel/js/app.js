import highway from "@dogstudio/highway";
import TimelineLite from "gsap";

class fade extends highway.Tranistion {
  in(from, to, done) {
    const tl = new TimelineLite();
    tl.fromTo(to, 0.5, { left: "-100%", top: "50%" }, { left: "0%" }).fromTo(
      to,
      1,
      { height: "2vh" },
      {
        height: "90vh",
        top: "10%",
        onComplete: function f() {
          done();
        },
      }
    );
  }
  out({ from, done }) {
    done();
  }
}
export default fade;
