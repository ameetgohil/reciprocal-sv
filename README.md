# reciprocal-sv
Fixed point reciprocal in SystemVerilog  
Currently implements Q6.10 reciprocal with saturation logic

## Simulation

### Dependencies
- [Verilator (version 4.0 or above)](https://www.veripool.org/projects/verilator/wiki/Installing)
- [nvm](https://github.com/creationix/nvm)
- cmake
- gtkwave (optional)

Set the RISCV variable in the environment to the location of riscv gcc tools

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
