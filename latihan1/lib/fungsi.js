// fungsi menggambar titik
function gmr(imgdata1,x,y,r,g,b) {
            var index;
            index = 4 * (x + (y * gambar.width));
            imgdata1.data[index] = r;
            imgdata1.data[index + 1] = g;
            imgdata1.data[index + 2] = b;
            imgdata1.data[index + 3] = 255;

        }

//fungsi menggambar lingkaran  
function lingkaran(imgdata1,xc,yc,radius,r,g,b) {
    
    for (var theta = 0; theta < Math.PI*2;theta += 0.01){
        x = xc + radius * Math.cos(theta);
        y = yc + radius * Math.sin(theta);

        gmr(imgdata1, Math.ceil(x), Math.ceil(y) ,r,g,b,);
    }


}