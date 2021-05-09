const dut = require('../build/Release/dut.node');
const {Sim, SimUtils, RisingEdge, RisingEdges, FallingEdge, FallingEdges, Edge, Edges, Interfaces} = require('signalflip-js');
const { Clock, Tick } = SimUtils;
const {Elastic} = Interfaces;
const _ = require('lodash');
const f2f = require('fixed2float');

const jsc = require('jsverify');
const assert = require('assert');

let sim;

describe('Basic Group', () => {
  let setup = (name) => {
    // set up the environment
    dut.init(name); // Init dut
    sim = new Sim(dut);

      let dummyClk = (val) => {
	  return val;
      };
      // Dummy clock
      let clk = new Clock(dummyClk, 1);
      sim.addClock(clk);
    
    // TODO: Add setup code (interfaces, transaction, ...) etc...

    // TODO: Add reset task
    /*sim.addTask(function* () {
       dut.reset_n(0);
       yield* RisingEdges(dut.clk, 10); // assert reset low for 10 clock cycles
       dut.reset_n(1);
       yield* RisingEdge(dut.clk);
     }(), 'RESET');
     */
    // TODO: Add post_run tasks (test checking)
    // sim.addTask(() => { /* post_run function */}, 'POST_RUN'});

  };
  it('reciprocal_test', function () {
    this.timeout(10000); // Set timeout to expected run time of the test in ms
      setup('reciprocal_test');
      sim.addTask(function *() {
          for(let i of _.range(0xffff)) {
              //console.log((f2f.toFixed(1.0/f2f.toFloat(i,6,10))).toString(16));
              dut.i_data(i);
              //dut.t_0_dat(i);
              //dut.t_0_req(1);
              //dut.i_16_ack(1);
              yield* Tick();
              //yield* RisingEdge(dut.clk);
          }
      }());
      sim.run(100000);
  });
});

