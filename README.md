# reciprocal-sv
Fixed point reciprocal in SystemVerilog  
Currently implements Q6.10 reciprocal with saturation logic

## Simulation

### Dependencies
- [Verilator (version 4.0 or above)](https://www.veripool.org/projects/verilator/wiki/Installing)
- [nvm](https://github.com/creationix/nvm)
- cmake
- gtkwave (optional)

### Run instructions
```bash
cd sim
nvm use || nvm install
npm i
make

gtkwave logs/reciprocal_test.fst
``` 


## Reference
https://observablehq.com/@drom/reciprocal-approximation  
  
signalflip-js (simulation): https://github.com/ameetgohil/signalflip-js  
