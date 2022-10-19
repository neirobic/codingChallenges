function DNAtoRNAV1(dna) {
    /* (array of string) => array of string
      return an RNA sequence from the given DNA sequence ('dna').
      
      DNAtoRNA('GCAT') => 'GCAU'
      DNAtoRNA('GATTACA') => 'GAUUACA'
      DNAtoRNA('CACA') => 'CACA'
      DNAtoRNA('') => ''
    */
      let dnaArray = dna.split('');
      
      let rnaArray = dnaArray.map(nucleotide => nucleotide == 'T'? 'U' : nucleotide)
      
      let rna = rnaArray.join('');
      
      return rna;
    }

  function DNAtoRNAV2(dna) {
    /* (string) => string
      return an RNA sequence from the given DNA sequence ('dna').
      
      DNAtoRNA('GCAT') => 'GCAU'
      DNAtoRNA('GATTACA') => 'GAUUACA'
      DNAtoRNA('CACA') => 'CACA'
      DNAtoRNA('') => ''
    */
      let dnaArray = dna.split('');
      
      let rnaArray = dnaArray.map(nucleotide => nucleotide == 'T'? 'U' : nucleotide)
      
      let rna = rnaArray.join('');
      
      return rna;
    }

    function DNAtoRNAV3(dna) {
        /* (string) => string
        return an RNA sequence from the given DNA sequence ('dna').
        
        DNAtoRNA('GCAT') => 'GCAU'
        DNAtoRNA('GATTACA') => 'GAUUACA'
        DNAtoRNA('CACA') => 'CACA'
        DNAtoRNA('') => ''
      */
        return dna.replace(/T/g, 'U'); 
      }