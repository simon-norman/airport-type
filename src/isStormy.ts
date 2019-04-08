const isStormy = (): boolean => {
  const randBetw1And10 = Math.floor(Math.random() * 10) + 1

  if(randBetw1And10 === 10) {
    return true;
  } 

  return false
}

export default isStormy;