
function mergeIntervals(intervals) {
   if (!intervals.length) return intervals;
   intervals.sort((a, b) => a[0] - b[0]);
   let prev = intervals[0];
   let res = [prev];
   for (let curr of intervals) {
       if (curr[0] <= prev[1]) {
           prev[1] = Math.max(prev[1], curr[1]);
       } else {
           res.push(curr);
           prev = curr;
       }
   }
   return res;
}

console.log(mergeIntervals([[1,3],[2,5]]));  
console.log(mergeIntervals([[1,3],[2,5],[4,6], [7,10]])); 
