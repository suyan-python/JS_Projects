const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePdfs = async (mujiPDF) => {
  // await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  // await merger.add(p2); // merge only page 2
  // await merger.add(p3); // merge only page 2
  // await merger.add(p4); // merge only page 2
  // await merger.add(p5); // merge only page 2
  // // await merger.add(p6); // merge only page 2
  // // await merger.add(p7); // merge only page 2
  // // await merger.add(p8); // merge only page 2
  // // await merger.add(p9); // merge only page 2
  // // await merger.add(p10); // merge only page 2
  for(let i of mujiPDF)await merger.add(i);

   
  let d = new Date().getTime()

  await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
  return d;
  
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}

module.exports = {mergePdfs}   
