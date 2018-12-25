export default (email, password) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const passwordRegex = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i

  const emailIsValid = emailRegex.test(email)
  const passwordIsValid = passwordRegex.test(password)

  let message = ''

  if (!passwordIsValid) message = 'パスワードは半角英数字、それぞれ１文字以上を含む８文字以上で入力してください'
  if (!emailIsValid) message = '正しいメールアドレスを入力してください'

  return message
}
