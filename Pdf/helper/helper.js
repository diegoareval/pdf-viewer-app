const configOrientation = (orientation, WIN_HEIGHT, WIN_WIDTH) => {
  let horizonta = false
  let widt = 0
  if (orientation == 'LANDSCAPE-LEFT' || orientation == 'LANDSCAPE-RIGHT') {
    widt = WIN_HEIGHT > WIN_WIDTH ? WIN_HEIGHT : WIN_WIDTH;
    horizonta = true;
  } else {
    horizonta = false;
    widt = WIN_HEIGHT > WIN_WIDTH ? WIN_HEIGHT : WIN_WIDTH;
  }
  return {
    horizonta,
    widt,
  };
};

const prev = (page) =>{
   return page > 1 ? page - 1 : 1;
}

const next = (page, numberOfPages) => {
  return page + 1 > numberOfPages ? numberOfPages : page + 1;
};

const zoomI = (scale) =>{
let scale = scale * 1.2;
scale = scale > 3 ? 3 : scale;
return scale
}

const zoomO = (scale) => {
  return scale > 1 ? scale / 1.2 : 1;
};

export {configOrientation, prev, next, zoomI, zoomO};