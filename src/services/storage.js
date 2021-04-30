const save = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data))
}

const load = (name) => {
  const data = localStorage.getItem(name)
  if (!data) return null

  return JSON.parse(data)
}

export default {
  save,
  load
}