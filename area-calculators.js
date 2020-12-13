 
// function for rectangle 

function calculateRectangleArea (length, width ) {

  const area = length * width; 

  if (length < 0 || width < 0) {

    return undefined;

  } else {

    return area; 


  }




}


//function for the triangle

function calculateTriangleArea (base, height) {

  const tArea = base * height / 2; 

  if (base < 0 || height < 0) {

    return undefined;

  } else {

    return tArea; 

  }


}


//function for the circle 

function calculateCircleArea (radius) {

  const cArea = Math.PI * Math.pow(radius,2 ) ;

  if (radius < 0) {

    return undefined;

  } else {

    return cArea; 

  }

}

console.log (calculateCircleArea(-10));