function dateAndHour() {
  const date = new Date()

  const day = date.getDate().toLocaleString('pt-BR', { minimumIntegerDigits: 2 })
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  const actualDate = [day, month, year].join('/')
  const actualHour = [hours, minutes].join(':')
  return actualDate + ' - ' + actualHour;
}

export default dateAndHour;