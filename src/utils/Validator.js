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
