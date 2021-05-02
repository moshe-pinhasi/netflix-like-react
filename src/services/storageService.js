const save = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data))
}

const remove = (name) => {
  localStorage.removeItem(name)
}

const load = (name) => {
  const data = localStorage.getItem(name)
  if (!data) return null

  return JSON.parse(data)
}

export const storage = {
  save,
  load,
  remove
}