export default list => {
  const R = list

  if (!R) return R

  for (let i = R.length - 1; i > 0; i--) { // eslint-disable-line
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = R[i]
    R[i] = R[j]
    R[j] = tmp
  }

  return R
}
