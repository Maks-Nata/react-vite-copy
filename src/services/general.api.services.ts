const  baceURL=import.meta.env.VITE_BASE_URL
console.log(baceURL)
export const getUsers = async <T>(): Promise<T> => {
  return    await fetch(`${baceURL}/users`).then(res => res.json())


}