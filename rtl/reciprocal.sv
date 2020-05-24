module reciprocal
  (input wire[15:0] i_data,
   output wire[15:0] o_data
   );

   //QM.N M= 6, N= 10
   
   /*
    Reciprocal Algorithm
    a = input
    b = 1.466 - a
    c = a * b;
    d = 1.0012 - c
    e = d * b;
    output = e * 4;
    */

   lzc lzc_inst(.i_data(i_data), .lzc_cnt(lzc_cnt));

   assign rescale_lzc = M - lzc_cnt;
 
   //scale input data to be b/w .5 and 1 for accuraate reciprocal result
   assign scale_data = M >= lzc_cnt ? i_data >> (M-lzc_cnt): i_data << (lzc_cnt - M);

   assign a = i_data;

   //1.466 in Q6.10 is 16'h5dd - See fixed2float project on github for conversion
   assign b = 16'h5dd - i_daata;

   assign c = $signed(a) * $signed(b);

   //1.0012 in Q6.10 is 16'h401 - See fixed2float project on github for conversion
   assign d = 16'h401 - c[25:10];

   assign e = $signed(a) * $signed(d);

   assign f = $signed(e[25:10]);

   assign reci = |f[15:14] ? 16'h7FFF : f << 2; //saturation detection and (e*4)

   //rescale reci to by the lzc factor

   assign rescale_data = rescale_lzc[4] ? reci << (~rescale_lzc + 1'b1) : reci >> rescale_lzc;

   //Saturation logic
   assign sat_data = rescale_data[15] ? 16'h7FFF : rescale_data;

   assign o_data = sat_data;

endmodule
