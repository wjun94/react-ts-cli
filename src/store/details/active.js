import { SetData } from './active-type'

export const setData = () => {
  return (dispath, state) => {
    console.log(state())
    const { detailsReducer } = state()
    if (detailsReducer.data.length === 0) {
      console.log(111)
      setTimeout(() => {
        dispath({ type: SetData, data: [200] })
      }, 2000)
    }
  }
}
