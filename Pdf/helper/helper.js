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

export {configOrientation};