const svgToJson = () => {
   const out = document.getElementById('out');
   const svg = document.getElementsByTagName('svg')[0];
   const g = svg.getElementsByTagName('g')[0];
   const paths = g.getElementsByTagName('path');

   const w = svg.getAttribute('width');
   const h = svg.getAttribute('height');
   const vb = svg.getAttribute('viewBox');
   const xmlns = svg.getAttribute('xmlns');

   const obj = {
      w,
      h,
      vb,
      xmlns,
      svgPaths: Array.from(paths).map(path => {
         const id = path.getAttribute('id') || null;
         const d = path.getAttribute('d');
         const f = path.getAttribute('fill');

         return { id, d, f };
      })
   };

   const formattedObj = JSON.stringify(obj, null, 3);
   out.innerHTML = formattedObj;
}

svgToJson();