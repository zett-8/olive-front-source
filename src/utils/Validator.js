const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegex = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i

export const FormValidation = (email, password) => {
  const emailIsValid = emailRegex.test(email)
  const passwordIsValid = passwordRegex.test(password)

  let message = ''

  if (!passwordIsValid) message = 'パスワードは半角英数字、それぞれ１文字以上を含む８文字以上で入力してください'
  if (!emailIsValid) message = '正しいメールアドレスを入力してください'

  return message
}

export const EmailValidation = email => {
  const emailIsValid = emailRegex.test(email)

  let message = ''

  if (!emailIsValid) message = '正しいメールアドレスを入力してください'

  return message
}

export const TwoPasswordValidation = (pass1, pass2) => {
  const passwordIsValid1 = passwordRegex.test(pass1)
  const passwordIsValid2 = passwordRegex.test(pass2)

  let message = ''

  if (!passwordIsValid1 || !passwordIsValid2) message = 'パスワードは半角英数字、それぞれ１文字以上を含む８文字以上で入力してください'

  return message
}

export const workFormValidation = work => {
  let message = ''

  const colors = ['crimson', 'mediumblue', 'forestgreen', 'gold', 'purple', 'brown', 'black', 'grey', 'ivory']

  if (
    work.title === '' ||
    work.caption === '' ||
    work.height === '' ||
    work.width === '' ||
    work.depth === '' ||
    work.genre === '' ||
    work.subgenre === '' ||
    work.price === ''
  ) {
    message = '必須項目(*)を入力してください'
  }

  let colorCount = 0
  colors.forEach(color => {
    if (work[color] === true) colorCount += 1
  })

  if (colorCount > 3) message = '選べるカラーは３つまでです'

  if (work.image1 === null) message = '少なくとも１つの画像をアップロードしてください'

  return message
}
