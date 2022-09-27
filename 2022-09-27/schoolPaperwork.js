function paperwork(n, m) {
    /* (number, number) => number
      return how many total pages you need given n classmates and m pages of homework
      if n < 0 or m < 0, return 0
      paperwork(5, 5) => 25
      paperwork(-5,5) => 0
      paperwork(4,90) => 360
      paperwork(1,1) => 1
    */
      return (n < 0 || m < 0) ? 0 : n*m
  }